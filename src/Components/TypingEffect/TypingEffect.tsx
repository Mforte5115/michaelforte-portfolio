import { ReactTyped } from "react-typed";
import './TypingEffect.css'

export function TypingEffect() {
    const phrases = [
        "I am a Mechanical Engineer",
        "I am a Computer Scientist",
        "I am a technology enthusiast",
        "I turn ideas into reality"
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
