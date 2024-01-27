import Header from "../components/Header.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Advisor() {
    const navigate = useNavigate();
    useEffect(() => {
        const url = "http://localhost:8000/api/customers/";
        fetch(url)
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
            <h1 className="flex justify-center mt-48">Advisor Page</h1>
            <Header active="advisor"/>
        </div>
    );
}