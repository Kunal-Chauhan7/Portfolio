import { BrowserRouter } from "react-router-dom";
import Hero from "./Components/Hero.Component";
import NavBar from "./Components/NavBar.Component";
import About from "./Components/About.Component";
import Technologies from "./Components/Technologies.Component";

function App() {
  return (
    <BrowserRouter>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 min-h-screen relative">
          <div className="fixed top-0 left-0 h-full w-full -z-10">
              <div className="absolute top-0 left-0 h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          </div>
          <div className="container mx-auto px-8 relative">
              <NavBar/>
              <Hero/>
              <About/>
              <Technologies/>
          </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
