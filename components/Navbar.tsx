import Link from "next/link";
import ModeToggle from "./ModeToggle";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-2'>
      <Link href='/' className='text-2xl font-bold'>
        Tours
      </Link>
      <div className='flex gap-5 capitalize'>
        <Link href='/' className='font-semibold'>
          Home
        </Link>
        <Link href='/tours' className='font-semibold'>
          createtour
        </Link>
      </div>
      <ModeToggle />
    </div>
  );
};
export default Navbar;
