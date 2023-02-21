import Lottie from "lottie-react";
import React from "react";
import beans from "../../beans.json";

export default function Loading() {
  const style = {
    height: 300,
  };
  return (
    <div className="flex justify-center items-center">
      <Lottie style={style} animationData={beans} loop={true} />
    </div>
  );
}
