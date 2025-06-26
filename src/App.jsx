import { useEffect, useState } from 'react'
import Line from './components/Line'
import Title from './components/Title'
import GetHits from './utils/GetHits'
import GroupHitsByMedia from './utils/GroupHitsByMedia'
import ClearHits from './utils/ClearHits'
import Hit from './components/Hit'

function App() {

  const [hits, setHits] = useState([])

  useEffect(() => {
    const newHits = GetHits((newHits) => {
      setHits(GroupHitsByMedia(newHits))
    })
    return newHits
  }, [])

  return (
    <>
      <div className='container'>
        <Title />
        <Line />
        <button onClick={() => {ClearHits(); setHits([])}} >
          Clear Hits
        </button>
        <button onClick={() => {}} >
          Extract Hits
        </button>
        <Line />
      </div>

      <div className='container'>
        <Hit hit={hits} />
      </div>
    </>
  )
}

export default App
