import { Spinner } from "@chakra-ui/react";

const Loader = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <Spinner />
    </div>
  );
};

export default Loader;
