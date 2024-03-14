export interface Invoice {
  id: number;
  title: string;
  year: string;
  amount: number;
  customer: string;
  status: "Paid" | "Unpaid";
}
