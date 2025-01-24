import { useState, useEffect } from "react"
import About from "./components/About"
import Contact from "./components/Contact"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Story from "./components/Story"
import Grid from "./components/Grid"
import Pixel from './components/Pixel'
import LoadingScreen from './components/LoadingScreen'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"


// Add these styles to your global CSS or create a new CSS module
const styles = `
  .app-wrapper {
    background-color: black;
    min-height: 100vh;
    transition: background-color 0.5s ease-in-out;
  }

  .app-wrapper.main-background {
    background-color: #B6C6D9;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100dvw;
    overflow-x: hidden;
    font-family: "General Sans", sans-serif;
  }
`

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [canStartHeroAnimation, setCanStartHeroAnimation] = useState(false)
  const [showMainBackground, setShowMainBackground] = useState(false)

  useEffect(() => {
    // Add the styles to the document
    const styleSheet = document.createElement("style")
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet)

    // Cleanup
    return () => styleSheet.remove()
  }, [])

  // Handle loading complete
  const handleLoadComplete = () => {
    setTimeout(() => {
      setCanStartHeroAnimation(true)
      setIsLoading(false)
      
      // Wait for loading screen to complete its transition
      setTimeout(() => {
        // Change to main background color after hero animation
        setTimeout(() => {
          setShowMainBackground(true)
        }) // Wait 5 seconds after hero becomes visible
      }, 1000)
    }, 1000)
  }

  return (
    <div className={`app-wrapper ${showMainBackground ? 'main-background' : ''}`}>
      {isLoading && <LoadingScreen onLoadComplete={handleLoadComplete} />}
      <div className={`app-content ${!isLoading ? 'visible' : 'invisible'}`}>
        <Navbar />
        <Hero startAnimation={canStartHeroAnimation} />
        <About />
        <Features />
        <Story />
        <Pixel />
        <Grid />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App