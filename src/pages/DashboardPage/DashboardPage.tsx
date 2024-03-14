import { FaUser, FaClock, FaLock } from "react-icons/fa";
import Chart from "react-google-charts";

import PageContainer from "../../components/PageContainer";
import { useProjectionHealth } from "./hooks/useProjectionHealth";

const DashboardPage = () => {
  const { data, options } = useProjectionHealth();

  return (
    <PageContainer>
      <h1 className='text-xl mb-5'>Your Dashboard</h1>
      <div className='flex justify-center items-center bg-financial-bg bg-center bg-opacity-50 bg-cover rounded-md'>
        <div className='grid grid-cols-4 gap-4 rounded-lg shadow-md p-4 bg-black bg-opacity-70 h-full'>
          <div className='col-span-1 p-3'>
            <FaUser className='text-white text-4xl mb-2' />{" "}
            <h2 className='text-2xl font-bold mb-4 text-white'>
              Financial Service
            </h2>
            <p className='text-slate-200'>
              A comprehensive financial service tailored to your needs. Manage
              your finances with ease.
            </p>
          </div>

          <div className='col-span-1 p-3'>
            <FaClock className='text-white text-4xl mb-2' />{" "}
            <h3 className='text-lg font-bold mb-2 text-white'>Benefits</h3>
            <p className='text-slate-300'>
              Easy online account management. Access your accounts anytime,
              anywhere.
            </p>
          </div>

          <div className='col-span-1 p-3'>
            <FaClock className='text-white text-4xl mb-2' />{" "}
            <h3 className='text-lg font-bold mb-2 text-white'>Benefits</h3>
            <p className='text-slate-300'>
              24/7 customer support. Get assistance whenever you need it.
            </p>
          </div>

          <div className='col-span-1 bg-slate-50 h-full rounded-md p-3'>
            <FaLock className='text-black text-4xl mb-2' />{" "}
            <h3 className='text-lg font-bold mb-2 text-black'>Benefits</h3>
            <p className='text-slate-700'>
              Secure transactions. Your transactions are safe and protected.
            </p>
          </div>
        </div>
      </div>
      <Chart
        chartType='LineChart'
        width='100%'
        height='400px'
        data={data}
        options={options}
      />
    </PageContainer>
  );
};

export default DashboardPage;
