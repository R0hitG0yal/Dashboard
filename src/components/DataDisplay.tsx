import { IoTriangle } from "react-icons/io5";

export const DataDisplay = ({
  src,
  label,
  qty,
  percentageInc,
}: {
  src: string;
  label: string;
  qty: string;
  percentageInc: number;
}) => {
  let color = null;
  if (percentageInc >= 0) color = "green";
  else {
    percentageInc *= -1;
    color = "red";
  }

  return (
    <div className="h-fit flex flex-col bg-slate-900 rounded-lg p-2 ">
      <div className="w-8 h-8 bg-white rounded-lg my-2">{src}</div>
      <div className="font-extralight text-xs text-white pb-2 ">{label}</div>
      <div className="flex justify-between items-center">
        <div className="text-lg ">{qty}</div>
        {color == "green" ? (
          <div className="relative flex flex-wrap">
            <IoTriangle className="absolute top-1 -left-3 h-3 w-3 fill-green-600" />
            <div className="text-sm ml-1 font-extralight text-green-600">
              {percentageInc}%
            </div>
          </div>
        ) : (
          <div className="relative flex flex-wrap">
            <IoTriangle className="absolute top-1 -left-3 h-3 w-3 fill-red-600" />
            <div className="text-sm ml-1 font-extralight text-red-600">
              {percentageInc}%
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
