import Image from 'next/image';
import profile from '../../assets/profile.png';

const QuickBox = ({ messages }) => {
  return (
    <div className="bg-white rounded-3xl  py-3 border border-slate-300 w-[630px] h-[490px] max-w-3xl mx-auto ">
      <h2 className="text-lg sm:text-xl font-bold mb-1 px-4 sm:px-6 md:px-9 mt-3 sm:mt-5">Quick-box</h2>
      <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-4 px-4 sm:px-6 md:px-9">A quick glance of your inbox</p>
      <div className=" divide-gray-200">
        {messages.map((message, index) => (
          <div key={index} className={`flex items-center px-3 sm:px-6 md:px-8 py-3 sm:py-4 ${index < 2 ? 'bg-blue-50' : ''}`}>
            <Image
              src={profile}
              alt={message.name}
              width={34}
              height={34}
              className="w-8 h-8 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 flex-shrink-0"
            />
            <div className="flex-grow min-w-0">
              <p className="text-sm sm:text-[15px] font-bold truncate">{message.name}</p>
              <p className="text-xs sm:text-[12px] text-gray-400 truncate">{message.content}</p>
            </div>
            <span className="text-xs text-gray-500 ml-2 mr-2 flex-shrink-0 mb-6">{message.time}</span>
          </div>
        ))}
      </div>
      <hr className="border mt-3" />
      <button className="mt-3 sm:mt-5 text-xs sm:text-[15px] font-semibold text-gray-400 mb-1 sm:mb-2 w-full text-center hover:text-gray-600 transition-colors">
        Open my inbox
      </button>
    </div>
  );
};

const QuickBoxDemo = () => {
  const messages = [
    { name: 'Alexa Jones', content: 'Sounds good, but we really need to speed up the process...', time: '12h ago' },
    { name: 'John Schmidt', content: 'Sounds good, but we really need to speed up the process...', time: '16h ago' },
    { name: 'Julius Lesiuk', content: 'Sounds good, but we really need to speed up the process...', time: '2d ago' },
    { name: 'Claire Dunphy', content: 'Sounds good, but we really need to speed up the process...', time: '2d ago' },
  ];

  return <QuickBox messages={messages} />;
};

export default QuickBoxDemo;