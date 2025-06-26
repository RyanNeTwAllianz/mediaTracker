import ContentHit from "./CotentHit"
import Accordion from "./Accordion"


const Hit = ({hit}) => {


    return (
        <>
            {
                hit.map((i, index) => 
                    <Accordion title={`${i.media} - ${i.hits.length}`} key={index}>
                        {i.hits.map((hit, idx) => (
                            <ContentHit hit={hit} key={idx} />
                        ))}
                    </Accordion>
                )
            }
        </>
    )
}


export default Hit