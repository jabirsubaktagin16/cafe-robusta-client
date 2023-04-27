import { useQuery } from "@tanstack/react-query";
import React from "react";
import SingleFoodManage from "../../../components/Dashboard/SingleFoodManage";
import Loading from "../../../components/Shared/Loading";
import PageTitle from "../../../components/Shared/PageTitle";

export default function ManageMenu() {
  const {
    data: menus = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["manageMenu"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:8000/api/v1/foods/manageMenu`, {
        method: "GET",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      if (res.status === 401 || res.status === 403) {
        logOut()
          .then(() => {
            localStorage.removeItem("accessToken");
            toast("Please Sign In First");
            navigate("/signin");
          })
          .catch((err) => console.log(err));
      }
      const data = await res.json();
      return data.response;
    },
  });

  if (isLoading) return <Loading />;

  return (
    <React.Fragment>
      <PageTitle title="Manage Menus" />
      <h2 className="text-4xl font-bold my-8 text-primary text-center">
        Manage Menus
      </h2>
      <div className="grid mx-auto mb-8 lg:px-20 gap-8">
        {menus?.map((menu) => (
          <SingleFoodManage menu={menu} key={menu._id} refetch={refetch} />
        ))}
      </div>
    </React.Fragment>
  );
}
