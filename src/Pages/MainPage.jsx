import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const MainPage = () => {
    return (
        <div>
            <section className='sticky top-0 z-50'>
                <Navbar></Navbar>
            </section>
            <section className='min-h-96'>
                <Outlet></Outlet>
            </section>
            <section>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default MainPage;