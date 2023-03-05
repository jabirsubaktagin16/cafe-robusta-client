import React from "react";
import { Helmet } from "react-helmet-async";

export default function PageTitle({ title }) {
  return (
    <Helmet>
      <title>
        {title.length === 0 ? "Café Robusta" : `${title} | Café Robusta`}
      </title>
    </Helmet>
  );
}
