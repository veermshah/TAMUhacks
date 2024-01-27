import React, { useState, useEffect } from "react";
import "../FullScreenModal.css"; // Import your CSS file for styling
import Header from "../components/Header";
import BreatheAnimation from "../components/BreatheAnimation";

const FullScreenModal = () => {
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        // Open the modal when the component mounts
        setModalOpen(true);

        // Optionally, you can close the modal after a certain duration
        const timeout = setTimeout(() => {
            setModalOpen(false);
        }, 5000); // Close the modal after 5 seconds

        // Clear the timeout on component unmount to avoid memory leaks
        return () => clearTimeout(timeout);
    }, []); // The empty dependency array ensures that this effect runs only once on mount

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <div className="app">
            <Header active="advisor" />
            {modalOpen && (
                <div className="fullscreen-modal">
                    <div className="modal-content">
                        <BreatheAnimation />                        
                    </div>
                </div>
            )}
        </div>
    );
};

export default FullScreenModal;
