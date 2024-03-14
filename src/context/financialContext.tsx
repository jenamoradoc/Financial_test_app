import { createContext, useEffect, useState } from "react";

import {
  FinancialContextType,
  FinancialProviderProps,
} from "../types/financial.type";
import { generateInvoices } from "../utilities/fakeData";

export const FinancialContext = createContext<FinancialContextType>(
  {} as FinancialContextType
);

export const FinancialProvider = ({ children }: FinancialProviderProps) => {
  const storedUser = JSON.parse(localStorage.getItem("user")!) ?? null;

  const [user, setUser] = useState<string | null>(storedUser);

  const invoices = generateInvoices(100);

  const getAuth = (): boolean => (user ? true : false);

  const getUser = () => user;

  const authenticate = (userEmail: string) => {
    localStorage.setItem("user", JSON.stringify(userEmail));

    setUser(userEmail);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <FinancialContext.Provider
      value={{ user, getAuth, logout, authenticate, getUser, invoices }}
    >
      {children}
    </FinancialContext.Provider>
  );
};
