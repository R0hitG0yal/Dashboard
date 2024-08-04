import { AiFillHome } from "react-icons/ai";
import { RiBarChartBoxLine } from "react-icons/ri";
import { CiWallet } from "react-icons/ci";
import { BsBagCheck } from "react-icons/bs";
import { BsClipboard2Check } from "react-icons/bs";
import { useState } from "react";
import { RiLogoutCircleRLine } from "react-icons/ri";

export default function Sidebar() {
  const [active, setActive] = useState(0);
  return (
    <aside
      id="sidebar-multi-level-sidebar"
      className="fixed top-0 left-0 z-40 w-16 sm:w-20 h-screen transition-transform -translate-x-0 sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="relative h-full overflow-y-auto bg-gray-900 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li className="px-3">
            <a
              href="#"
              className="flex items-center pl-2 py-4 mb-6 text-gray-900 rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 group"
            >
              <div className="flex flex-wrap">
                <div className="size-4 sm:size-6 border border-indigo-500 bg-indigo-500 rounded-full rounded-bl-none"></div>
                <div className="size-4 sm:size-6 border border-indigo-500 bg-indigo-500 rounded-full rounded-tl-none "></div>
                <div className="size-4 sm:size-6 border border-indigo-500 bg-indigo-500 rounded-full rounded-br-none "></div>
                <div className="size-4 sm:size-6 border border-indigo-500 bg-indigo-500 rounded-full rounded-tr-none "></div>
              </div>
            </a>
          </li>

          <li onClick={() => setActive(0)}>
            <a
              href="#"
              className="flex my-6 items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 whitespace-nowrap">
                {active == 0 ? (
                  <AiFillHome className="w-16 sm:w-20 h-8 m-auto fill-indigo-500 border-l-4 border-indigo-500" />
                ) : (
                  <AiFillHome className="w-16 sm:w-20 h-8 m-auto fill-gray-400" />
                )}
              </span>
            </a>
          </li>

          <li onClick={() => setActive(1)}>
            <a
              href="#"
              className="flex my-6 items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 whitespace-nowrap">
                {active == 1 ? (
                  <RiBarChartBoxLine className="w-16 sm:w-20 h-8 m-auto fill-indigo-500 border-l-4 border-indigo-500" />
                ) : (
                  <RiBarChartBoxLine className="w-16 sm:w-20 h-8 m-auto fill-gray-400" />
                )}
              </span>
            </a>
          </li>
          <li onClick={() => setActive(2)}>
            <a
              href="#"
              className="flex my-6 items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 ms-1 whitespace-nowrap">
                {active == 2 ? (
                  <BsClipboard2Check className="w-16 sm:w-20 h-8 m-auto fill-indigo-500 border-l-4 border-indigo-500" />
                ) : (
                  <BsClipboard2Check className="w-16 sm:w-20 h-8 m-auto fill-gray-400" />
                )}
              </span>
            </a>
          </li>
          <li onClick={() => setActive(3)}>
            <a
              href="#"
              className="flex my-6 items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 ms-1 whitespace-nowrap">
                {active == 3 ? (
                  <CiWallet className="w-16 sm:w-20 h-8 m-auto fill-indigo-500 border-l-4 border-indigo-500" />
                ) : (
                  <CiWallet className="w-16 sm:w-20 h-8 m-auto fill-gray-400" />
                )}
              </span>
            </a>
          </li>
          <li onClick={() => setActive(4)}>
            <a
              href="#"
              className="flex my-6 items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 ms-1  whitespace-nowrap">
                {active == 4 ? (
                  <BsBagCheck className="w-16 sm:w-20 h-8 m-auto fill-indigo-500 border-l-4 border-indigo-500" />
                ) : (
                  <BsBagCheck className="w-16 sm:w-20 h-8 m-auto fill-gray-400" />
                )}
              </span>
            </a>
          </li>
        </ul>
        <div>
          <RiLogoutCircleRLine className="absolute h-8 w-20 inset-x-0 my-12 mx-auto bottom-0 fill-slate-400" />
        </div>
      </div>
    </aside>
  );
}
