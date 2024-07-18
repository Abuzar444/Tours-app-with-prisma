import DeleteTour from "@/components/DeleteTour";
import EditButton from "@/components/EditButton";
import { fetchToursAction } from "@/utils/actions";
import { formatCurrency } from "@/utils/format";
import Image from "next/image";
import Link from "next/link";

export type Tour = {
  id: string;
  name: string;
  image: string;
  info: string;
  price: number;
};

const Tours = async () => {
  const tours: Tour[] = await fetchToursAction();

  if (tours.length === 0) {
    return (
      <div className='flex h-screen items-center justify-center flex-col'>
        <h1 className='text-3xl'>There are no tours...</h1>
        <Link href='/tours' className='border-2 px-4 py-2 rounded-md'>
          Create Tours
        </Link>
      </div>
    );
  }

  return (
    <div className='my-8'>
      <div className='flex justify-center items-center mb-5'>
        <h1 className='text-5xl font-bold'>All Tours</h1>
      </div>
      <div className=' relative grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {tours.map((tour) => {
          return (
            <main key={tour.id}>
              <Link href={`/tours/${tour.id}`}>
                <div className=' group relative h-[300px] mb-2 overflow-hidden rounded-md'>
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    fill
                    sizes='(max-width: 768px) 100vw, 50vw'
                    className='object-cover rounded-md transform group-hover:scale-110 transition-transform duration-500'
                  />
                  <span className='absolute top-0 right-4 bg-foreground text-gray-600 px-1 rounded-xl mt-2'>
                    {formatCurrency(tour.price)}
                  </span>
                </div>
                <h1 className='font-bold text-xl'>{tour.name}</h1>
                <div className='flex justify-between items-center'>
                  <p>{tour.info}</p>
                </div>
              </Link>
              <EditButton tourId={tour.id} />
              <DeleteTour tourId={tour.id} />
            </main>
          );
        })}
      </div>
    </div>
  );
};
export default Tours;
