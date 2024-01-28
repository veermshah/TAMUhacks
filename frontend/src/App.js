import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Advisor from "./pages/Advisor";
import Portfolio from "./pages/Portfolio";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import { Howl, Howler } from "howler";
import natureMusic from "./natureMusic.mp3";

function App() {
    var sound = new Howl({
        src: [natureMusic],
    });
    sound.play();
    Howler.volume(0.15);

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/advisor" element={<Advisor />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
