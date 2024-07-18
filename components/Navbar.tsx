import Link from "next/link";
import ModeToggle from "./ModeToggle";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-2'>
      <Link href='/' className='text-2xl font-bold'>
        Tours
      </Link>
      <div className='flex gap-5 text-semibold'>
        <Link href='/'>Home</Link>
        <Link href='/tours'>create tour</Link>
      </div>
      <ModeToggle />
    </div>
  );
};
export default Navbar;
