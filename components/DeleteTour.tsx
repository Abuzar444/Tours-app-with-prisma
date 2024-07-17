"use client";
import { deleteTour } from "@/utils/actions";
import { Button } from "./ui/button";

const DeleteTour = ({ tourId }: { tourId: string }) => {
  return (
    <Button
      variant='outline'
      size='lg'
      className='rounded-md w-full'
      onClick={() => deleteTour(tourId)}
    >
      Delete Tour
    </Button>
  );
};
export default DeleteTour;
