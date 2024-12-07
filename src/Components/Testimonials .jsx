import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Sophia Johnson",
            feedback:
                "This platform made my fundraising process seamless. It's user-friendly and effective!",
            image: "https://i.ibb.co.com/C1pFddQ/johnsonsophia-jd54788-900xx4450-2508-0-174.jpg",
            role: "Campaign Organizer",
        },
        {
            id: 2,
            name: "Liam Smith",
            feedback:
                "I found a cause I truly cared about and donated. The process was so smooth!",
            image: "https://i.ibb.co.com/0q66FDd/images-1.jpg",
            role: "Donor",
        },
        {
            id: 3,
            name: "Olivia Brown",
            feedback:
                "The transparency and ease of use of this platform are simply amazing!",
            image: "https://i.ibb.co.com/102tMdF/1695410986603.jpg",
            role: "Campaign Beneficiary",
        },
    ];

    return (
        <section className="advanced-testimonials py-10 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    What People Say
                </h2>
                <Swiper
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={50}
                    slidesPerView={2}
                    loop={true}
                    className="testimonials-swiper"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-20 h-20 rounded-full mb-4"
                                />
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {testimonial.name}
                                </h3>
                                <p className="text-sm text-gray-500 italic">{testimonial.role}</p>
                                <p className="text-gray-600 text-center mt-4">
                                    "{testimonial.feedback}"
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
