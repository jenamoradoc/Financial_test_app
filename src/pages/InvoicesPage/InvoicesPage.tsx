import DataTable from "react-data-table-component";
import { Button, Input } from "@chakra-ui/react";

import PageContainer from "../../components/PageContainer";
import useInvoiceFilter from "./hooks/useInvoiceFilter";

const InvoicesPage = () => {
  const {
    columns,
    handleFilterChange,
    filteredInvoices,
    clearFilter,
    filterValue,
  } = useInvoiceFilter();

  return (
    <PageContainer>
      <h1 className='text-xl mb-5'>Invoices List</h1>
      <div className='flex gap-3'>
        <Input
          onChange={handleFilterChange}
          placeholder='Search by Title, Year, Customer, or Status'
          type='text'
          value={filterValue}
        />
        <Button colorScheme='teal' variant='outline' onClick={clearFilter}>
          Clear Filter
        </Button>
      </div>
      <DataTable columns={columns} data={filteredInvoices} pagination />
    </PageContainer>
  );
};

export default InvoicesPage;
