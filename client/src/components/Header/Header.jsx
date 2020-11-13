import React from "react";
import Button from "../Buttons";
import { Link } from "react-router-dom";

import "./Header.css";
function Header() {
  return (
    <div className="  row  d-flex align-items-center  justify-content-end header">
      <Link to="/image">
        <Button type="button" customClass="loadBtn" title="Add Image" />
      </Link>
    </div>
  );
}

export default Header;
