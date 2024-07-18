import Breadcrumbt from "@/components/Breadcrumbt";
import { singleTour } from "@/utils/actions";
import Image from "next/image";
import { redirect } from "next/navigation";

const SingleTour = async ({ params }: { params: { id: string } }) => {
  const tour = await singleTour(params.id);
  console.log(tour);
  if (!tour) redirect("/");
  return (
    <section>
      <Breadcrumbt name={tour.name} />
      <div className='h-[300px] md:h-[500px] relative mt-8'>
        <Image
          src={tour.image}
          alt={tour.name}
          fill
          sizes='100vw'
          className='object-cover rounded-md'
          priority
        />
      </div>
      <div className='grid lg:grid-cols-12 gap-x-12 mt-12'>
        <div className='lg:col-span-8'>
          <div className='flex gap-x-4 items-center'>
            <h1 className='text-xl font-bold'>{tour.name}</h1>
          </div>
          <p>{tour.info}</p>
        </div>
      </div>
    </section>
  );
};
export default SingleTour;
