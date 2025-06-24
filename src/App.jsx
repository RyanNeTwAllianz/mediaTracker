import { useEffect, useState } from 'react'
import Line from './components/Line'
import Title from './components/Title'
import GetHits from './utils/GetHits'
import Accordion from './components/Accordion'
import GroupHitsByMedia from './utils/GroupHitsByMedia'
import ClearHits from './utils/ClearHits'

function App() {

  const [hits, setHits] = useState([])

  useEffect(() => {
    const newHits = GetHits((newHits) => {
      setHits(newHits)
    })
    return newHits
  }, [])

  return (
    <>
      <div className='container'>
        <Title />
        <Line />
        <button
          onClick={() => {ClearHits(); setHits([])}}
        >
          Clear Hits
        </button>
        <Line />
      </div>

      <div className='container'>
      {
        GroupHitsByMedia(hits).map(
          (i, index) => 
            <Accordion title={`${i.media} - ${i.hits.length}`} key={index}>
              {i.hits.map((hit, idx) => (
                <pre key={idx} style={{ fontSize: '12px' }}>
                  {JSON.stringify(hit, null, 2)}
                </pre>
              ))}
            </Accordion>
        )
      }
      </div>
    </>
  )
}

export default App
