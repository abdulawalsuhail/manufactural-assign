import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { FcBusinessman } from 'react-icons/fc';


const BusinessSummary = () => {
    return (
        <div class="pt-10">
            <div class="uppercase text-center shadow">
                <h2 class="text-5xl font-bold text-accent">Millions Business Trust Us</h2>
                <p class="text-3xl font-semibold">Try To Understand User Expectation</p>
            </div>
            <div class="stats w-full my-8 shadow p-8">

                <div class="stat p-8">
                    <div class="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div class="stat-title">Total Subscribe</div>
                    <div class="stat-value text-primary">25.6K</div>
                    <div class="stat-desc">21% more than last month</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div class="stat-title">Website View</div>
                    <div class="stat-value text-secondary">2.6M</div>
                    <div class="stat-desc">21% more than last month</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary text-6xl">
                        {/* <div class="avatar online">
                        <div class="w-16 rounded-full">
                            <img src="https://api.lorem.space/image/face?w=128&h=128" />
                        </div>
                    </div> */}
                        <FcBusinessman />
                    </div>
                    <div class="stat-title">Happy Client</div>
                    <div class="stat-value">200+</div>
                    <div class="stat-desc text-secondary">31 tasks remaining</div>
                </div>
                <div class="stat">
                    <div class="stat-figure text-secondary text-6xl">
                        {/* <div class="avatar online">
                        <div class="w-16 rounded-full">
                            <img src="https://api.lorem.space/image/face?w=128&h=128" alt=''/>
                        </div>
                    </div> */}
                        <AiFillLike />
                    </div>
                    <div class="stat-title">Feedbacks</div>
                    <div class="stat-value">432+</div>
                    <div class="stat-desc text-secondary">31 tasks remaining</div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;