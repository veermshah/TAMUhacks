import PortfolioChart from "../components/PortfolioChart";
import Header from "../components/Header";

export default function Portfolio() {
    return (
        <div>
            <Header />
            <div className="mt-40 flex min-w-[900px] justify-center">
            <PortfolioChart />
            </div>
        </div>
    );
}