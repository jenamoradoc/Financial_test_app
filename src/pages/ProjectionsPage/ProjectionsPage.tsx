import { Chart } from "react-google-charts";

import PageContainer from "../../components/PageContainer";
import useProjections from "./hooks/useProjections";

const ProjectionsPage = () => {
  const { data, options } = useProjections();

  return (
    <PageContainer>
      <h1 className='text-xl mb-5'>Your history</h1>

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

export default ProjectionsPage;
