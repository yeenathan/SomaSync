export default function SessionCategory({title, subtitle=null}) {
  return(
    <div className="border-b pb-12">
      <h3 className="text-xl">{title}</h3>
      <div dangerouslySetInnerHTML={{__html: subtitle}}></div>
    </div>
  )
}