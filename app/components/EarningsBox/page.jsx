import { FaArrowUp } from "react-icons/fa";

const EarningsBox = () => {
  return (
    <div className="bg-white rounded-3xl border border-slate-300 w-[500px] p-4 sm:p-6 md:p-6 h-[290px]">
      <div>
        <h2 className="font-bold text-md sm:text-xl lg:text-[19px]  px-2 mt-2  ">Earnings This Month</h2>
        <p className="text-xs sm:text-[13px] text-slate-400 px-2   ">
          Your earnings this month compared to last month
        </p>
      </div>
      <div className="mt-13 px-1 sm:mt-14  md:mt-[114px]">
        <p className="text-3xl sm:text-4xl lg:text-[42px] font-bold">
          <span
            className="relative text-lg sm:text-xl font-bold mr-1"
            style={{ top: '-0.9rem', left: '0.5rem' }}
          >
            $
          </span>{" "}
          24,468
        </p>
        <p className="mt-1 flex text-[14px] gap-1 items-center text-slate-400 px-2">
          <span className="text-green-500 text-sm flex gap-1 items-center font-bold text-[12px] ">
            <FaArrowUp /> 
          </span>{" "}
          <span className="text-green-500 font-bold">13%</span>
          vs last month
        </p>
      </div>
    </div>
  );
};

export default EarningsBox;
