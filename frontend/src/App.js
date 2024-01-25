import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Advisor from "./pages/Advisor";
import Portfolio from "./pages/Portfolio";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
    

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/advisor" element={<Advisor />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
            
            
        </div>
    );
}

export default App;
