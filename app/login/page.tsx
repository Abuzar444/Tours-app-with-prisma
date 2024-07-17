"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormState } from "react-dom";

const LoginPage = () => {
  return (
    <main className='flex items-center justify-center md:h-screen'>
      <div className='relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32'>
        <form action={""}>
          <Input type='text' name='name' defaultValue='uzair' />
          <Input type='email' name='email' defaultValue='uzair@gmail.com' />
          <Input type='password' name='password' defaultValue='password' />
          <Button
            type='submit'
            variant='outline'
            size='lg'
            className='w-full rounded-md'
          >
            Login
          </Button>
        </form>
      </div>
    </main>
  );
};
export default LoginPage;
