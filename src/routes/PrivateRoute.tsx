import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { FinancialContext } from "../context/financialContext";
import { PrivateRouteProps } from "../types/financial.type";
import { Routes } from "../router/routes.enum";

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const context = useContext(FinancialContext);

  return (
    <>
      {context?.getAuth() ? (
        <div className='animate__animated animate__fadeIn'>{children}</div>
      ) : (
        <Navigate to={Routes.Login} />
      )}
    </>
  );
};

export default PrivateRoute;
