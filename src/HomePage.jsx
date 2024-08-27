import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import PackOne from "./PackOne"
import packArtzero from "./images/packArt/packArt0.png";
import packArtone from "./images/packArt/packArt1.png";
import packArttwo from "./images/packArt/packArt2.png";
import packArtthree from "./images/packArt/packArt3.png";
import packArtfour from "./images/packArt/packArt4.png";
import styles from './HomePage.module.css';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.centeredText}>STINKY CARD PACK LIBRARY!</div>
        </nav>
    );
}

function HomePage() {
    const [openPack, setOpenPack] = useState(false);
    const [packOpened, setPackOpened] = useState(false);
    const [tapCount, setTapCount] = useState(0);
    const controls = useAnimation();

    const maxTaps = 5;  // Number of taps required to open the pack

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
        <div className={styles.fullHeightContainer}>
            <Navbar />
            <div>hello</div>
            <div className="col h-100" onClick={() => setOpenPack(!openPack)}>
                <div className={styles.parentCenter}>
                    {tapCount === 0 &&
                        <img
                            src={packArtzero}
                            alt="Pack Placeholder"
                            className={styles.packImage}
                        />
                    }
                </div>
            </div>

            {openPack && !packOpened && (
                <motion.div
                    className={styles.packOpeningOverlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className={styles.packShakeContainer}
                        animate={controls}
                        onTap={handleTap}
                    >
                        <div className={styles.packOverlayText}>Tap {maxTaps - tapCount} more times to open your pack!</div>
                        <div className={styles.parentCenter}>
                            <img
                                src={tapCount === 0 ? packArtzero :
                                    tapCount === 1 ? packArtone :
                                        tapCount === 2 ? packArttwo :
                                            tapCount === 3 ? packArtthree :
                                                packArtfour}
                                alt="Pack Placeholder"
                                className={styles.packImage}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}

            {packOpened && (
                <motion.div
                    className={styles.packOpeningOverlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className={styles.packContent}>
                        <PackOne />
                        <button onClick={handleClose}>Close</button>
                    </div>
                </motion.div>
            )}
        </div>
    );
}

export default HomePage;
