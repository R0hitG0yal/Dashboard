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
        <div className="flex items-center justify-between font-light text-gray-300">
          <div className="flex items-center ">
            <BiTargetLock
              className={`fill-orange-400 bg-[rgba(143,60,35,0.87)] size-12 md:size-14 md:p-4 p-3 rounded-full blur-[.35px]`}
            />
            <div className="ml-2 font-[1em] text-xs md:text-base">Goals</div>
          </div>
          <IoIosArrowForward className=" bg-zinc-600 p-1 size-6 rounded-full" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <PiHamburger
              className={`fill-indigo-400 bg-indigo-800 opacity-85 size-12 md:size-14 md:p-4 p-3 rounded-full blur-[.35px]`}
            />
            <div className="ml-2 font-[1em] text-xs md:text-base ">
              Popular Dishes
            </div>
          </div>
          <IoIosArrowForward className=" bg-zinc-600 p-1 size-6 rounded-full" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <BiTargetLock
              className={`fill-green-400 bg-[rgba(47,133,106,0.86)] size-12 md:size-14 md:p-4 p-3 rounded-full blur-[.35px]`}
            />
            <div className="ml-2 font-[1em] text-xs md:text-base ">Menus</div>
          </div>
          <IoIosArrowForward className=" bg-zinc-600 p-1 size-6 rounded-full" />
        </div>
      </>
    );
  };
