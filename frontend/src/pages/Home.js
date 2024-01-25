import React from "react";
import { useEffect } from "react";
import Header from "../components/Header";

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
                const maxScroll = 500;

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
            <Header />
            <div className="App">
                <section class="parallax">
                    <img src="hill1.png" id="hill1" />
                    <img src="hill2.png" id="hill2" />
                    <img src="hill3.png" id="hill3" />
                    <img src="hill4.png" id="hill4" />
                    <img src="hill5.png" id="hill5" />
                    <img src="tree.png" id="tree" />
                    <h2 id="text" className="font-bold">
                        RoboAdvisor
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
                        Lorem ipsum dolor sit amet onsectetur adipisicing eit.
                        Quisquam, voluptatum. Quisquam, voluptatum.
                    </p>
                </section>
            </div>
        </>
    );
}
