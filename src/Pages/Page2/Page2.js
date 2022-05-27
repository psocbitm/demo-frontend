import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
function Page2() {
  let params = useParams();
  return (
    <>
      <h1>Stock Name: {params.stockName}</h1>
      <div>
        <Link to={`/${params.stockName}/forecast`}>Forecast</Link>
      </div>
      <Outlet />
    </>
  );
}

export default Page2;
