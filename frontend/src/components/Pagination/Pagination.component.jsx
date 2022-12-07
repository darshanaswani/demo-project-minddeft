import React from "react";
import { useDispatch } from "react-redux";
import { fetchTransactionsAsync } from "../../redux/transactions/transactions.actions";
import "./Pagination.styles.css";

const Pagination = ({ paginationData }) => {
  const dispatch = useDispatch();

  const leftButtonClickHandler = () => {
    if (Number(paginationData.currentPage) === 1) {
      return;
    }
    dispatch(
      fetchTransactionsAsync({
        page: Number(paginationData.currentPage) - 1,
        limit: 20,
      })
    );
  };

  const rightButtonClickHandler = () => {
    if (Number(paginationData.currentPage) === paginationData.totalPages) {
      return;
    }
    dispatch(
      fetchTransactionsAsync({
        page: Number(paginationData.currentPage) + 1,
        limit: 20,
      })
    );
  };

  return (
    <>
      <div className="pagination">
        <button onClick={leftButtonClickHandler}>❮</button>
        <button onClick={rightButtonClickHandler}>❯</button>
      </div>
      <p>
        Page {paginationData.currentPage} of{" "}
        {Math.floor(paginationData.totalPages)}
      </p>
    </>
  );
};

export default Pagination;
