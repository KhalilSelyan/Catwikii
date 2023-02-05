import Link from "next/link";

const Header = () => {
  return (
    <Link
      href="/"
      className="flex w-full items-center justify-between px-8 py-2 text-white md:px-12 lg:mx-auto lg:max-w-7xl lg:px-16 uw:max-w-[90rem]"
    >
      <img src="/logo.svg" alt="" className="h-10 md:h-14 lg:h-16" />
    </Link>
  );
};

export default Header;
