"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createTour } from "@/utils/actions";
import { useFormState, useFormStatus } from "react-dom";

const ToursPage = () => {
  const [message, formAction] = useFormState(createTour, null);
  const { pending } = useFormStatus();
  return (
    <>
      {message && <>{message.message}</>}
      <form action={formAction}>
        <Input type='text' name='name' defaultValue='name' className='mb-1' />
        <Input type='text' name='info' defaultValue='info' className='mb-1' />
        <Input
          type='file'
          name='image'
          required
          accept='image/*'
          className='mb-1'
        />
        <Input
          type='number'
          name='price'
          min={0}
          defaultValue={10}
          className='mb-1'
        />
        <Button type='submit' className='mb-1'>
          {pending ? "submitting" : "submit"}
        </Button>
      </form>
    </>
  );
};

export default ToursPage;
