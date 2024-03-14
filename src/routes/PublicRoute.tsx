import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { FinancialContext } from "../context/financialContext";
import { PublicRouteProps } from "../types/financial.type";
import { Routes } from "../router/routes.enum";

export const PublicRoute = ({ children }: PublicRouteProps) => {
  const context = useContext(FinancialContext);

  return (
    <>
      {!context?.getAuth() ? (
        <div className='animate__animated animate__fadeIn'>{children}</div>
      ) : (
        <Navigate to={Routes.Dashboard} />
      )}
    </>
  );
};
