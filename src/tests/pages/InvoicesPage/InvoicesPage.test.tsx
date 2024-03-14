import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { FinancialContext } from "../../../context/financialContext";
import InvoicesPage from "../../../pages/InvoicesPage/InvoicesPage";

const mockFinancialContext = {
  user: "testuser@example.com",
  getAuth: jest.fn().mockReturnValue(true),
  logout: jest.fn(),
  authenticate: jest.fn(),
  getUser: jest.fn().mockReturnValue("testuser@example.com"),
  invoices: [],
};

test("renders Sidebar with correct menu items", () => {
  render(
    <MemoryRouter>
      <FinancialContext.Provider value={mockFinancialContext}>
        <InvoicesPage />
      </FinancialContext.Provider>
    </MemoryRouter>
  );

  expect(screen.getByText("Logo")).toBeInTheDocument();

  expect(screen.getByText("Dashboard")).toBeInTheDocument();
  expect(screen.getByText("Projections")).toBeInTheDocument();
  expect(screen.getByText("Invoices")).toBeInTheDocument();
});

test("renders InvoicesPage with search input and clear filter button", () => {
  render(
    <MemoryRouter>
      <FinancialContext.Provider value={mockFinancialContext}>
        <InvoicesPage />
      </FinancialContext.Provider>
    </MemoryRouter>
  );

  expect(screen.getByText("Invoices List")).toBeInTheDocument();

  const searchInput = screen.getByPlaceholderText(
    "Search by Title, Year, Customer, or Status"
  );
  expect(searchInput).toBeInTheDocument();

  const clearFilterButton = screen.getByText("Clear Filter");
  expect(clearFilterButton).toBeInTheDocument();
});

test("search input works correctly", () => {
  render(
    <MemoryRouter>
      <FinancialContext.Provider value={mockFinancialContext}>
        <InvoicesPage />
      </FinancialContext.Provider>
    </MemoryRouter>
  );
  const searchInput = screen.getByPlaceholderText(
    "Search by Title, Year, Customer, or Status"
  );

  fireEvent.change(searchInput, { target: { value: "Title" } });

  expect(searchInput).toHaveValue("Title");
});

test("clear filter button works correctly", () => {
  render(
    <MemoryRouter>
      <FinancialContext.Provider value={mockFinancialContext}>
        <InvoicesPage />
      </FinancialContext.Provider>
    </MemoryRouter>
  );
  const searchInput = screen.getByPlaceholderText(
    "Search by Title, Year, Customer, or Status"
  );

  fireEvent.change(searchInput, { target: { value: "Title" } });

  expect(searchInput).toHaveValue("Title");

  const clearFilterButton = screen.getByText("Clear Filter");
  fireEvent.click(clearFilterButton);

  expect(searchInput).toHaveValue("");
});
