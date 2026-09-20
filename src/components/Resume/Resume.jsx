import React, { useEffect } from "react";
import "./Resume.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Resume() {

    useEffect(() => {

        const ctx = gsap.context(() => {

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: "#resume",
                    start: "top 75%",
                    toggleActions: "play none none none",
                },
            });

            /* ================= SECTION HEADER ================= */

            timeline.from(".resume-header", {
                opacity: 0,
                y: 25,
                duration: 1.1,
                ease: "power3.out",
            });


            /* ================= RESUME CARDS ================= */

            timeline.from(
                ".resume-card",
                {
                    opacity: 0,
                    y: 25,
                    scale: 0.98,
                    duration: 0.85,
                    stagger: 0.18,
                    ease: "power3.out",
                    clearProps: "transform",
                },
                "-=0.35"
            );


            /* ================= BOTTOM MESSAGE ================= */

            timeline.from(
                ".resume-bottom",
                {
                    opacity: 0,
                    y: 12,
                    duration: 0.8,
                    ease: "power3.out",
                },
                "-=0.15"
            );

        }, "#resume");

        return () => {
            ctx.revert();
        };

    }, []);


    return (
        <section id="resume" className="resume-section">

            <div className="resume-container">

                <div className="resume-header">

                    <div>

                        <span className="resume-label">
                            RESUME & PROFILES
                        </span>

                        <h2>
                            Let's connect and <span>build.</span>
                        </h2>

                    </div>

                    <p>
                        Explore my resume, coding work and professional profile
                        to learn more about my skills and experience.
                    </p>

                </div>


                <div className="resume-grid">

                    {/* ================= RESUME ================= */}

                    <div className="resume-card resume-main-card">

                        <div className="resume-card-icon">
                            📄
                        </div>

                        <div className="resume-card-content">

                            <span className="resume-card-label">
                                RESUME
                            </span>

                            <h3>
                                My Resume
                            </h3>

                            <p>
                                View my academic background, technical skills,
                                projects, certifications and career profile.
                            </p>

                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="resume-button"
                            >
                                <span>
                                    View Resume
                                </span>

                                <span>
                                    ↗
                                </span>
                            </a>

                        </div>

                    </div>


                    {/* ================= GITHUB ================= */}

                    <div className="resume-card github-card">

                        <div className="resume-card-icon">
                            ⌘
                        </div>

                        <div className="resume-card-content">

                            <span className="resume-card-label">
                                GITHUB
                            </span>

                            <h3>
                                My Projects
                            </h3>

                            <p>
                                Explore my source code, Java projects,
                                AI/ML experiments and other development work.
                            </p>

                            <a
                                href="https://github.com/mohitkumar-0001"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="profile-button"
                            >
                                <span>
                                    Visit GitHub
                                </span>

                                <span>
                                    ↗
                                </span>
                            </a>

                        </div>

                    </div>


                    {/* ================= LINKEDIN ================= */}

                    <div className="resume-card linkedin-card">

                        <div className="resume-card-icon">
                            in
                        </div>

                        <div className="resume-card-content">

                            <span className="resume-card-label">
                                LINKEDIN
                            </span>

                            <h3>
                                Professional Profile
                            </h3>

                            <p>
                                Connect with me on LinkedIn for professional
                                opportunities, internships and career updates.
                            </p>

                            <a
                                href="https://www.linkedin.com/in/mohitkumar0001/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="profile-button"
                            >
                                <span>
                                    Visit LinkedIn
                                </span>

                                <span>
                                    ↗
                                </span>
                            </a>

                        </div>

                    </div>


                    {/* ================= LEETCODE ================= */}

                    <div className="resume-card leetcode-card">

                        <div className="resume-card-icon">
                            &lt;/&gt;
                        </div>

                        <div className="resume-card-content">

                            <span className="resume-card-label">
                                LEETCODE
                            </span>

                            <h3>
                                Coding Profile
                            </h3>

                            <p>
                                Practice data structures and algorithms,
                                solve coding problems and improve
                                problem-solving skills.
                            </p>

                            <a
                                href="https://leetcode.com/u/mohitkumar0001/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="profile-button"
                            >
                                <span>
                                    Visit LeetCode
                                </span>

                                <span>
                                    ↗
                                </span>
                            </a>

                        </div>

                    </div>

                </div>


                <div className="resume-bottom">

                    <span className="resume-bottom-dot"></span>

                    <span>
                        Open to learning, internships and new opportunities.
                    </span>

                </div>

            </div>

        </section>
    );
}

export default Resume;