import React from 'react';
import Banner from '../Components/Banner';
import RunningCampaigns from '../Components/RunningCampaigns';
import HowItWorks from '../Components/HowItWorks ';
import Testimonials from '../Components/Testimonials ';
import ThemeToggleComponent from '../Components/ThemeToggolComponent';
const Home = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            {/* Theme Toggle */}
            <div className="flex justify-end p-4">
                <ThemeToggleComponent></ThemeToggleComponent>
            </div>

            {/* Banner */}
            <section className="my-2">
                <Banner />
            </section>

            {/* Running Campaign */}
            <section>
                <RunningCampaigns />
            </section>

            {/* How It Works Section */}
            <section>
                <HowItWorks />
            </section>

            {/* Testimonials Section */}
            <section>
                <Testimonials />
            </section>
        </div>
    );
};
// {/* <div>
//     {/* Theme Toggle */}
//     <div className="flex justify-end p-4">
//         <ThemeToggle />
//     </div>
//     {/* banner */}
//     <section className='my-2'>
//         <Banner></Banner>
//     </section>
//     {/* Running Campaign */}
//     <section>
//         <RunningCampaigns></RunningCampaigns>
//     </section>
//     {/* How it Works Section */}
//     <section>
//         <HowItWorks></HowItWorks>
//     </section>
//     {/* Testimonials sections */}
//     <section>
//         <Testimonials></Testimonials>
//     </section>
// </div> */}
export default Home;