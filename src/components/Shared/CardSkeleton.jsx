import React from "react";
import Skeleton from "react-loading-skeleton";

export default function CardSkeleton() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-2">
        <Skeleton
          style={{
            width: "100px",
            height: "100px",
          }}
        />
      </div>
      <div className="col-span-7">
        <h5 className="mb-2 text-2xl font-bold barlow-font uppercase  text-gray-900 tracking-wide">
          <Skeleton />
        </h5>
        <Skeleton count={3} />
      </div>
      <div className="col-span-3">
        <Skeleton style={{ width: "50px", float: "right" }} />
        <Skeleton />
      </div>
    </div>
  );
}
