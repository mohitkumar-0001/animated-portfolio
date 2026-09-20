import React, { useEffect, useRef, useState } from "react";

function Reveal({
    children,
    direction = "up",
    delay = 0,
    duration = 700,
}) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(element);
                }
            },
            {
                threshold: 0.15,
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const transforms = {
        up: "translate3d(0, 45px, 0)",
        down: "translate3d(0, -45px, 0)",
        left: "translate3d(-45px, 0, 0)",
        right: "translate3d(45px, 0, 0)",
        fade: "translate3d(0, 0, 0)",
    };

    const hiddenTransform =
        transforms[direction] || transforms.up;

    const animationStyle = {
        opacity: visible ? 1 : 0,
        transform: visible
            ? "translate3d(0, 0, 0)"
            : hiddenTransform,
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
        transitionDelay: `${delay}s`,
    };

    return (
        <div
            ref={ref}
            style={{
                display: "contents",
            }}
        >
            {React.isValidElement(children)
                ? React.cloneElement(children, {
                      style: {
                          ...(children.props.style || {}),
                          ...animationStyle,
                      },
                  })
                : children}
        </div>
    );
}

export default Reveal;