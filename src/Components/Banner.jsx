import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Banner = () => {
    return (
        <div className="banner-slider bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                autoplay={{delay: 2000}}
                pagination={{ clickable: true }}
                loop={true}
                spaceBetween={50}
                slidesPerView={1}
                className="mySwiper"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="slide-content">
                        <img
                            src="https://i.ibb.co.com/1myJgH9/attraction-7225930-1280.jpg"
                            alt="Slide 1"
                            className="w-full max-h-[400px]"
                        />
                        <div className="slide-text">
                            <h2 className="text-3xl font-bold text-center">Welcome to Crowdfunding!</h2>
                            <p className="text-center text-lg">Your dreams, our support.</p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="slide-content">
                        <img
                            src="https://i.ibb.co.com/Th48vWZ/crowd-3127293-1280.jpg"
                            alt="Slide 2"
                            className="w-full max-h-[400px]"
                        />
                        <div className="slide-text">
                            <h2 className="text-3xl font-bold text-center">Join Our Community</h2>
                            <p className="text-center text-lg">Together we can achieve more.</p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="slide-content">
                        <img
                            src="https://i.ibb.co.com/bJcSy2K/crowdfunding-3158320-1280.png"
                            alt="Slide 3"
                            className="w-full max-h-[400px]"
                        />
                        <div className="slide-text">
                            <h2 className="text-3xl font-bold text-center">Start a Campaign</h2>
                            <p className="text-center text-lg">Turn your ideas into reality!</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
