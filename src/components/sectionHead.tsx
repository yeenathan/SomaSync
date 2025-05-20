function SectionHead({header=null}:{header:string|null}) {
  return(
    <div className="min-w-full my-8 md:my-16 text-3xl md:text-5xl">
      <h1>{header}</h1>
    </div>
  )
}

export default SectionHead;