import React from "react";
import { Link } from "react-router-dom";

function Page1() {
  return (
    <div>
      Top Stocks
      <ul>
        <li>
          <Link to="/AAPL">AAPL</Link>
        </li>
        <li>
          <Link to="/GOOG">GOOG</Link>
        </li>

        <li>
          <Link to="/MSFT">MSFT</Link>
        </li>
      </ul>
    </div>
  );
}

export default Page1;
