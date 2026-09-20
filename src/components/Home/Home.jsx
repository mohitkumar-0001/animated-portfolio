import React, { useEffect } from "react";
import "./Home.css";
import mohit from "../../assets/Aichatbot.jpg";
import { TypeAnimation } from "react-type-animation";
import { gsap } from "gsap";

function Home() {

    useEffect(() => {
        const ctx = gsap.context(() => {

            const tl = gsap.timeline();

            tl.from(".available-badge", {
                y: -20,
                opacity: 0,
                duration: 0.6,
                ease: "power3.out",
            })
                .from(".line1", {
                    y: 40,
                    opacity: 0,
                    duration: 0.7,
                    ease: "power3.out",
                }, "-=0.2")
                .from(".line2", {
                    y: 60,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                }, "-=0.3")
                .from(".line3", {
                    y: 30,
                    opacity: 0,
                    duration: 0.7,
                    ease: "power3.out",
                }, "-=0.3")
                .from(".home-description", {
                    y: 20,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power3.out",
                }, "-=0.3")
                .from(".home-buttons", {
                    y: 20,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power3.out",
                }, "-=0.3")
                .from(".home-socials", {
                    y: 15,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power3.out",
                }, "-=0.2")
                .from(".righthome", {
                    x: 100,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                }, "-=0.7");

        });

        return () => ctx.revert();
    }, []);

    return (
        <section id="home">

            <div className="lefthome">

                <div className="homedetails">

                    <div className="available-badge">
                        <span className="available-dot"></span>
                        Available for Opportunities
                    </div>


                    <div className="line1">
                        <h1>Hi, I'm </h1>
                        <strong></strong>
                    </div>


                    <div className="line2">
                        MOHIT
                        <br />
                        KUMAR
                    </div>


                    <div className="line3">

                        <TypeAnimation
                            sequence={[
                                "I'm a Java Developer",
                                2000,
                                "I'm a Software Developer",
                                2000,
                                "I'm a AI/ML Engineer",
                                2000,
                                "I'm a Machine Learning Enthusiast",
                                2000,
                            ]}
                            speed={50}
                            deletionSpeed={40}
                            repeat={Infinity}
                        />

                    </div>


                    <p className="home-description">
                        BCA AI/ML student passionate about building modern
                        software, intelligent applications and real-world
                        projects using technology.
                    </p>


                    <div className="home-buttons">

                        <a
                            href="#projects"
                            className="home-btn home-btn-primary"
                        >
                            <span>
                                View My Work
                            </span>

                            <span>
                                ↗
                            </span>
                        </a>


                        <a
                            href="#contact"
                            className="home-btn home-btn-secondary"
                        >
                            <span>
                                Contact Me
                            </span>

                            <span>
                                ↗
                            </span>
                        </a>

                    </div>


                    <div className="home-socials">

                        <span>
                            Connect with me
                        </span>


                        <a
                            href="https://github.com/mohitkumar-0001"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>


                        <a
                            href="https://www.linkedin.com/in/mohitkumar0001/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>

                    </div>

                </div>

            </div>


            <div className="righthome">

                <span className="orbit-dot orbit-dot-one"></span>

                <span className="orbit-dot orbit-dot-two"></span>

                <span className="orbit-dot orbit-dot-three"></span>


                <div className="home-badge home-badge-java">
                    <span>☕</span>
                    Java
                </div>


                <div className="home-badge home-badge-ai">
                    <span>✦</span>
                    AI / ML
                </div>


                <div className="home-badge home-badge-code">
                    <span>&lt;/&gt;</span>
                    Developer
                </div>


                <img
                    src={mohit}
                    alt="AI Robot"
                />

            </div>


            <div className="home-scroll">

                <span className="home-scroll-line"></span>

                <span>
                    Scroll to explore
                </span>

            </div>

        </section>
    );
}

export default Home;