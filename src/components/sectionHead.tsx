function SectionHead({header=null}:{header:string|null}) {
  return(
    <div className="min-w-full py-16 text-5xl">
      <h1>{header}</h1>
    </div>
  )
}

export default SectionHead;