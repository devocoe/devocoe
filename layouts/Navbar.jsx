import Link from "next/link";
import { FiCpu } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="py-4   border-primary border-b-2 ">
      <div className="container ">
        <Link href="/">
          <a className="text-gray-600 flex">
            <FiCpu size={26} />
            <h3 className="text-lg font-serif ml-2 font-medium ">Devocoe</h3>
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
