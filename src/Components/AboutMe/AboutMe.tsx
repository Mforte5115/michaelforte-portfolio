import React from 'react';

export function AboutMe() {

    return (
        <div className={'relative min-h-screen flex'}>
            <div  style={{fontFamily: 'CustomPixelFont'}} className="container max-w-screen-xl mx-auto flex flex-col justify-start items-center text-2xl space-y-16">
                <div className='about-page-title'>
                    About Me
                </div>
                <div className="flex flex-row gap-x-24">
                    <div className='aboutme flex flex-col text-xl'>
                        <div className='abouttitle text-2xl'>
                            Contact Me
                        </div>
                        <div>
                            <span style={{color: '#FFB534'}}>Email:</span> michaelf5115@gmail.com
                        </div>
                        <div>
                            <span style={{color: '#FFB534'}}>LinkedIn:</span> placeholder
                        </div>
                        <div>
                            <span style={{color: '#FFB534'}}>GitHub:</span> placeholder
                        </div>
                    </div>
                    <div className='text-lg'>
                        I'm Michael Forte, a mechanical engineer from Long Island, New York. I am a mechanical engineering graduate from the University of Delaware with a concentration in aerospace engineering and a minor in computer science. I am passionate about learning all kinds of skills, from software development, to robotics, to aerospace design. I currently work as a controls engineer at Norwalt Design.
                    </div>
                </div>
                <div>
                    Technologies
                </div>
                <div>
                    Technology cards
                </div>
            </div>
        </div>
    )
}