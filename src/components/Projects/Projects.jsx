import React, { useEffect } from "react";
import "./Projects.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import aiResumeAnalyzer from "../../assets/AI-Resume-Analyzer-Preview.png";
import Aichatbot from "../../assets/Aichatbot.png";
import amazonclone from "../../assets/amazonclone.webp";
import tictactoe from "../../assets/tictactoe.png";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
    useEffect(() => {
        const ctx = gsap.context(() => {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: "#projects",
                    start: "top 75%",
                    toggleActions: "play none none none",
                },
            });

            timeline.from(".projects-header", {
                opacity: 0,
                duration: 1.1,
                ease: "power3.out",
            });

            timeline.from(
                ".project-card",
                {
                    opacity: 0,
                    scale: 0.97,
                    duration: 0.9,
                    stagger: 0.25,
                    ease: "power3.out",
                    clearProps: "transform",
                },
                "+=0.20"
            );
        }, "#projects");

        return () => {
            ctx.revert();
        };
    }, []);

    const projects = [
        {
            title: "AI Resume Analyzer",
            category: "FEATURED • JAVA APPLICATION",
            description:
                "A Java-based resume analysis application with user authentication, resume upload, PDF text extraction and AI-powered career features.",
            image: aiResumeAnalyzer,
            tech: ["Java", "PostgreSQL", "PDFBox", "jBCrypt", "Gemini API"],
            accent: "featured",
            featured: true,
        },
        {
            title: "AI Chatbot",
            category: "AI PROJECT",
            description:
                "An AI chatbot project exploring conversational interaction, API integration and the fundamentals of building AI-powered applications.",
            image: Aichatbot,
            tech: ["HTML", "CSS", "JavaScript", "Gemini API"],
            accent: "cyan",
        },
        {
            title: "Amazon Clone",
            category: "WEB DEVELOPMENT",
            description:
                "A responsive e-commerce interface inspired by modern online shopping platforms, built to practice frontend development and UI design.",
            image: amazonclone,
            tech: ["HTML", "CSS"],
            accent: "blue",
        },
        {
            title: "Tic Tac Toe",
            category: "GAME DEVELOPMENT",
            description:
                "A browser-based Tic Tac Toe game with interactive gameplay and a clean user interface.",
            image: tictactoe,
            tech: ["HTML", "CSS", "JavaScript"],
            accent: "purple",
        },
    ];

    return (
        <section id="projects">
            <div className="projects-container">

                <div className="projects-header">
                    <div>
                        <span className="section-label">PROJECTS</span>

                        <h2>
                            Things I've{" "}
                            <span className="projects-gradient">
                                built.
                            </span>
                        </h2>
                    </div>

                    <p>
                        A selection of projects I've built while
                        learning software development, AI and
                        modern web technologies.
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <article
                            className={`project-card ${project.accent} ${
                                project.featured
                                    ? "featured-project"
                                    : ""
                            }`}
                            key={project.title}
                        >
                            <div className="project-image">

                                <img
                                    src={project.image}
                                    alt={`${project.title} project preview`}
                                />

                                <div className="project-number">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <div className="project-category">
                                    {project.category}
                                </div>

                                {project.featured && (
                                    <div className="featured-badge">
                                        ★ FEATURED PROJECT
                                    </div>
                                )}
                            </div>

                            <div className="project-content">

                                <h3>{project.title}</h3>

                                <p>{project.description}</p>

                                <div className="project-tech">
                                    {project.tech.map((tech) => (
                                        <span key={tech}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                            </div>
                        </article>
                    ))}
                </div>

                <div className="projects-bottom">
                    <span className="projects-dot"></span>
                    <span>
                        More projects coming as I keep building.
                    </span>
                </div>

            </div>
        </section>
    );
}

export default Projects;

