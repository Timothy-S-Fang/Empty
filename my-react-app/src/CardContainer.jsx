// CardContainer.js
import React, { useState, useTransition } from "react";
import "./CardContainer.css"; // Import the CSS styles

function getRarityColor(rarity) {
    switch (rarity) {
        case 'Common':
            return '#cfcfc4'; // Pastel Grey
        case 'Uncommon':
            return '#92c47c'; // Pastel Green
        case 'Rare':
            return '#5dade2'; // Pastel Blue
        case 'SUPER RARE':
            return '#d7bde2'; // Pastel Purple
        case 'LEGENDARY':
            return '#f7dc6f'; // Pastel Gold
        default:
            return '#cccccc'; // Default, light grey
    }
}

function CardContainer({ card }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    }
    const rarity = getRarityColor(card.rarity)
    return (
        <div className="card-container" onClick={flipCard}>
            {isFlipped ?
                <div className="card-content-other" >
                    <div className="card-title">{card.otherSide.title}</div>
                    <div className="py-3" />
                    <div className="card-description">{card.otherSide.description}</div>
                </div>
                :
                <div>
                    <div className="card-title">{card.title}</div>
                    <div className="card-image-container">
                        <img src={card.image} alt={card.title} className="card-image" />
                    </div>
                    <div className="card-content">
                        <div className="card-rarity" style={{ backgroundColor: rarity }}>Rarity: {card.rarity}</div>
                    </div>
                </div>}
        </div>
    );
}

export default CardContainer;
