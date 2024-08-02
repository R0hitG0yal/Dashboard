import { DataDisplay } from "./DataDisplay";
import { IoTriangle } from "react-icons/io5";
import Box from "@mui/joy/Box";
import CircularProgress from "@mui/joy/CircularProgress";

export const Dashboard = () => {
  return (
    <div className="bg-zinc-950 w-screen h-screen text-gray-200 m-0">
      <h1 className="mx-4 pt-6 pb-2 font-bold text-2xl  ">Dashboard</h1>
      <div className="p-4 grid sm:grid-cols-6 gap-4">
        <div className="col-span-4 grid grid-cols-4 gap-3 w-full h-full">
          <DataDisplay
            src={""}
            label={"Total Orders"}
            qty={"75"}
            percentageInc={3}
          />
          <DataDisplay
            src={""}
            label={"Total Delivered"}
            qty={"70"}
            percentageInc={-3}
          />
          <DataDisplay
            src={""}
            label={"Total Canceleld"}
            qty={"05"}
            percentageInc={3}
          />
          <DataDisplay
            src={""}
            label={"Total Revenue"}
            qty={"$12k"}
            percentageInc={-3}
          />
        </div>
        <div className="col-span-4 sm:col-span-2 w-full h-full bg-slate-900 grid grid-cols-2 p-3 rounded-lg overflow-hidden">
          <div>
            <div className="text-sm pb-2">Net Profit</div>
            <div className="font-extrabold py-1 text-lg lg:text-2xl ">
              $ 6759.25
            </div>
            <div className="flex items-center">
              <IoTriangle className="fill-green-600" />
              <div className="px-1 text-green-600">3%</div>
            </div>
          </div>
          <div className="flex flex-col relative ">
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
                <div className="text-[.45em] flex flex-wrap w-12 text-center text-slate-300">
                  Goal Completed
                </div>
              </CircularProgress>
            </Box>
            <div className="w-full absolute right-0 text-center -bottom-1 text-[.5em] font-extralight h-4 -tracking-[.1em] ">
              *The values here has been rounded off.
            </div>
          </div>
        </div>
        <div className="col-span-4 w-full h-44 bg-slate-500"></div>
        <div className="col-span-2 w-full h-44 bg-slate-500"></div>
        <div className="col-span-4 w-full h-44 bg-slate-500"></div>
        <div className="col-span-2 w-full h-44 bg-slate-500"></div>
      </div>
    </div>
  );
};
