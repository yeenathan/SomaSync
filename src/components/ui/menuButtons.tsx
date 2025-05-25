import { Link } from "react-router";

function MenuButtons() {
  return (
    <div className="space-y-2">
      <div className="flex flex-col md:flex-row gap-2">
        <Link
          to="/sessions"
          className="
        w-full h-[128px]
        md:h-auto md:max-w-[562px] aspect-[562/255]
        px-6 md:py-8 py-4 bg-[var(--blue-tertiary)] hover:bg-[var(--blue-primary)]
        rounded-[28px] inline-flex flex-col justify-end items-start
      "
        >
          <div className="text-black text-2xl ">Sessions</div>
          <div className="text-black text-base  ">SomaSync Lessons</div>
        </Link>

        <Link
          className="
        w-full h-[128px]
        md:h-auto md:max-w-[283px] aspect-[283/255]
        px-6 md:py-8 py-4  bg-[var(--purple-tertiary)] hover:bg-[var(--purple-primary)]
        rounded-[28px] inline-flex flex-col justify-end items-start
      "
        >
          <div className="text-black text-2xl  ">Journal (N/A)</div>
          <div className="text-black text-base  ">Daily Reflections</div>
        </Link>
      </div>


      <div className="flex flex-row gap-2">
        <Link
          className="
        w-1/2 h-[128px]
        md:h-auto md:max-w-[283px] aspect-[283/255]
        px-4 md:py-8 py-4 bg-[var(--green-tertiary)] hover:bg-[var(--green-primary)]
        rounded-[28px] inline-flex flex-col justify-end items-start
      "
        >
          <div className="text-black text-md md:text-2xl ">Progress (N/A)</div>
          <div className="text-black text-xs md:text-base ">SomaSync Progress</div>
        </Link>

        <Link
          to="/settings"
          className="
        w-1/2 h-[128px]
        md:h-auto md:max-w-[562px] aspect-[562/255]
        px-4 md:py-8 py-4 bg-[var(--orange-tertiary)] hover:bg-[var(--orange-primary)]
        rounded-[28px] inline-flex flex-col justify-end items-start
      "
        >
          <div className="text-black text-md md:text-2xl ">Settings</div>
          <div className="text-black text-xs md:text-base ">Settings for SomaSync </div>
        </Link>
      </div>
    </div>

  );
}


export default MenuButtons;