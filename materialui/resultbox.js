
export default function ResultBox({data}){
    return (<>
   {data.length!=0?<div className="container" >{data}</div> : null}
    </>)
}