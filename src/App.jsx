import './index.css'
import NavBar from './components/NavBar/NavBar'
import Options from './components/Options/Options'
import SectionOne from './components/SectionOne/SectionOne'
import SectionTwo from './components/SectionTwo/SectionTwo'
import SectionThree from './components/SectionThree/SectionThree'
import Footer from './components/footer/Footer'
import AboutUs from './components/aboutUs/AboutUs'

function App () {
  return (
    <div>
      <NavBar />
      <Options />
      <SectionOne />
      <SectionTwo />
      <AboutUs />
      <SectionThree />
      <Footer />
    </div>
  )
}

export default App
