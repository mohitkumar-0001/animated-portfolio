import React, { useEffect } from "react";
import "./Education.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Education() {
    useEffect(() => {
        const ctx = gsap.context(() => {
            const isMobile = window.innerWidth <= 600;

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: "#education",
                    start: "top 75%",
                    toggleActions: "play none none none",
                },
            });

            timeline.from(".education-header", {
                opacity: 0,
                y: 25,
                duration: 1.1,
                ease: "power3.out",
            });

            timeline.from(
                ".education-main-card",
                {
                    opacity: 0,
                    y: isMobile ? 20 : 0,
                    x: isMobile ? 0 : -35,
                    duration: 1,
                    ease: "power3.out",
                    clearProps: "transform",
                },
                "-=0.35"
            );

            timeline.from(
                ".certifications-card",
                {
                    opacity: 0,
                    y: isMobile ? 20 : 0,
                    x: isMobile ? 0 : 35,
                    duration: 1,
                    ease: "power3.out",
                    clearProps: "transform",
                },
                "-=0.75"
            );

            timeline.from(
                ".school-education-item",
                {
                    opacity: 0,
                    y: 20,
                    duration: 0.8,
                    stagger: 0.22,
                    ease: "power3.out",
                },
                "-=0.45"
            );

            timeline.from(
                ".certificate-item",
                {
                    opacity: 0,
                    y: 18,
                    duration: 0.7,
                    stagger: 0.16,
                    ease: "power3.out",
                },
                "-=0.35"
            );

            timeline.from(
                ".education-bottom",
                {
                    opacity: 0,
                    y: 12,
                    duration: 0.8,
                    ease: "power3.out",
                },
                "-=0.15"
            );
        }, "#education");

        return () => ctx.revert();
    }, []);

    const certificates = [
        {
            number: "01",
            title: "Java Foundations",
            description:
                "Award of Completion for satisfactory completion of all coursework.",
            date: "18 June 2026",
            issuer: "Oracle Academy",
        },
        {
            number: "02",
            title: "30-Days SQL Micro Course",
            description:
                "Successfully completed the E-Learning course of 30-Days SQL Micro Course.",
            date: "5 June 2025",
            issuer: "SQL Micro Course",
        },
        {
            number: "03",
            title: "Introduction to Cybersecurity",
            description:
                "Successfully completed Introduction to Cybersecurity through the Cisco Networking Academy program.",
            date: "22 Aug 2025",
            issuer: "Cisco Networking Academy • Galgotias University",
        },
        {
            number: "04",
            title: "Entrepreneurship",
            description:
                "Successfully completed the 12-week Entrepreneurship course.",
            date: "Jul–Oct 2025",
            issuer: "NPTEL",
        },
        {
            number: "05",
            title: "Exploring Networking with Cisco Packet Tracer",
            description:
                "Successfully completed Exploring Networking with Cisco Packet Tracer through the Cisco Networking Academy program.",
            date: "23 Aug 2025",
            issuer: "Cisco Networking Academy • Galgotias University",
        },
        {
            number: "06",
            title: "National Financial Literacy Quiz 2026",
            description:
                "Participated in the National Financial Literacy Quiz 2026 (College Round).",
            date: "2026",
            issuer:
                "School of Computer Applications & Technology • Galgotias University",
        },
    ];

    return (
        <section id="education">
            <div className="education-container">

                <div className="education-header">
                    <div>
                        <span className="section-label">EDUCATION</span>

                        <h2>
                            My academic{" "}
                            <span className="education-gradient">
                                journey.
                            </span>
                        </h2>
                    </div>

                    <p>
                        My academic background and certifications
                        that support my journey in software development,
                        AI and machine learning.
                    </p>
                </div>

                <div className="education-grid">

                    <div className="education-main-card">

                        <div className="education-card-top">
                            <div className="education-icon">🎓</div>

                            <span className="education-status">
                                CURRENT
                            </span>
                        </div>

                        <div className="education-card-content">

                            <span className="education-type">
                                BACHELOR'S DEGREE
                            </span>

                            <h3>
                                Bachelor of Computer Applications
                            </h3>

                            <h4>
                                BCA (Artificial Intelligence & Machine Learning)
                            </h4>

                            <p className="education-university">
                                Galgotias University
                            </p>

                            <div className="education-details">

                                <div className="education-detail">
                                    <span className="detail-label">
                                        SPECIALIZATION
                                    </span>

                                    <span className="detail-value">
                                        AI / ML
                                    </span>
                                </div>

                                <div className="education-detail">
                                    <span className="detail-label">
                                        FOCUS
                                    </span>

                                    <span className="detail-value">
                                        Software Development
                                    </span>
                                </div>

                                <div className="education-detail">
                                    <span className="detail-label">
                                        STATUS
                                    </span>

                                    <span className="detail-value">
                                        In Progress
                                    </span>
                                </div>

                            </div>

                            <div className="school-education">

                                <div className="school-education-item">
                                    <div>
                                        <span className="school-type">
                                            CLASS XII
                                        </span>

                                        <h4>
                                            R.P.S Public School
                                        </h4>

                                        <p>UP Board</p>

                                        <small>
                                            Aligarh, India • 2023 – 2024
                                        </small>
                                    </div>
                                </div>

                                <div className="school-education-item">
                                    <div>
                                        <span className="school-type">
                                            CLASS X
                                        </span>

                                        <h4>
                                            Aligarh Modern School
                                        </h4>

                                        <p>CBSE Board</p>

                                        <small>
                                            Aligarh, India • 2021 – 2022
                                        </small>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="certifications-card">

                        <div className="certifications-header">

                            <div>
                                <span className="certification-label">
                                    CERTIFICATIONS
                                </span>

                                <h3>
                                    Learning beyond
                                    <span> classrooms.</span>
                                </h3>
                            </div>

                            <div className="certificate-icon">
                                ✦
                            </div>

                        </div>

                        <div className="certification-list">

                            {certificates.map((certificate) => (
                                <div
                                    className="certificate-item"
                                    key={certificate.number}
                                >
                                    <div className="certificate-number">
                                        {certificate.number}
                                    </div>

                                    <div className="certificate-info">

                                        <h4>
                                            {certificate.title}
                                        </h4>

                                        <p>
                                            {certificate.description}
                                        </p>

                                        <small>
                                            {certificate.issuer} •{" "}
                                            {certificate.date}
                                        </small>

                                    </div>

                                    <span className="certificate-arrow">
                                        ↗
                                    </span>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>

                <div className="education-bottom">
                    <span className="education-dot"></span>

                    <span>
                        Learning, building and improving every day.
                    </span>
                </div>

            </div>
        </section>
    );
}

export default Education;