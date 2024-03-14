import { useContext } from "react";

import Sidebar from "./Sidebar";
import { PageContainerProps } from "../types/financial.type";
import { FinancialContext } from "../context/financialContext";

const PageContainer = ({ children }: PageContainerProps) => {
  const context = useContext(FinancialContext);

  return (
    <div className='flex justify-between h-screen w-full'>
      <Sidebar />
      <div className='w-full ml-auto p-4 h-screen bg-transparent'>
        <nav className='mb-4 border-b pb-5'>
          <p>
            Welcome <strong>{context.getUser()}</strong>
          </p>
        </nav>
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
