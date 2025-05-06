function CompletedModule() {
  return (
<div className="flex">
  <div className="flex flex-row gap-2 items-center">
    <div className="bg-black w-14 h-14 md:w-12 md:h-12 rounded-lg aspect-square"></div>
    <div className="flex flex-col">
      <p className="text-xs">Completed: 00/00/00</p>
      <p className="font-bold text-sm">Session 1: SomaSync Overview</p>
      <p className="text-xs md:text-sm">Supporting line text lorem ipsum dolor sit amet, consectetur.</p>
    </div>
  </div>
</div>

  )
}

export default CompletedModule;