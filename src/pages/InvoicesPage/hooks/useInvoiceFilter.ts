import { useContext, useState } from "react";

import { Invoice } from "../../../types/invoice.type";
import { FinancialContext } from "../../../context/financialContext";

const useInvoiceFilter = () => {
  const invoices = useContext(FinancialContext).invoices;

  const [filteredInvoices, setFilteredInvoices] = useState<Invoice[]>(invoices);
  const [filterValue, setFilterValue] = useState<string>("");

  const columns = [
    {
      name: "Title",
      selector: (row: Invoice) => row.title,
      sortable: true,
    },
    {
      name: "Year",
      selector: (row: Invoice) => row.year,
      sortable: true,
    },
    {
      name: "Amount",
      selector: (row: Invoice) => row.amount,
      sortable: true,
    },
    {
      name: "Customer",
      selector: (row: Invoice) => row.customer,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row: Invoice) => row.status,
      sortable: true,
    },
  ];

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = event.target.value.toLowerCase();
    setFilterValue(event.target.value);

    const filteredData = invoices.filter((row) =>
      Object.values(row).some(
        (value) =>
          typeof value === "string" && value.toLowerCase().includes(keyword)
      )
    );
    setFilteredInvoices(filteredData);
  };

  const clearFilter = () => {
    setFilteredInvoices(invoices);
    setFilterValue("");
  };

  return {
    handleFilterChange,
    filteredInvoices,
    columns,
    clearFilter,
    filterValue,
  };
};

export default useInvoiceFilter;
