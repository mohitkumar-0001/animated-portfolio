import React, { useEffect } from "react";
import "./Footer.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Footer() {

    useEffect(() => {

        const ctx = gsap.context(() => {

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".footer",
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });

            /* ================= FOOTER TOP ================= */

            timeline.from(".footer-top", {
                opacity: 0,
                y: 25,
                duration: 1,
                ease: "power3.out",
            });


            /* ================= BRAND ================= */

            timeline.from(
                ".footer-brand",
                {
                    opacity: 0,
                    x: -25,
                    duration: 0.8,
                    ease: "power3.out",
                },
                "-=0.55"
            );


            /* ================= QUICK LINKS ================= */

            timeline.from(
                ".footer-links",
                {
                    opacity: 0,
                    y: 15,
                    duration: 0.8,
                    ease: "power3.out",
                },
                "-=0.6"
            );


            /* ================= CONNECT ================= */

            timeline.from(
                ".footer-connect",
                {
                    opacity: 0,
                    x: 25,
                    duration: 0.8,
                    ease: "power3.out",
                },
                "-=0.6"
            );


            /* ================= DIVIDER ================= */

            timeline.from(
                ".footer-divider",
                {
                    opacity: 0,
                    scaleX: 0,
                    transformOrigin: "center",
                    duration: 0.8,
                    ease: "power3.out",
                },
                "-=0.35"
            );


            /* ================= FOOTER BOTTOM ================= */

            timeline.from(
                ".footer-bottom",
                {
                    opacity: 0,
                    y: 12,
                    duration: 0.8,
                    ease: "power3.out",
                },
                "-=0.25"
            );

        }, ".footer");

        return () => {
            ctx.revert();
        };

    }, []);


    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-top">

                    <div className="footer-brand">

                        <a
                            href="#home"
                            className="footer-logo"
                        >
                            <span className="footer-bracket">
                                &lt;
                            </span>

                            <span className="footer-name">
                                Mohit
                            </span>

                            <span className="footer-bracket">
                                /&gt;
                            </span>
                        </a>

                        <p>
                            BCA (AI & ML) student focused on Java,
                            AI/ML and building practical software projects.
                        </p>

                    </div>


                    <div className="footer-links">

                        <span>
                            QUICK LINKS
                        </span>

                        <a href="#home">
                            Home
                        </a>

                        <a href="#about">
                            About
                        </a>

                        <a href="#projects">
                            Projects
                        </a>

                        <a href="#education">
                            Education
                        </a>

                        <a href="#contact">
                            Contact
                        </a>

                    </div>


                    <div className="footer-connect">

                        <span>
                            CONNECT
                        </span>

                        <a
                            href="https://github.com/mohitkumar-0001"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub ↗
                        </a>

                        <a
                            href="https://www.linkedin.com/in/mohitkumar0001/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn ↗
                        </a>

                        <a href="mailto:mohit077030@gmail.com">
                            Email ↗
                        </a>

                    </div>

                </div>


                <div className="footer-divider"></div>


                <div className="footer-bottom">

                    <p>
                        © {new Date().getFullYear()} Mohit Kumar.
                        All rights reserved.
                    </p>

                    <p>
                        Built with React & JavaScript
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;