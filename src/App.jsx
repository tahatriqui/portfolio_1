import Contact from "./Components/Contact/Contact";
import Cursor from "./Components/Cursor/Cursor";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/Navbar/NavBar";
import Parallax from "./Components/Parallax/Parallax";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import "./app.scss"
const App = () => {
  return <div>
     <Cursor/>
    <section id="HomePage">  
      <NavBar/>
      <Hero/>
    </section>
    <section id="Services" ><Parallax type="services"/></section>
    <section id=""><Services/></section>
     <section id="Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio/>
   <section id="Contact">
    <Contact />
    </section>
    {/* <Test/> */}
  </div>;
};

export default App;
