import { BiTargetLock } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { PiHamburger } from "react-icons/pi";

export const Row2Col2 = () =>
  // {
  // color,
  // label,
  // }: {
  // color: string;
  // label: string;
  // }
  {
    return (
      <>
        <div className="flex items-center justify-between my-1 font-light text-gray-300">
          <div className="flex items-center ">
            <BiTargetLock
              className={`fill-orange-400 bg-[rgba(143,60,35,0.87)] h-12 w-12 p-3 rounded-full blur-[.35px]`}
            />
            <div className="ml-2 font-[1em] text-xs ">Goals</div>
          </div>
          <IoIosArrowForward className=" bg-zinc-600 p-1 h-6 w-6 rounded-full" />
        </div>
        <div className="flex items-center justify-between my-1">
          <div className="flex items-center ">
            <PiHamburger
              className={`fill-indigo-400 bg-indigo-800 opacity-85 h-12 w-12 p-3 rounded-full blur-[.35px]`}
            />
            <div className="ml-2 font-[1em] text-xs ">Popular Dishes</div>
          </div>
          <IoIosArrowForward className=" bg-zinc-600 p-1 h-6 w-6 rounded-full" />
        </div>
        <div className="flex items-center justify-between my-1">
          <div className="flex items-center ">
            <BiTargetLock
              className={`fill-green-400 bg-[rgba(47,133,106,0.86)] h-12 w-12 p-3 rounded-full blur-[.35px]`}
            />
            <div className="ml-2 font-[1em] text-xs ">Menus</div>
          </div>
          <IoIosArrowForward className=" bg-zinc-600 p-1 h-6 w-6 rounded-full" />
        </div>
      </>
    );
  };
