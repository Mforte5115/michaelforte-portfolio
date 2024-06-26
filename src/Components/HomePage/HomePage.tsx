import React from 'react';
import headshot from './headshot.jpg'
import { TypingEffect } from '../TypingEffect/TypingEffect';
import './HomePage.css'
import { Button } from 'react-bootstrap';

export function HomePage() {

const scrollToAboutme = () => {
    const aboutMeSection = document.getElementById('aboutme');
    if (aboutMeSection) {
        aboutMeSection.scrollIntoView({behavior: 'smooth'})
    }
}

    return (
        <div className={'relative h-dvh flex'}>
            <div className="container max-w-screen-xl mx-auto flex justify-center items-center space-x-8">
                <div className="flex-1 flex justify-center items-center">
                    <img src={headshot} alt='headshot' className="rounded-xl max-h-screen h-auto w-full max-w-md object-contain"/>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center text-center">
                    <div className="heythere">
                        Hey there,
                    </div>
                    <div className='heythere'>
                        I'm Michael <span style={{color: '#FFB534'}}>Forte</span>
                    </div>
                    <div>
                        <span className='into'>I am into </span><TypingEffect/>
                    </div>
                    <div>
                        <Button 
                        onClick={scrollToAboutme}
                        style={{backgroundColor: "#C1F2B0", border: "#C1F2B0"}}>
                            Learn More 
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}