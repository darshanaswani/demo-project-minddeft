import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchSearchDataAsync } from "../../redux/searchData/searchData.actions";
import "./Search.styles.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const searchButtonHandler = () => {
    if (!search) {
      return;
    }

    dispatch(fetchSearchDataAsync({ search, Navigate }));
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Wallet Address"
        className="search-box"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div className="search-box-icon" onClick={searchButtonHandler}>
        <i className="fa-solid color fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Search;
