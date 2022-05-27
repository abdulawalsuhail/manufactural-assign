import React from 'react';
import Driller from '../../images/product/driller.jpg'

const Banner = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={Driller} alt="" class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold text-accent">AAS Electronics manufacturer tools!</h1>
                    <p class="py-6 text-xl">The Electronics product prepares individuals to become technicians who design, build, install, test, troubleshoot, repair, and modify developmental and production electronic components, equipment, and systems such as industrial/ computer controls, manufacturing systems, communication systems, and power electronic systems.Electronics engineering technician, field service technician, maintenance technician, electronic tester, electronic systems integrator, bench technician, and production control technician. </p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;