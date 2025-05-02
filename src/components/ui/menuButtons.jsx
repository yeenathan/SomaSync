function MenuButtons() {
  return (
    <div className="space-y-2">
      {/* First row */}
      <div className="flex flex-col md:flex-row gap-2">
        <button className="
        w-full h-[88px] 
        md:h-auto md:max-w-[562px] aspect-[562/255] 
        px-6 py-8 bg-[#D9D9D9] rounded-[28px] inline-flex flex-col justify-end items-start">
          <div className="text-black text-2xl font-normal break-words">Sessions</div>
          <div className="text-black text-base font-light break-words">SomaSync Lessons</div>
        </button>

        <button className="w-full h-[88px] 
        md:h-auto md:max-w-[283px] aspect-[283/255] 
        px-6 py-8 bg-[#D9D9D9] rounded-[28px] inline-flex flex-col justify-end items-start">
          <div className="text-black text-2xl font-normal break-words">Journal</div>
          <div className="text-black text-base font-light break-words">Daily Reflections</div>
        </button>
      </div>

      {/* Second row */}
      <div className="flex flex-col md:flex-row gap-2">
        <button className="w-full h-[88px] 
        md:h-auto md:max-w-[283px] aspect-[283/255] 
        px-6 py-8 bg-[#D9D9D9] rounded-[28px] inline-flex flex-col justify-end items-start">
          <div className="text-black text-2xl font-normal break-words">Progress</div>
          <div className="text-black text-base font-light break-words">SomaSync Progress</div>
        </button>

        <button className="w-full h-[88px] 
        md:h-auto md:max-w-[562px] aspect-[562/255] 
        px-6 py-8 bg-[#D9D9D9] rounded-[28px] inline-flex flex-col justify-end items-start">
          <div className="text-black text-2xl font-normal break-words">Settings</div>
          <div className="text-black text-base font-light break-words">Settings for SomaSync</div>
        </button>
      </div>
    </div>
  );
}


export default MenuButtons;