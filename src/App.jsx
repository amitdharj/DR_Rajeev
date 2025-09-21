import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DrRajeevClinic from './Components/HeroSection'
import AutismBookAd from './Components/AutismAdd'
import SuccessStorySection from './Components/SucessStory'
import WhyChoose from './Components/SucessStory'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <DrRajeevClinic />
     <AutismBookAd />
     {/* <SuccessStorySection /> */}
     <WhyChoose />
    </>
  )
}

export default App
