import Link from "next/link";
import { Button } from "./ui/button";

const EditButton = ({ tourId }: { tourId: string }) => {
  return (
    <Button
      asChild
      variant='outline'
      size='lg'
      className='w-full rounded-md my-2'
    >
      <Link href={`/tours/${tourId}/edit`}>Edit</Link>
    </Button>
  );
};
export default EditButton;
