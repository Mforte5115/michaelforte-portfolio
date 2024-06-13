import { ReactTyped } from "react-typed";
import './TypingEffect.css'

export function TypingEffect() {
    const phrases = [
        "mechaical engineering",
        "robotics",
        "web development",
        "hardware programming",
        "aerospace design"
    ];

    return (
        <ReactTyped className="typedtext"
            strings={phrases}
            typeSpeed={40}
            backSpeed={60}
            backDelay={1000}
            startDelay={1000}
            loop
        />
    );
}
