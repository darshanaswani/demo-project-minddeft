import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { selectPaginationData } from "../../redux/transactions/transactions.selector";
import "./Table.styles.css";

const Table = (props) => {
  const { transactions } = props;
  const paginationData = useSelector(selectPaginationData);
  const loc = useLocation().pathname;

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr className="table-heading-row">
            <th>Sr.No</th>
            <th>Transactions Hash</th>
            <th>Wallet Address</th>
            <th>Amount</th>
            <th>Date - Time</th>
          </tr>
        </thead>

        <tbody>
          {transactions?.map((data, i) => {
            return (
              <tr key={i} className="table-data-row">
                <td>
                  {loc === "/search"
                    ? i + 1
                    : (Number(paginationData.currentPage) - 1) *
                        paginationData.pageLimit +
                      i +
                      1}
                </td>
                <td>{data.Txhash}</td>
                <td>{data.Address}</td>
                <td>{data.Amount}</td>
                <td>{data.DateTime}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
