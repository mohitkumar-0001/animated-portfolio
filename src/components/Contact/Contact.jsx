import React, { useEffect } from "react";
import "./Contact.css";
import con from "../../assets/contact.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {

    useEffect(() => {

        const ctx = gsap.context(() => {

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: "#contact",
                    start: "top 75%",
                    toggleActions: "play none none none",
                },
            });

            /* ================= LEFT SIDE ================= */

            timeline.from(".contact-intro", {
                opacity: 0,
                x: -40,
                duration: 1.1,
                ease: "power3.out",
            });

            /* ================= CONTACT IMAGE ================= */

            timeline.from(
                ".contact-image-wrapper",
                {
                    opacity: 0,
                    y: 25,
                    duration: 0.9,
                    ease: "power3.out",
                },
                "-=0.55"
            );

            /* ================= RIGHT FORM ================= */

            timeline.from(
                ".rightcontact",
                {
                    opacity: 0,
                    x: 40,
                    duration: 1,
                    ease: "power3.out",
                },
                "-=0.65"
            );

            /* ================= FORM HEADING ================= */

            timeline.from(
                ".form-heading",
                {
                    opacity: 0,
                    y: 18,
                    duration: 0.7,
                    ease: "power3.out",
                },
                "-=0.45"
            );

            /* ================= FORM FIELDS ================= */

            timeline.from(
                ".form-field",
                {
                    opacity: 0,
                    y: 15,
                    duration: 0.65,
                    stagger: 0.16,
                    ease: "power3.out",
                },
                "-=0.3"
            );

            /* ================= BUTTON ================= */

            timeline.from(
                "#btn",
                {
                    opacity: 0,
                    y: 12,
                    duration: 0.7,
                    ease: "power3.out",
                },
                "-=0.15"
            );

        }, "#contact");

        return () => {
            ctx.revert();
        };

    }, []);


    return (
        <section id="contact">

            <div className="contact-container">

                {/* Left Side */}

                <div className="leftcontact">

                    <div className="contact-intro">

                        <span className="contact-label">
                            GET IN TOUCH
                        </span>

                        <h2>
                            Let's build something{" "}
                            <span>great.</span>
                        </h2>

                        <p>
                            Have a project idea, internship opportunity,
                            or simply want to connect? Feel free to send
                            me a message.
                        </p>

                        <div className="contact-image-wrapper">

                            <img
                                src={con}
                                alt="Contact illustration"
                            />

                        </div>

                    </div>

                </div>


                {/* Right Side */}

                <div className="rightcontact">

                    <form
                        action="https://formspree.io/f/mzzjkbge"
                        method="POST"
                    >

                        <div className="form-heading">

                            <h3>
                                Send me a message
                            </h3>

                            <p>
                                I'll get back to you as soon as possible.
                            </p>

                        </div>


                        <div className="form-field">

                            <label htmlFor="username">
                                Name
                            </label>

                            <input
                                id="username"
                                name="Username"
                                type="text"
                                placeholder="Enter your name"
                                required
                            />

                        </div>


                        <div className="form-field">

                            <label htmlFor="email">
                                Email
                            </label>

                            <input
                                id="email"
                                name="Email"
                                type="email"
                                placeholder="Enter your email"
                                required
                            />

                        </div>


                        <div className="form-field">

                            <label htmlFor="textarea">
                                Message
                            </label>

                            <textarea
                                name="message"
                                id="textarea"
                                placeholder="Write your message..."
                                required
                            ></textarea>

                        </div>


                        <button
                            type="submit"
                            id="btn"
                        >
                            Send Message
                            <span>↗</span>
                        </button>

                    </form>

                </div>

            </div>

        </section>
    );
}

export default Contact;