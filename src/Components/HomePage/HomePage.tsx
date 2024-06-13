import React from 'react';
import headshot from './headshot.jpg'
import { TypingEffect } from '../TypingEffect/TypingEffect';

export function HomePage() {

    return (
        <div className={'relative min-h-screen flex bg-red-300'}>
            <div className="container max-w-screen-xl mx-auto flex justify-center items-center space-x-8">
                <div className="flex-1 flex justify-center items-center">
                    <img src={headshot} alt='headshot' className="rounded-xl max-h-screen h-auto w-full max-w-md object-contain"/>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <TypingEffect/>
                </div>
            </div>
        </div>
    )
}