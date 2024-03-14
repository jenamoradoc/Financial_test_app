import { ReactNode } from "react";

import { Invoice } from "./invoice.type";

export type FinancialContextType = {
  user: null | string;
  getAuth: () => boolean;
  logout: () => void;
  authenticate: (userEmail: string) => void;
  getUser: () => string | null;
  invoices: Invoice[];
};

export interface FinancialProviderProps {
  children: ReactNode | ReactNode[];
}

export interface PageContainerProps {
  children: React.ReactNode | React.ReactNode[];
}

export interface PrivateRouteProps {
  children: React.ReactNode | React.ReactNode[];
}

export interface PublicRouteProps {
  children: React.ReactNode | React.ReactNode[];
}
