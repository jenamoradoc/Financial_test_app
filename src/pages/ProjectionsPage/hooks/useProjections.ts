import { useContext } from "react";
import { Invoice } from "../../../types/invoice.type";
import { FinancialContext } from "../../../context/financialContext";

const useProjections = () => {
  const options = {
    title: "Financial Performance",
    curveType: "function",
    legend: { position: "bottom" },
    hAxis: { title: "Year" },
    vAxis: { title: "Amount ($)" },
    series: {
      0: { color: "#1f77b4" },
      1: { color: "#ff7f0e" },
      2: { color: "#2ca02c" },
      3: { color: "#d62728" },
      4: { color: "#9467bd" },
      5: { color: "#8c564b" },
    },
  };

  const invoices = useContext(FinancialContext).invoices;

  const transformInvoiceData = (invoices: Invoice[]) => {
    const data = [
      [
        "Year",
        "Revenue",
        "Expenses",
        "Profit",
        "Net Income",
        "Assets",
        "Liabilities",
      ],
    ];

    invoices.forEach((invoice: Invoice) => {
      const { year, amount } = invoice;
      const row = [
        year,
        amount,
        amount * 0.8,
        amount * 0.2,
        amount * 0.9,
        amount * 1.5,
        amount * 0.5,
      ];
      data.push(row as any);
    });

    return data;
  };

  return { options, data: transformInvoiceData(invoices) };
};

export default useProjections;
