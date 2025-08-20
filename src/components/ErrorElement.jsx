import React from "react";
import { useRouteError } from "react-router-dom";
// import { CancelledError } from "@tanstack/react-query";

const ErrorElement = () => {
  const error = useRouteError();

  console.log(error);

  // ✅ Ignore cancelled queries
  // if (error instanceof CancelledError || error?.name === "CancelledError") {
  //   return <Outlet />;
  // }

  return <h4 className="text-4xl font-bold">There was an error...</h4>;
};

export default ErrorElement;
