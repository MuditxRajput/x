import Image from 'next/image';
import profile from './assets/profile.png';
import EarningsBox from './components/EarningsBox/page';
import JobMatchCardDemo from './components/JobMatchCardDemo/page';
import ProjectMatchesComponent from './components/ProjectMatchBox/page';
import QuickBoxDemo from './components/QuickBoxDemo/page';

const Page = () => {
  const activeProjects = [
    "Creative Director for Pacific Co...",
    "Ecommerce operations head fo...",
    "Creative strategist for an intern..."
  ];

  const unviewedMatches = [
    "Lead manager for operations a...",
    "Quality assurance and A&B tes...",
    "Copywriter and creative lead f..."
  ];

  const messages = [
    { name: 'Alexa Jones', content: 'sounds good, but we really need to speed up the process...', time: '12h ago' },
    { name: 'John Schmidt', content: 'sounds good, but we really need to speed up the process...', time: '16h ago' },
    { name: 'Julius Lesiuk', content: 'Any updates on the report?', time: '2d ago' },
    { name: 'Claire Dunphy', content: 'Looking forward to the meeting...', time: '2d ago' },
  ];

  return (
    <div className="bg-slate-100 min-h-screen p-2 sm:p-4 md:p-6 lg:p-10 ">
      <div className="max-w-full   lg:max-w-7xl mx-auto px-1  py-3 mb-7 ">
        
        {/* Profile Section */}
        <div className="flex  flex-col sm:flex-row items-center  sm:space-x-4  mb-4 sm:mb-6 px-1">
          <Image src={profile} alt="Profile Picture" className="rounded-full w-[70px] h-[70px] mb-2 sm:mb-0 " />
          <h1 className="text-2xl sm:text-3xl md:text-[39px] font-bold text-center sm:text-left mb-2">Welcome back, Parik👋</h1>
        </div>

        {/* Earnings and Project Matches Section */}
        <div className="flex  flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-14 mb-3 py-5 ">
          <div className="w-full lg:w-[466px] px-1">
            <EarningsBox />
          </div>
          <div className="flex-1">
            <ProjectMatchesComponent activeProjects={activeProjects} unviewedMatches={unviewedMatches} />
          </div>
        </div>

        {/* Quick-box and Jobs Section */}
        <div className="flex flex-col xl:flex-row gap-5 mt-4  ">
          <div className=" px-1">
            <QuickBoxDemo messages={messages} />
          </div>
          <div className="w-full xl:w-1/2 mt-4 xl:mt-0">
            <JobMatchCardDemo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;