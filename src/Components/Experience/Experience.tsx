import React from 'react';
import { Timeline } from '../Timeline/Timeline'

export function Experience() {

    return (
        <div className={'relative h-dvh flex px-0'}>
            <div style={{fontFamily: 'CustomPixelFont'}} className="container max-w-screen-xl mx-auto flex flex-col justify-start md:justify-center items-center text-2xl space-y-8">
                <Timeline/>
            </div>
        </div>
    )
}