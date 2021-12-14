import './index.css'
import NavBar from './components/NavBar/NavBar'
import Options from './components/Options/Options'
import SectionOne from './components/SectionOne/SectionOne'
import SectionTwo from './components/SectionTwo/SectionTwo'
import SectionThree from './components/SectionThree/SectionThree'
import Footer from './components/footer/Footer'

function App () {
  return (
    <div>
      <NavBar />
      <Options />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </div>
  )
}

export default App
