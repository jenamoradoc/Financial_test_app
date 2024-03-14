import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { FinancialContext } from "../../../context/financialContext";
import { FormValues } from "../../../types/form.type";
import { Routes } from "../../../router/routes.enum";

const useLogin = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const context = useContext(FinancialContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    context?.authenticate(data.email);

    toast({
      title: "Logged in",
      description: "You have been logged in successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    setTimeout(() => {
      navigate(Routes.Dashboard, { replace: true });
    }, 3000);
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};

export default useLogin;
