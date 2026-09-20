import React from "react";
import "./Card.css";

function Card({ title, image }) {
    const skillData = {
        JAVA: {
            category: "PROGRAMMING",
            description: "Object-oriented programming & application development",
            accent: "java",
        },

        PYTHON: {
            category: "AI / ML",
            description: "Programming, automation & machine learning",
            accent: "python",
        },

        DSA: {
            category: "PROBLEM SOLVING",
            description: "Algorithms, data structures & logical thinking",
            accent: "dsa",
        },
    };

    const currentSkill = skillData[title] || {
        category: "TECHNOLOGY",
        description: "Building skills through practical projects",
        accent: "default",
    };

    return (
        <div className={`card ${currentSkill.accent}`}>

            {/* Glow */}
            <div className="card-glow"></div>

            {/* Top */}
            <div className="card-top">
                <span className="card-category">
                    {currentSkill.category}
                </span>

                <span className="card-arrow">↗</span>
            </div>

            {/* Icon */}
            <div className="card-icon">
                <img
                    src={image}
                    alt={`${title} logo`}
                />
            </div>

            {/* Content */}
            <div className="card-content">
                <h2>{title}</h2>

                <p>
                    {currentSkill.description}
                </p>
            </div>

            {/* Bottom line */}
            <div className="card-line"></div>

            {/* Hover content */}
            <div className="hovercard">
                <img
                    src={image}
                    alt={`${title} logo`}
                />

                <span>Explore Skill</span>
            </div>

        </div>
    );
}

export default Card;