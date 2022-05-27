import React from 'react'
import { Outlet, useParams } from "react-router-dom";

function Page3() {
    let params = useParams();
    return (
      <h2>
        Forecast: {params.stockName}
      </h2>
    );
}

export default Page3