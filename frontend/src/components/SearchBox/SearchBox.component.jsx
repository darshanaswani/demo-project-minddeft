import React from "react";
import { Outlet } from "react-router-dom";
import Back from "../Back/Back.component";
import PdfButton from "../PdfCreator/PdfButton.component";
import Search from "../Search/Search.component";
import "./SearchBox.styles.css";

const SearchBox = () => {
  return (
    <>
      <div className="search-box-container">
        <div className="search-subcontainer">
          <Back />
          <Search />
          <PdfButton />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default SearchBox;
