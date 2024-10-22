import Link from "next/link";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="pt-2 pl-2 ">
      <Link href={"/"} className="flex items-center gap-2 ">
        <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
          MERITON Parking
        </p>
      </Link>
    </div>
  );
};
export default Navbar;
