import React from 'react';

export function AboutMe() {

    return (
        <div className={'relative h-dvh flex px-0'}>
            <div  style={{fontFamily: 'CustomPixelFont'}} className="container max-w-screen-xl mx-auto flex flex-col justify-start md:justify-center items-center text-2xl space-y-8">
                <div className='about-page-title'>
                    About Me
                </div>
                <div className="flex flex-col md:flex-row gap-x-8 md:gap-x-16 w-full">
                    <div className='aboutme flex flex-col text-xl'>
                        <div className='abouttitle text-2xl'>
                            Contact Me
                        </div>
                        <div>
                            <span style={{color: '#FFB534'}}>Email:</span> michaelf5115@gmail.com
                        </div>
                        <div style={{color: '#FFB534'}}>
                            <a href="https://www.linkedin.com/in/forte-michael-meche/" style={{ color: '#FFB534' }} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                        <div style={{color: '#FFB534'}}>
                            <a href="https://github.com/Mforte5115" style={{ color: '#FFB534' }} target="_blank" rel="noopener noreferrer">GitHub</a>
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