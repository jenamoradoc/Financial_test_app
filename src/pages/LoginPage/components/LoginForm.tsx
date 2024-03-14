import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

import emailRegex from "../utilities/emailRegex";
import useLogin from "../hooks/useLogin";

const LoginForm = () => {
  const { handleSubmit, onSubmit, errors, register } = useLogin();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='bg-[#FEFFFF] w-96 rounded-lg flex flex-col p-8 gap-4'
    >
      <h1 className='text-2xl text-center'>Enter your credentials</h1>

      <FormControl isInvalid={!!errors.email}>
        <FormLabel htmlFor='email'>Email address</FormLabel>
        <Input
          type='text'
          id='email'
          placeholder='test@test.com'
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: emailRegex,
              message: "This is not a valid email.",
            },
          })}
        />

        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.password}>
        <FormLabel htmlFor='password'>Password</FormLabel>
        <Input
          type='password'
          id='password'
          placeholder='· · · · · · · · · · · · · ·'
          className='placeholder:font-bold'
          {...register("password", {
            required: "Password is required.",
            minLength: {
              value: 8,
              message: "Minimum length should be 8 characters.",
            },
          })}
        />

        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>
      </FormControl>

      <Button type='submit' colorScheme='teal' variant='solid'>
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
