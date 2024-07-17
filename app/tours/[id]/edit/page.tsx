import FormContainer from "@/components/FormContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { singleTour, updateTour, updateTourImageAction } from "@/utils/actions";
import Image from "next/image";
import { redirect } from "next/navigation";

const EditPage = async ({ params }: { params: { id: string } }) => {
  const tours = await singleTour(params.id);
  if (!tours) redirect("/tours");
  return (
    <>
      <div className='w-full relative h-[400px] mb-5'>
        <Image
          src={tours.image}
          alt={tours.name}
          fill
          sizes='100vw'
          className='object-cover rounded-md'
        />
      </div>
      <FormContainer action={updateTourImageAction}>
        <input type='hidden' name='id' value={tours.id} />
        <Input type='file' name='image' accept='image/*' className='my-2' />
        <Button type='submit' variant='outline' size='lg'>
          submit
        </Button>
      </FormContainer>
      <FormContainer action={updateTour}>
        <input type='hidden' name='id' value={tours.id} />
        <div className='grid md:grid-cols-2 gap-8 mb-4 mt-8'>
          <Input type='text' name='name' defaultValue={tours.name} />
          <Input type='text' name='info' defaultValue={tours.info} />
          <Input type='number' name='price' defaultValue={tours.price} />
          <Button type='submit' variant='outline' size='lg' className='w-full'>
            submit
          </Button>
        </div>
      </FormContainer>
    </>
  );
};
export default EditPage;
