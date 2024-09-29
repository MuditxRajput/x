import { FaArrowUp } from "react-icons/fa";

const EarningsBox = () => {
  return (
    <div className="bg-white rounded-3xl border border-slate-300 w-full p-4 sm:p-6 md:p-8">
      <div>
        <h2 className="font-bold text-lg sm:text-xl lg:text-2xl mb-1 sm:mb-2">Earnings This Month</h2>
        <p className="text-xs sm:text-sm text-slate-400">
          Your earnings this month compared to last month
        </p>
      </div>
      <div className="mt-12 sm:mt-16 md:mt-24">
        <p className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          <span
            className="relative text-lg sm:text-xl font-bold"
            style={{ top: '-1.2rem', left: '0.3rem' }}
          >
            $
          </span>{" "}
          24,468
        </p>
        <p className="mt-1 flex gap-1 items-center text-slate-400">
          <span className="text-green-500 text-sm flex gap-1 items-center font-bold">
            <FaArrowUp /> 13%
          </span>{" "}
          vs last month
        </p>
      </div>
    </div>
  );
};

export default EarningsBox;
