import React from 'react';
import Banner from '../Components/Banner';
import RunningCampaigns from '../Components/RunningCampaigns';
import HowItWorks from '../Components/HowItWorks ';
import Testimonials from '../Components/Testimonials ';
const Home = () => {
    return (
        <div>
            {/* banner */}
            <section className='my-2'>
                <Banner></Banner>
            </section>
            {/* Running Campaign */}
            <section>
                <RunningCampaigns></RunningCampaigns>
            </section>
            {/* How it Works Section */}
            <section>
                <HowItWorks></HowItWorks>
            </section>
            {/* Testimonials sections */}
            <section>
                <Testimonials></Testimonials>
            </section>
        </div>
    );
};

export default Home;