import { ChevronRight } from 'lucide-react';

const ProjectMatchBox = ({ title, subtitle, items, viewAllText }) => {
  return (
    <div className="bg-white w-full max-w-md rounded-2xl border border-slate-300 p-4">
      <h2 className="text-lg font-bold px-4 mt-2">{title}</h2>
      <p className="text-xs text-gray-400 mb-4 px-4">{subtitle}</p>
      <ul className="space-y-2 py-4 mb-4 px-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-center justify-between">
            <span className="text-sm font-semibold truncate">{item}</span>
            <ChevronRight size={16} className="text-gray-400 font-bold" />
          </li>
        ))}
      </ul>
      <hr />

      <div className="mt-5 font-semibold mb-5 flex justify-center items-center">
        <p className="text-slate-400 cursor-pointer">{viewAllText}</p>
      </div>
    </div>
  );
};

const ProjectMatchesComponent = ({ activeProjects, unviewedMatches }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center w-full">
      <ProjectMatchBox
        title="Your Active Projects"
        subtitle="Focus on doing these active jobs"
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
