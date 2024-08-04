import { DataDisplay } from "./DataDisplay";
import { IoTriangle } from "react-icons/io5";
import Box from "@mui/joy/Box";
import CircularProgress from "@mui/joy/CircularProgress";
import { Row2Col2 } from "./Row2Col2";
import { RecentOrders } from "./RecentOrders";
import { Feedback } from "./Feedback";
import { ActivityGraph } from "./Activity";

export const Dashboard = () => {
  return (
    <div className="ml-16 sm:ml-20 mt-12 sm:mt-16 bg-zinc-950 w-screen h-fit text-gray-200 m-0">
      <h1 className="mx-4 pt-6 pb-2 font-bold text-2xl  ">Dashboard</h1>
      <div className="p-4 grid sm:grid-cols-6 gap-4">
        <div className="col-span-4 grid grid-cols-4 gap-3 w-full h-full">
          <DataDisplay/>
        </div>
        <div className="bg-slate-900 col-span-4 sm:col-span-2 w-full h-28 sm:h-full grid grid-cols-2 p-3 rounded-lg overflow-hidden">
          <div className="flex flex-col justify-evenly">
            <div className="text-[.5em] text-gray-300 md:text-[.75em] ">
              Net Profit
            </div>
            <div className="font-extrabold py-1 lg:text-[1.8em]  md:text-[1.3em] sm:text-[1em] text-[2em] ">
              $ 6759.25
            </div>
            <div className="flex items-center text-[.5em]">
              <IoTriangle className="fill-green-600" />
              <div className="px-1 text-green-600">3%</div>
            </div>
          </div>
          <div className="flex flex-col justify-evenly relative ">
            <Box
              className="mx-auto "
              sx={{
                "--CircularProgress-size": "75px",
                "--CircularProgress-trackThickness": "10px",
                "--CircularProgress-progressThickness": "10px",
                display: "flex",
                gap: 2,
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <CircularProgress
                className="flex flex-col"
                variant="solid"
                color="primary"
                determinate
                value={70}
              >
                <div className="text-[1em] font-extrabold text-slate-200">
                  70%
                </div>
                <div className="text-[.4em] flex flex-wrap w-12 text-center text-slate-300">
                  Goal Completed
                </div>
              </CircularProgress>
            </Box>
            <div className="w-full text-center text-[.4em] font-extralight h-4 -tracking-[.05em] ">
              *The values here has been rounded off.
            </div>
          </div>
        </div>
        <div className="col-span-4 w-full h-full bg-slate-900 rounded-lg overflow-hidden">
          <ActivityGraph />
        </div>
        <div className="col-span-4 sm:col-span-2 flex flex-col justify-evenly w-full h-full bg-slate-900 p-3 min-h-48 rounded-lg overflow-hidden">
          <Row2Col2 />
        </div>
        <div className="col-span-4 w-full h-96  bg-slate-900 rounded-lg p-3 overflow-auto">
          <RecentOrders />
        </div>
        <div className="col-span-4 sm:col-span-2 w-full h-96 bg-slate-900 rounded-lg p-3 overflow-auto">
          <Feedback />
        </div>
      </div>
    </div>
  );
};
