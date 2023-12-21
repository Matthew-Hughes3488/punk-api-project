import { useState } from 'react'
import { Main } from './containers/Main/Main'
import beers from './data/beers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Main beers={beers}/>
    </>
  )
}

export default App
