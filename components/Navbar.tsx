import Image from "next/image";
import Logo from "../public/vector-shift-logo.png";
import { Poppins } from "next/font/google";
import downArrow from "../public/chevron-down.svg";
const poppins = Poppins({
  weight: ["100", "400", "500", "700"],
  subsets: ["latin"],
});

const navItems = [
  "Enterprise",
  "Pricing",
  "Tutorials",
  "Docs",
  "Blog",
  "Discord",
  "Log in",
];

export default function Navbar() {
  return (
    <nav
      className={`${poppins.className} w-full h-10 bg-transparent text-white flex justify-between`}
    >
      <div className="w-1/6 flex items-center">
        <Image src={Logo} alt="logo" className="w-6 h-6 mx-2" />
        <p className="font-normal text-md">VectorShift</p>
      </div>
      <div className="w-5/6 flex items-center justify-end">
        <p className="text-[15px] px-4 flex items-center cursor-pointer hover:text-[#BC7DFE]">
          Platform{" "}
          <Image
            src={downArrow}
            alt="down-arrow-icon"
            className="w-4 h-4 mx-1]"
          />
        </p>
        {navItems.map((item, i) => (
          <p
            key={i}
            className="text-[15px] px-4 hover:text-[#BC7DFE] cursor-pointer"
          >
            {item}
          </p>
        ))}
        <button className="bg-gradient-to-r from-[#4B2398] via-[#4169AB] to-[#2E7DD6] px-5 py-2 text-[15px] rounded-full mx-2">
          Get started
        </button>
      </div>
    </nav>
  );
}
