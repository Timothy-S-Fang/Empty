// CardContainer.js
import React from 'react';
import './CardContainer.css'; // Import the CSS styles

function CardContainer({ children, title }) {
    return (
        <div className="card-container">
            <div className="card-content">
                <div className="card-title">
                    {title}
                </div>
                {children}
            </div>
        </div>
    );
}

export default CardContainer;
