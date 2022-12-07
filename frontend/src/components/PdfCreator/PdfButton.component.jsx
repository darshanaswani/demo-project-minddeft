import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useSelector } from "react-redux";
import "./PdfButton.styles.css";
import { useLocation } from "react-router-dom";

const PdfButton = () => {
  const data = useSelector((state) => state.searchData);
  const loc = useLocation().pathname;
  console.log(data);
  const createPdf = () => {
    const doc = new jsPDF();
    const col = [
      "Sr. No.",
      "Transactions Hash",
      "Wallet Address",
      "Amount",
      "Date - Time",
    ];
    var rows = [];

    data.searchDataArray.forEach((element, i) => {
      const temp = [
        i + 1,
        element.Txhash,
        element.Address,
        element.Amount,
        element.DateTime,
      ];
      rows.push(temp);
    });

    doc.autoTable(col, rows, {
      styles: {
        overflow: "linebreak",
        fontSize: 6,
        valign: "middle",
      },
      headStyles: {
        fillColor: "#455165",
        fontSize: 7,
        halign: "center",
      },
    });

    doc.save("new.pdf");
  };
  return (
    <>
      <button
        disabled={loc === "/search" ? false : true}
        className="download"
        onClick={createPdf}
      >
        <i className="fa-solid download-icon fa-file-pdf"></i>
      </button>
    </>
  );
};

export default PdfButton;
