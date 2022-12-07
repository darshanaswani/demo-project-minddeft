import React from "react";
import { useSelector } from "react-redux";
import Table from "../components/Table/Table.component";
import {
  selectSearchDataArray,
  selectSearchDataIsLoading,
} from "../redux/searchData/searchData.selector";
import Spinner from "../components/Spinner/Spinner.component";

const SearchTransaction = () => {
  const searchDataArray = useSelector(selectSearchDataArray);
  const isLoading = useSelector(selectSearchDataIsLoading);

  return (
    <>{isLoading ? <Spinner /> : <Table transactions={searchDataArray} />}</>
  );
};

export default SearchTransaction;
