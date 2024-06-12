import React, { useState } from 'react';
import { ReactTyped } from 'react-typed';

export function TypingEffect() {
    const [loopCount, setLoopCount] = useState<number>(0);

    const phrases = [
        "I am a Mechanical Engineer",
        "I am a Computer Scientist",
        "I turn ideas into Reality"
    ];

    const handleComplete = () => {
        setLoopCount((prevLoopCount) => prevLoopCount + 1);
    };

    return (
        <ReactTyped
            strings={phrases}
            typeSpeed={40}
            backSpeed={50}
            backDelay={1000}
            startDelay={1000}
            loop={loopCount < phrases.length - 1}
            onComplete={handleComplete}
        />
    )
} 