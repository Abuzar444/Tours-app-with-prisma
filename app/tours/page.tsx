import FormContainer from "@/components/FormContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createTour } from "@/utils/actions";

const ToursPage = () => {
  return (
    <main>
      <h1 className='text-center text-3xl font-bold my-6'>Create Tour</h1>
      <FormContainer action={createTour}>
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
          submit
        </Button>
      </FormContainer>
    </main>
  );
};

export default ToursPage;
