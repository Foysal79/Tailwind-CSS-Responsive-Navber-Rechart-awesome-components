
import './App.css'
import LineChart from './Components/LineChart/LineChart'
import Nav from './Components/Nav/Nav'
import Phone from './Components/Phone/Phone'
import PriceOption from './Components/PriceOption/PriceOption'

function App() {
  

  return (
    <>
      
      <Nav></Nav>
      <h1 className="text-5xl my-8">Best  Price for all gym </h1>
      <PriceOption></PriceOption>
      <LineChart></LineChart>
      <Phone></Phone>
      
    </>
  )
}

export default App
