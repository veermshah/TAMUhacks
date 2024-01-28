import React from "react";
import { useEffect } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

export default function Home() {
    useEffect(() => {
        let text = document.getElementById("text");
        let leaf = document.getElementById("leaf");
        let hill1 = document.getElementById("hill1");
        let hill4 = document.getElementById("hill4");
        let hill5 = document.getElementById("hill5");

        window.addEventListener("scroll", () => {
            let value = window.scrollY;

            if (text !== null) {
                // Set a maximum scroll limit (adjust the limit as needed)
                const maxScroll = 400;

                // Apply the scroll transformations only if within the limit
                if (value <= maxScroll) {
                    text.style.marginTop = value * 2.5 + "px";
                    leaf.style.top = value * -1.5 + "px";
                    leaf.style.left = value * 1.5 + "px";
                    hill5.style.left = value * 1.5 + "px";
                    hill4.style.left = value * -1.5 + "px";
                    hill1.style.top = value * 1 + "px";
                }
            }
        });
    }, []);
    return (
        <>
            <div>
                <Header active="home" />
                <div className="App">
                    <section class="parallax">
                        <img src="hill1.png" id="hill1" />
                        <img src="hill2.png" id="hill2" />
                        <img src="hill3.png" id="hill3" />
                        <img src="hill4.png" id="hill4" />
                        <img src="hill5.png" id="hill5" />
                        <img src="tree.png" id="tree" />
                        <h2 id="text" className="font-bold">
                            Moneyplant
                            <section>
                                <Typewriter
                                    options={{
                                        strings: [
                                            "RoboAdvising.",
                                            "Automatic Trading.",
                                            "Financial Peace.",
                                        ],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </section>
                        </h2>

                        <img src="leaf.png" id="leaf" />
                        <img src="plant.png" id="plant" />
                    </section>

                    <section class="sec">
                        <br />
                        <br />
                        <br />
                        <h1>About</h1>
                        <br />
                        <br />
                        <p>
                            Money Plant is a comprehensive financial platform
                            with a robo-advisor feature. It analyzes stock data
                            from the last ten years while also considering
                            market changes in the last month to provide
                            personalized investment advice. Our goal is to help
                            you make informed decisions and achieve your
                            financial objectives.
                        </p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <a href="/advisor">Get Started</a>
                    </section>
                </div>
            </div>
            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
                    <motion.dev
                        animate={{ y: [0, 24, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            repeatType: "loop",
                        }}
                        className="w-3 h-3 rounded-full bg-white mb-1"
                    />
                </div>
            </div>
        </>
    );
}
