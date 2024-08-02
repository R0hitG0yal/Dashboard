import { CiMail } from "react-icons/ci";
import { RiSettings3Line } from "react-icons/ri";
import { SlBell } from "react-icons/sl";

export const PrimarySearchAppBar = () => {
  return (
    <header className="antialiased absolute top-0 w-screen">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-start items-center">
            <form action="#" method="GET" className="hidden lg:block lg:pl-2">
              <label htmlFor="topbar-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1 mb-4 ml-24 lg:w-96">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    {" "}
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />{" "}
                  </svg>
                </div>
                <input
                  type="text"
                  name="email"
                  id="topbar-search"
                  className="bg-gray-50 h-9 w-72 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block pl-9 p-2.5 dark:bg-zinc-800   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Search"
                ></input>
              </div>
            </form>
          </div>
          <div className="flex items-center lg:order-2">
            <button className="border-0 mx-2 rounded-full p-2 bg-gray-600 ">
              <span>
                <CiMail className="fill-white" />
              </span>
            </button>

            {/* Setting */}
            <button className="border-0 mx-2 rounded-full p-2 bg-gray-600 ">
              <span>
                <RiSettings3Line className="fill-white" />
              </span>
            </button>

            {/* <!-- Notifications --> */}
            <button className="relative border-0 mx-2 rounded-full p-2 bg-gray-600 ">
              <span>
                <SlBell className="fill-white" />
              </span>
              <div className="absolute bg-indigo-400 w-2 h-2 rounded-full top-1.5 left-4 "></div>
            </button>

            <button
              type="button"
              className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="dropdown"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="user photo"
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
