import Link from "next/link";

const NavLink = ({ href, title, icon }) => {
  return (
    <Link href={href} className="flex items-center hover:text-[#ff9ff3] hover space-x-2 text-white hover:text-gray-300">
      {icon && <span>{icon}</span>}
      <span>{title}</span>
    </Link>
  );
};

export default NavLink;
