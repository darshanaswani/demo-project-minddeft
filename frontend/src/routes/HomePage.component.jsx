import React, { useEffect } from "react";
import { fetchTransactionsAsync } from "../redux/transactions/transactions.actions";
import { useDispatch, useSelector } from "react-redux";

import Table from "../components/Table/Table.component";
import {
  selectIsTransactionsLoading,
  selectPaginationData,
  selectTransactionsData,
} from "../redux/transactions/transactions.selector";
import Spinner from "../components/Spinner/Spinner.component";
import Pagination from "../components/Pagination/Pagination.component";

const HomePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsTransactionsLoading);
  const paginationData = useSelector(selectPaginationData);

  const transactions = useSelector(selectTransactionsData);

  useEffect(() => {
    dispatch(fetchTransactionsAsync());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Table transactions={transactions} />
          <Pagination paginationData={paginationData} />
        </>
      )}
    </>
  );
};

export default HomePage;
