import { IoTriangle } from "react-icons/io5";
import { FaBasketShopping } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi";
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { PiCurrencyDollarBold } from "react-icons/pi";
import { ImArrowDown } from "react-icons/im";

export const DataDisplay = () =>
  // {
  //   src,
  //   label,
  //   qty,
  //   percentageInc,
  // }: {
  //   src: string;
  //   label: string;
  //   qty: string;
  //   percentageInc: number;
  // }
  {
    // let color = null;
    // if (percentageInc >= 0) color = "green";
    // else {
    //   percentageInc *= -1;
    //   color = "red";
    // }

    // const data = [
    //   {
    //     src: "",
    //     label: "Total Orders",
    //     qty: "75",
    //     percentageInc: 3,
    //   },
    //   {
    //     src: "",
    //     label: "Total Delivered",
    //     qty: "70",
    //     percentageInc: -3,
    //   },
    //   {
    //     src: "",
    //     label: "Total Canceleld",
    //     qty: "05",
    //     percentageInc: 3,
    //   },
    //   {
    //     src: "",
    //     label: "Total Revenue",
    //     qty: "$12k",
    //     percentageInc: -3,
    //   },
    // ];

    return (
      <>
        <div className="h-fit flex flex-col bg-slate-900 rounded-lg p-2 ">
          <div className="relative size-12 my-2 rounded-lg">
            <FaBasketShopping className="absolute bg-[rgba(26,35,126,0.75)] fill-indigo-400 size-full p-2 rounded-lg " />
            <FaPlusCircle className="absolute left-7 bottom-1 size-3 fill-indigo-400 bg-white rounded-full" />
          </div>
          <div className="font-extralight text-[0.5em] md:text-[.75em] text-white pb-2 ">
            Total Orders
          </div>
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold ">75</div>
            {/* {color == "green" ? ( */}
            <div className="flex justify-between items-center text-[.55em] md:text-[.75em]">
              <IoTriangle className="top-1 -left-3 fill-green-600" />
              <div className="ml-1 font-extralight text-green-600">3%</div>
            </div>
            {/* ) : (
            <div className="flex flex-wrap items-center text-[.5em]">
              <IoTriangle className="top-1 -left-3 fill-red-600 rotate-[180deg]" />
              <div className="ml-1 font-extralight text-red-600">
                {percentageInc}%
              </div>
            </div>
          )} */}
          </div>
        </div>
        <div className="h-fit flex flex-col bg-slate-900 rounded-lg p-2 ">
          <div className="relative size-12 my-2 rounded-lg">
            <HiShoppingBag className="absolute bg-[rgba(0,255,0,0.2)] fill-green-400 size-full p-2 rounded-lg " />
            <FaCheckCircle className="absolute left-7 bottom-1 size-3 fill-green-300 bg-white rounded-full" />
          </div>
          <div className="font-extralight text-[0.5em] md:text-[.75em] text-white pb-2 ">
            Total Delivered
          </div>
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold ">70</div>
            {/* {color == "green" ? (
              <div className="flex justify-between items-center text-[.5em]">
                <IoTriangle className="top-1 -left-3 fill-green-600" />
                <div className="ml-1 font-extralight text-green-600">
                  {percentageInc}%
                </div>
              </div>
            ) : ( */}
            <div className="flex flex-wrap items-center text-[.55em] md:text-[.75em]">
              <IoTriangle className="top-1 -left-3 fill-red-600 rotate-[180deg]" />
              <div className="ml-1 font-extralight  text-red-600">3%</div>
            </div>
            {/* )} */}
          </div>
        </div>
        <div className="h-fit flex flex-col bg-slate-900 rounded-lg p-2 ">
          <div className="relative size-12 my-2 rounded-lg">
            <HiShoppingBag className="absolute bg-[rgba(255,0,0,.3)] fill-red-400 size-full p-2 rounded-lg " />
            <MdCancel className="absolute left-7 bottom-1 size-3 fill-red-300 bg-white rounded-full" />
          </div>
          <div className="font-extralight text-[0.5em] md:text-[.75em] text-white pb-2 ">
            Total Canceleld
          </div>
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold ">05</div>
            {/* {color == "green" ? ( */}
            <div className="flex justify-between items-center text-[.55em] md:text-[.75em]">
              <IoTriangle className="top-1 -left-3 fill-green-600" />
              <div className="ml-1 font-extralight text-green-600">3%</div>
            </div>
            {/* // ) : (
            //   <div className="flex flex-wrap items-center text-[.5em]">
            //     <IoTriangle className="top-1 -left-3 fill-red-600 rotate-[180deg]" />
            //     <div className="ml-1 font-extralight text-red-600">
            //       {percentageInc}%
            //     </div>
            //   </div>
            // )} */}
          </div>
        </div>
        <div className="h-fit flex flex-col bg-slate-900 rounded-lg p-2 ">
          <div className="relative size-12 my-2 rounded-lg bg-[rgba(136,14,79,0.5)]">
            <PiCurrencyDollarBold className="absolute top-2 left-2 bg-pink-400 fill-white size-6 p-1 rounded-full" />
            <ImArrowDown className="absolute fill-pink-400 top-7 left-3" />
            <ImArrowDown className="absolute fill-pink-400 top-5 left-8" />
          </div>
          <div className="font-extralight text-[0.5em] md:text-[.75em] text-white pb-2 ">
            Total Revenue
          </div>
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold ">$12K</div>
            {/* {color == "green" ? (
              <div className="flex justify-between items-center text-[.5em]">
                <IoTriangle className="top-1 -left-3 fill-green-600" />
                <div className="ml-1 font-extralight text-green-600">
                  {percentageInc}%
                </div>
              </div>
            ) : ( */}
            <div className="flex flex-wrap items-center text-[.55em] md:text-[.75em]">
              <IoTriangle className="top-1 -left-3 fill-red-600 rotate-[180deg]" />
              <div className="ml-1 font-extralight text-red-600">3%</div>
            </div>
            {/* )} */}
          </div>
        </div>
      </>
    );
  };
