import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import PackOne from "./PackOne"
import './HomePage.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="centered-text">STINKY CARD PACK LIBRARY!</div>
        </nav>
    );
}

function HomePage() {
    const [openPack, setOpenPack] = useState(false);
    const [packOpened, setPackOpened] = useState(false);
    const [tapCount, setTapCount] = useState(0);
    const controls = useAnimation();

    const maxTaps = 4;  // Number of taps required to open the pack

    const handleTap = () => {
        setTapCount(tapCount + 1);

        // Trigger the shake animation on each tap
        controls.start({
            x: [-10, 10, -10, 10, 0],
            transition: { duration: 0.5 },
        });

        if (tapCount + 1 >= maxTaps) {
            // Open the pack if the tap count reaches the max number of taps
            setPackOpened(true);
        }
    };

    const handleClose = () => {
        setOpenPack(false);
        setPackOpened(false);
        setTapCount(0); // Reset tap count
    };

    return (
        <div className="full-height-container">
            <Navbar />
            <div className="row h-100">
                <div className="col h-100" onClick={() => setOpenPack(!openPack)}>
                    <div className="inner-content h-100">Content 1</div>
                </div>
            </div>

            {openPack && !packOpened && (
                <motion.div 
                    className="pack-opening-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="pack-shake-container"
                        animate={controls}
                        onTap={handleTap}
                    >
                        <p>Tap {maxTaps - tapCount} more times to open your pack!</p>
                        <img 
                            src="https://via.placeholder.com/150" 
                            alt="Pack Placeholder" 
                            className="pack-image" 
                        />
                    </motion.div>
                </motion.div>
            )}

            {packOpened && (
                <motion.div 
                    className="pack-opening-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="pack-content">
                        <PackOne />
                        <button onClick={handleClose}>Close</button>
                    </div>
                </motion.div>
            )}
        </div>
    );
}

export default HomePage;
