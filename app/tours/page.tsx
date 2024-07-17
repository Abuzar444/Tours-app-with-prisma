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
        <Input type='text' name='name' defaultValue='name' />
        <Input type='text' name='info' defaultValue='info' />
        <Input type='file' name='image' required accept='image/*' />
        <Input type='number' name='price' min={0} defaultValue={10} />
        <Button type='submit'>{pending ? "submitting" : "submit"}</Button>
      </form>
    </>
  );
};

export default ToursPage;
