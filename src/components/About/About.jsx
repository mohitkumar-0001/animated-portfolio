import React, { useEffect } from "react";
import "./About.css";
import Card from "../Card/Card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import java from "../../assets/Java-Logo.png";
import python from "../../assets/python.png";
import dsa from "../../assets/dsa.png";

gsap.registerPlugin(ScrollTrigger);

function About() {

    useEffect(() => {
        const ctx = gsap.context(() => {

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: "#about",
                    start: "top 75%",
                    toggleActions: "play none none none",
                },
            });

            timeline

                /* ================= ABOUT HEADING ================= */

                .from(".about-heading", {
                    x: -50,
                    opacity: 0,
                    duration: 1.1,
                    ease: "power3.out",
                })

                /* ================= INFO CARDS ================= */

                .from(
                    ".about-info-card",
                    {
                        y: 35,
                        opacity: 0,
                        duration: 0.8,
                        stagger: 0.22,
                        ease: "power3.out",
                    },
                    "-=0.25"
                )

                /* ================= EDUCATION ================= */

                .from(
                    ".about-education",
                    {
                        y: 35,
                        opacity: 0,
                        duration: 0.9,
                        ease: "power3.out",
                    },
                    "-=0.15"
                )

                /* ================= TECH STACK HEADING ================= */

                .from(
                    ".skills-heading",
                    {
                        x: 50,
                        opacity: 0,
                        duration: 1.1,
                        ease: "power3.out",
                    },
                    "-=0.55"
                )

                /* ================= SKILL CARDS ================= */

                .from(
                    ".about-card-wrapper",
                    {
                        y: 35,
                        opacity: 0,
                        duration: 0.8,
                        stagger: 0.22,
                        ease: "power3.out",
                    },
                    "-=0.25"
                )

                /* ================= BOTTOM NOTE ================= */

                .from(
                    ".about-bottom-note",
                    {
                        y: 15,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.15"
                );

        }, "#about");

        return () => {
            ctx.revert();
        };

    }, []);

    return (
        <section id="about">

            <div className="about-container">

                {/* ================= LEFT CONTENT ================= */}

                <div className="leftabout">

                    <div className="about-heading">

                        <span className="section-label">
                            ABOUT ME
                        </span>

                        <h2>
                            Building ideas with{" "}
                            <span className="about-gradient">
                                code & intelligence.
                            </span>
                        </h2>

                        <p>
                            I'm a BCA AI/ML student passionate about software
                            development, problem solving and building practical
                            technology projects. I enjoy turning ideas into
                            useful applications while continuously improving
                            my programming and AI skills.
                        </p>

                    </div>

                    {/* ================= INFO CARDS ================= */}

                    <div className="about-info-grid">

                        <div className="about-info-card">

                            <div className="info-icon">
                                🎓
                            </div>

                            <div>
                                <span className="info-label">
                                    DEGREE
                                </span>

                                <h3>
                                    BCA (AI/ML)
                                </h3>
                            </div>

                        </div>

                        <div className="about-info-card">

                            <div className="info-icon">
                                🏫
                            </div>

                            <div>
                                <span className="info-label">
                                    UNIVERSITY
                                </span>

                                <h3>
                                    Galgotias University
                                </h3>
                            </div>

                        </div>

                        <div className="about-info-card">

                            <div className="info-icon">
                                💻
                            </div>

                            <div>
                                <span className="info-label">
                                    PRIMARY FOCUS
                                </span>

                                <h3>
                                    Java & AI/ML
                                </h3>
                            </div>

                        </div>

                        <div className="about-info-card">

                            <div className="info-icon">
                                🧠
                            </div>

                            <div>
                                <span className="info-label">
                                    INTERESTS
                                </span>

                                <h3>
                                    AI • DSA • Software
                                </h3>
                            </div>

                        </div>

                    </div>

                    {/* ================= EDUCATION ================= */}

                    <div className="about-education">

                        <div className="education-top">

                            <div className="education-icon">
                                ✦︎
                            </div>

                            <div>

                                <span>
                                    EDUCATION
                                </span>

                                <h3>
                                    Bachelor of Computer Applications
                                </h3>

                            </div>

                        </div>

                        <p>
                            Artificial Intelligence & Machine Learning
                        </p>

                        <div className="education-meta">

                            <span>
                                Galgotias University
                            </span>

                            <span>
                                BCA (AI/ML)
                            </span>

                        </div>

                    </div>

                </div>

                {/* ================= RIGHT CONTENT ================= */}

                <div className="rightabout">

                    <div className="skills-heading">

                        <span className="section-label">
                            TECH STACK
                        </span>

                        <h2>
                            Technologies I{" "}
                            <span className="about-gradient">
                                work with.
                            </span>
                        </h2>

                        <p>
                            Tools and technologies I'm currently learning
                            and using to build practical projects.
                        </p>

                    </div>

                    {/* ================= SKILL CARDS ================= */}

                    <div className="about-cards">

                        <div className="about-card-wrapper java-card">

                            <Card
                                title="JAVA"
                                image={java}
                            />

                            <span className="card-tag">
                                PROGRAMMING
                            </span>

                        </div>

                        <div className="about-card-wrapper python-card">

                            <Card
                                title="PYTHON"
                                image={python}
                            />

                            <span className="card-tag">
                                AI / ML
                            </span>

                        </div>

                        <div className="about-card-wrapper dsa-card">

                            <Card
                                title="DSA"
                                image={dsa}
                            />

                            <span className="card-tag">
                                PROBLEM SOLVING
                            </span>

                        </div>

                    </div>

                    {/* ================= BOTTOM NOTE ================= */}

                    <div className="about-bottom-note">

                        <span className="note-dot"></span>

                        <span>
                            Always learning. Always building.
                        </span>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;