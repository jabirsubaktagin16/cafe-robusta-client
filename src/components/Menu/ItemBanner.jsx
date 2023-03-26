import React from "react";

export default function ItemBanner({ title }) {
  return (
    <div
      className="flex items-center justify-center h-[200px] bg-cover bg-center bg-no-repeat md:h-[250px]"
      style={{
        backgroundImage: `url("./menu-header.png")`,
      }}
    >
      <div className="max-w-100">
        <h1 className="mb-5 text-3xl font-bold text-white barlow-font uppercase">
          {title}
        </h1>
      </div>
    </div>
  );
}
