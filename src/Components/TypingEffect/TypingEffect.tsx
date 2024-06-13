import { ReactTyped } from "react-typed";
import './TypingEffect.css'

export function TypingEffect() {
    const phrases = [
        "mechanical engineering",
        "robotics",
        "web development",
        "hardware programming",
        "aerospace design",
        "computer aided design"
    ];

    return (
        <ReactTyped className="typedtext"
            strings={phrases}
            typeSpeed={40}
            backSpeed={50}
            backDelay={1500}
            startDelay={1000}
            loop
        />
    );
}
