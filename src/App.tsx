import Navbar from '@/scenes/navbar'
import { useState } from 'react'
import { SelectedPage } from '@/shared/types'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import Home from '@/scenes/home'
import Benefits from '@/scenes/benefits'
import OurClasses from '@/scenes/ourClasses/index';
import ContactUs from './scenes/ContactUs'
import Footer from './scenes/Footer'

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage,setIsTopOfPage] = useState<boolean>(true)
  const {scrollY} = useScroll() 
  useMotionValueEvent(scrollY,'change',(last)=>{
    if(last===0){
      setIsTopOfPage(true)
      setSelectedPage(SelectedPage.Home)
    }else{
      setIsTopOfPage(false)
    }
  })
  return (
    <div className="app">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer/>
    </div>
  )
}

export default App
