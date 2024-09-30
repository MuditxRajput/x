import { ChevronRight } from 'lucide-react';

const ProjectMatchBox = ({ title, subtitle, items, viewAllText }) => {
  return (
    <div className="bg-white h-[290px] w-[370px] max-w-md rounded-2xl border border-slate-300 ">
      <h2 className="text-[19px] font-bold px-9 mt-8">{title}</h2>
      <p className="text-[13px] text-gray-400 mb-4 px-9  ">{subtitle}</p>
      <ul className="space-y-3 py-4 mb-4 px-9">
        {items?.map((item, index) => (
          <li key={index} className="flex items-center justify-between">
            <span className="text-[15px] font-semibold truncate">{item} </span>
            <ChevronRight size={16} className="text-gray-400 font-extrabold" />
          </li>
        ))}
      </ul>
      <hr className=''/>
      <div className=" flex justify-center items-center">
        <p className="text-slate-500 cursor-pointer pl-1  mt-4 text-[15px]">{viewAllText}</p>
      </div>
    </div>
  );
};

const ProjectMatchesComponent = ({ activeProjects, unviewedMatches }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center w-full">
      <ProjectMatchBox
        title="Your Active Projects"
        subtitle="Focus on acing these active jobs"
        items={activeProjects}
        viewAllText="View all projects"
      />
      {unviewedMatches && (
        <ProjectMatchBox
          title="Unreviewed Matches"
          subtitle="We recommend you for these jobs"
          items={unviewedMatches}
          viewAllText="View all matches"
        />
      )}
    </div>
  );
};

export default ProjectMatchesComponent;
