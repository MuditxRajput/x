import Image from 'next/image';
import img1 from '../../assets/Polygon.png';
import img2 from '../../assets/bg.png';

const JobMatchCard = ({ name, jobCount }) => {
  return (
    <div className="relative w-[630px]  h-auto sm:h-[490px] border border-slate-300 bg-blue-50 rounded-3xl overflow-hidden p-6">
      <Image src={img1} width={196} className="bottom-0 absolute left-0" alt="Decoration" />
      <Image src={img2} width={220} className="absolute right-0" alt="Background" />

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 mt-7 px-4 text-slate-700">
          {name}, we found over{' '}
          <span className="text-blue-600">{jobCount} jobs</span> <br /> that
          match your skills
        </h2>
        <p className="text-sm sm:text-base lg:text-[16px]  text-gray-500 mb-6 mt-3  px-5">
          Let's take a look at them, you might as well find<br /> your dream job
          ✨
        </p>
        <div className="px-5 mt-9 sm:mt-14">
          <button className="bg-gray-900 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-gray-800 transition-colors">
            Let's go!
          </button>
        </div>
      </div>
    </div>
  );
};

const JobMatchCardDemo = () => {
  return <JobMatchCard name="Parik" jobCount={37} />;
};

export default JobMatchCardDemo;
