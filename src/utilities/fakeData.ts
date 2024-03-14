import { Invoice } from "../types/invoice.type";

export const generateInvoices = (count: number): Invoice[] => {
  const invoices: Invoice[] = [];

  for (let i = 1; i <= count; i++) {
    invoices.push({
      id: i,
      title: `Invoice ${i}`,
      year: `${Math.floor(Math.random() * 30) + 1990}`,
      amount: Math.floor(Math.random() * 1000) + 100,
      customer: `Customer ${i}`,
      status: Math.random() < 0.5 ? "Paid" : "Unpaid",
    });
  }
  return invoices;
};
