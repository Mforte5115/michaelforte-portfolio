import React from 'react';
import { Carousel } from 'react-bootstrap';
import pill from './Pillfilling.jpg'
import grippers from './grippers.jpg'

export function Projects() {

    return (
        <div className={'relative h-dvh flex px-0'}>
            <div  style={{fontFamily: 'CustomPixelFont'}} className="container max-w-screen-xl mx-auto flex flex-col justify-start md:justify-center items-center text-2xl space-y-8">
                <Carousel>
                    <Carousel.Item>
                        <img 
                        src={pill}
                        alt='Pill bottle filling'
                        />
                        <Carousel.Caption>
                            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px', borderRadius: '5px' }} className='text-white text-xl'>Pill Bottle Filling</div>
                            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px', borderRadius: '5px' }} className='text-white text-sm'>A machine that fills and caps empty pill bottles</div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        src={grippers}
                        alt='Gripper assembly'
                        />
                        <Carousel.Caption>
                        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px', borderRadius: '5px' }} className='text-white text-xl'>Universal Gripper Mounting</div>
                        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px', borderRadius: '5px' }} className='text-white text-sm'>Universal mounting bracket system for pick and place robotics</div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}