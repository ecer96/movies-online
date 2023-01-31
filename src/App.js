import { Routes, Route } from "react-router-dom";
import "../src/App.css";
import { Footer } from "./components/Footer";
import { LandingPage } from "./components/LandingPage";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { Search } from "./components/Search";
import { Details } from "./components/Details";
import { Contact } from "./components/Contact";


function App() {
    return (
        <div className="App h-screen overflow-y-scroll">
            
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="about" element={<LandingPage />} />
                    <Route path="search" element={<Search/>} />
                    <Route path="details/:id" element={<Details/>} />
                    <Route path="contact" element={<Contact/>}/>
                </Routes>
                <Footer />
      
        </div>
    );
}

export default App;
