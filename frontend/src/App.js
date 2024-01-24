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
                <Header>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/advisor" element={<Advisor />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/settings" element={<SettingsPage />} />
                    </Routes>
                </Header>
            </BrowserRouter>
        </div>
    );
}

export default App;
