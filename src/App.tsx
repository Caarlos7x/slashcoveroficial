
import './App.css'
import Band from './components/band/Band'
import Footer from './components/footer/Footer'
import Topbar from './components/topToolBar/TopToolBar'
import Agenda from './pages/Agenda'
import Contact from './pages/Contact'
import Index from './pages/Index'

function App() {

  return (
    <>
      <Topbar />
      <Index />
      <Band />
      <Agenda />
      <Contact />
      <Footer />
    </>
  )
}

export default App
