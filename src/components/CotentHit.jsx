import Accordion from "./Accordion"

const ContentHit = ({hit}) => {
    const date = new Date(hit.timeStamp)

    const url = new URL(hit.url)
    const querys = Array.from(url.searchParams.entries())

    return (
        <div className="contentHit">
            <div className="minContentHit">
                <h2 className="ContentHitTitle" style={{fontWeight: 'bold'}}>{hit.frameType}</h2>
                <h4> - {hit.type}</h4>
            </div>
            <p>{hit.documentId}</p>
            <div className="minContentHit">
                <p style={{textTransform: 'uppercase', fontWeight: 'bold'}}>{hit.method}</p>
                <p>- {hit.initiator}</p>
            </div>
            <p>{date.toLocaleString().split(" ")[1]}</p>
            <p>{hit.url?.split("?")[0]}</p>
            {
                querys.length &&
                <Accordion title={"Params"}>
                    {querys.map(([key, value], i) => (
                        <div key={i} style={{fontSize: '12px'}} className="minContentHit"> 
                            <h4>{key} : </h4>
                            <span>{value}</span>
                        </div>
                    ))}
                </Accordion>
            }
            <Accordion title={"Row"}>
                <pre style={{fontSize: '12px'}}>
                    {JSON.stringify(hit, null, 2)}
                </pre>
            </Accordion>
        </div>
    )
}

export default ContentHit