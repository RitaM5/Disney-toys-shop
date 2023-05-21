import React from 'react';
import img2 from '../../../assets/bg-2.jpeg'
import img4 from '../../../assets/bg-4.jpeg'
const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="flex justify-center text-center w-full items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute left-0 top-0 h-full">
                    <div className='text-white text-center space-y-7 p-4' data-aos="zoom-in" data-aos-duration="2000">
                        <h2 className='text-6xl font-semibold'>
                            Pick the best toy<br />
                            for your kid
                        </h2>
                        <p className=''>We offer a premium sevice, whether you are shopping at one of our flagship stores or via our website!</p>
                        <button className="btn btn-outline btn-secondary">Discover Now</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div data-aos="zoom-in" data-aos-duration="2000" className="flex justify-center w-full items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute left-0 top-0 h-full">
                    <div className='text-white text-center space-y-7 p-4'>
                        <h2 className='text-6xl font-semibold'>
                            Get a bonus after<br />
                            the first order!
                        </h2>
                        <p className=''>The best offers for regular customer, including free shipping on your childrens birthdays!</p>
                        <button className="btn btn-outline btn-secondary">Discover Now</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src='https://i.ibb.co/4jBqysR/bg-1.jpg' className="w-full" />
                <div data-aos="zoom-in" data-aos-duration="2000" className="flex justify-center w-full items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute left-0 top-0 h-full">
                    <div className='text-white text-center space-y-7 p-4'>
                        <h2 className='text-6xl font-semibold'>
                            Pick the best toy<br />
                            for your kid
                        </h2>
                        <p className=''>We offer a premium sevice, whether you are shopping at one of our flagship stores or via our website!</p>
                        <button className="btn btn-outline btn-warning">Discover Now</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;