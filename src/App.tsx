import "./App.css";
import Band from "./components/band/Band";
import Footer from "./components/footer/Footer";
import Topbar from "./components/topToolBar/TopToolBar";
import Agenda from "./pages/Agenda";
import Contact from "./pages/Contact";
import Index from "./pages/Index";
import ScrollToTopButton from "./components/scrollTopButton/ScrollToTopButton";

function App() {
  return (
    <>
      <Topbar />
      <div id="home">
        <Index />
      </div>
      <div id="banda">
        <Band />
      </div>
      <div id="agenda">
        <Agenda />
      </div>
      <div id="contato">
        <Contact />
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
