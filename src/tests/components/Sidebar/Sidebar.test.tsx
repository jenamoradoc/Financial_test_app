import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Sidebar from "../../../components/Sidebar";
import { FinancialContext } from "../../../context/financialContext";

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
        <Sidebar />
      </FinancialContext.Provider>
    </MemoryRouter>
  );

  expect(screen.getByText("Logo")).toBeInTheDocument();

  expect(screen.getByText("Dashboard")).toBeInTheDocument();
  expect(screen.getByText("Projections")).toBeInTheDocument();
  expect(screen.getByText("Invoices")).toBeInTheDocument();
});
