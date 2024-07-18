import { deleteTour } from "@/utils/actions";
import { Button } from "./ui/button";

const DeleteTour = ({ tourId }: { tourId: string }) => {
  return (
    <form action={deleteTour}>
      <input type='hidden' name='id' value={tourId} />
      <Button
        type='submit'
        variant='outline'
        size='lg'
        className='rounded-md w-full'
      >
        Delete Tour
      </Button>
    </form>
  );
};
export default DeleteTour;
