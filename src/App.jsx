import React from 'react'
import {Canvas} from "@react-three/fiber"
import Dog from  './components/model'
import './App.css'
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useGSAP} from "@gsap/react"
const App = () => {
  gsap.registerPlugin(useGSAP)
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:"#section-1",
        start:"top top",
        scrub:true,
        markers:true,
        endTrigger:"#section-4",
        end:"top top"
      }
    })
    tl.to("html",{
      backgroundColor:"#7f7f7f"
    }).to("html",{
      backgroundColor:"#333333"
    }).to("html",{
      backgroundColor:"black"
    })
  },[])
  return (
    <>
    <Canvas style={{
      height:"100vh",
      width:"100vw",
      top:0,
      left:0,
      position:"fixed",
      zIndex:1,
      background:"url(/background-l.png)",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover"
    }}>
      <Dog/>
    </Canvas>
    <section id="section-1"></section>
    <section id="section-2"></section>
    <section id="section-3"></section>
    <section id="section-4"></section>
    </>
  )
}

export default App