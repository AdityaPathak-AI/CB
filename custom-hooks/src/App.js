import {useEffect} from 'react'

const App = () =>
{
  useEffect(()=>{
    console.log("Use Effect Called...");
  }, [])
  return<div>
    <h1>Intro use Effect Function</h1>
  </div>
  
}
export default App;