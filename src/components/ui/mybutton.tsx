import { MouseEventHandler, ReactNode } from "react";

export default function Button({children, onClick=undefined}:{children:ReactNode, onClick:{(): MouseEventHandler}|{():void}|undefined}) {
  return(
    <button onClick={onClick} className="button px-6 py-3 rounded-3xl border border-black-500 hover:bg-[var(--accent)]">
      {children}
    </button>
  )
}