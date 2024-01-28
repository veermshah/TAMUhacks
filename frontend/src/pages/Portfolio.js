import PortfolioChart from "../components/PortfolioChart";
import Header from "../components/Header";
import TradingViewChart from "../components/TradingViewChart";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Portfolio() {
    const navigate = useNavigate();
    useEffect(() => {
        const url = "http://localhost:8000/api/portfolio/";
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('refresh'),
            }
        })
            .then((response) => {
                if(response.status === 401){
                    navigate("/login")
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
            });
    }, []);
    return (
        <div>
            <Header active="portfolio" />
            <div className="mt-40 flex min-w-[900px] justify-center">
                <PortfolioChart />
            </div>
        </div>
    );
}
