import React from 'react';

export function AboutMe() {

    return (
        <div className={'relative min-h-screen flex'}>
            <div className="container max-w-screen-xl mx-auto flex flex-col justify-start items-center text-4xl space-y-16">
                <div className='about-page-title'>
                    About Me
                </div>
                <div className="flex flex-row gap-x-24">
                    <div className='aboutme flex flex-col'>
                        <div className='abouttitle'>
                            About Me
                        </div>
                        <div>
                            Email: michaelf5115@gmail.com
                        </div>
                        <div>
                            LinkedIn: placeholder
                        </div>
                        <div>
                            GitHub: placeholder
                        </div>
                    </div>
                    <div className='text-lg'>
                        I'm Michael Forte, a mechanical engineer from Long Island, New York. I am a mechanical engineering graduate from the University of Delaware with a concentration in aerospace engineering and a minor in computer science. I am passionate about learning all kinds of skills, from software development, to robotics, to aerospace design. I currently work as a controls engineer at Norwalt Design.
                    </div>
                </div>
            </div>
        </div>
    )
}