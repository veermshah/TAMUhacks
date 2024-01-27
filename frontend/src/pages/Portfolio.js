import PortfolioChart from "../components/PortfolioChart";
import Header from "../components/Header";
import TradingViewChart from "../components/TradingViewChart";

export default function Portfolio() {
    return (
        <div>
            <Header active="portfolio" />
            <div className="mt-40 flex min-w-[900px] justify-center">
                <PortfolioChart />
            </div>
        </div>
    );
}
