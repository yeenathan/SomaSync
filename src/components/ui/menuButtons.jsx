import { Link } from "react-router";

function MenuButtons() {
  return (
    <div className="space-y-2">
      {/* First row */}
      <div className="flex flex-col md:flex-row gap-2">
        <Link to="/sessions" className="
        w-full h-[88px] 
        md:h-auto md:max-w-[562px] aspect-[562/255] 
        px-6 py-8 bg-[#D9D9D9] rounded-[28px] inline-flex flex-col justify-end items-start">
          <div className="text-black text-2xl font-normal break-words">Sessions</div>
          <div className="text-black text-base font-light break-words">SomaSync Lessons</div>
        </Link>

        <Link className="w-full h-[88px] 
        md:h-auto md:max-w-[283px] aspect-[283/255] 
        px-6 py-8 bg-[#D9D9D9] rounded-[28px] inline-flex flex-col justify-end items-start">
          <div className="text-black text-2xl font-normal break-words">Journal</div>
          <div className="text-black text-base font-light break-words">Daily Reflections</div>
        </Link>
      </div>

      {/* Second row */}
      <div className="flex flex-col md:flex-row gap-2">
        <Link className="w-full h-[88px] 
        md:h-auto md:max-w-[283px] aspect-[283/255] 
        px-6 py-8 bg-[#D9D9D9] rounded-[28px] inline-flex flex-col justify-end items-start">
          <div className="text-black text-2xl font-normal break-words">Progress</div>
          <div className="text-black text-base font-light break-words">SomaSync Progress</div>
        </Link>

        <Link className="w-full h-[88px] 
        md:h-auto md:max-w-[562px] aspect-[562/255] 
        px-6 py-8 bg-[#D9D9D9] rounded-[28px] inline-flex flex-col justify-end items-start">
          <div className="text-black text-2xl font-normal break-words">Settings</div>
          <div className="text-black text-base font-light break-words">Settings for SomaSync</div>
        </Link>
      </div>
    </div>
  );
}


export default MenuButtons;