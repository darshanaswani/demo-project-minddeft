import React from "react";
import { useSelector } from "react-redux";
import Table from "../components/Table/Table.component";
import {
  selectSearchDataArray,
  selectSearchDataIsLoading,
  selectTotalAmount,
} from "../redux/searchData/searchData.selector";
import Spinner from "../components/Spinner/Spinner.component";

const SearchTransaction = () => {
  const searchDataArray = useSelector(selectSearchDataArray);
  const isLoading = useSelector(selectSearchDataIsLoading);
  const totalAmount = useSelector(selectTotalAmount);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h2 className="total-amount">Total amount: {totalAmount}</h2>
          <Table transactions={searchDataArray} />
        </>
      )}
    </>
  );
};

export default SearchTransaction;
