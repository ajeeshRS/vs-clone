import { poppins } from "@/utils/font";

export default function Footer() {
  return (
    <div
      className={`${poppins.className} w-full flex sm:flex-row flex-col h-auto justify-start pt-24 text-white relative`}
    >
      <div className="sm:w-2/6 w-5/6 h-full flex flex-col pl-14">
        <div className="flex w-full sm:flex-row flex-col sm:text-md text-sm">
          <div className="sm:w-1/2 w-full flex flex-col">
            <p className="py-2 hover:text-[#BC7DFE] cursor-pointer">Docs</p>
            <p className="py-2 hover:text-[#BC7DFE] cursor-pointer">
              Tutorials
            </p>
            <p className="py-2 hover:text-[#BC7DFE] cursor-pointer">Discord</p>
          </div>
          <div className="sm:w-1/2 w-full flex flex-col">
            <p className="py-2 hover:text-[#BC7DFE] cursor-pointer">Blog</p>
            <p className="py-2 hover:text-[#BC7DFE] cursor-pointer">
              Terms and conditions
            </p>
            <p className="py-2 hover:text-[#BC7DFE] cursor-pointer">
              Privacy policy
            </p>
            <p className="py-2 hover:text-[#BC7DFE] cursor-pointer">
              Contact us
            </p>
          </div>
        </div>
        <div className="sm:py-20 py-3 sm:text-md text-sm">
          <p>© 2024 VectorShift, developed by Ajeesh with ❤️</p>
        </div>
      </div>

      <div className="sm:w-4/6 w-5/6 h-fit flex items-end justify-end sm:pt-0 pt-10 ">
        <span className=" bg-gradient-to-b bg-clip-text text-transparent from-[#ffffff] to-[#BBA1FF] font-medium sm:text-[150px] text-5xl sm:absolute sm:bottom-0 sm:right-0">
          VectorShift
        </span>
      </div>
    </div>
  );
}
