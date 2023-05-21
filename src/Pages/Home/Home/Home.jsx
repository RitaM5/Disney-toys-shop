import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import Gallery from '../Gallery/Gallery';
import baby1 from '../../../assets/baby-1.jpg';
import baby2 from '../../../assets/baby-2.jpg'
import dolls from '../../../assets/dolls.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ShopCategory from '../ShopCategory/ShopCategory';
import Testimonial from '../Testimonial/Testimonial';
const Home = () => {
    const galleries = [
        { id: 1, image: "https://i.ibb.co/Tgy6tCt/princess-1.jpg" },
        { id: 2, image: "https://i.ibb.co/jZqftRS/princess-2.jpg" },
        { id: 3, image: "https://i.ibb.co/djZT1CN/princess-7.jpg" },
        { id: 4, image: "https://i.ibb.co/CJz5zhh/princess-4.jpg" },
        { id: 5, image: "https://i.ibb.co/Y7C83t1/frozen-1.jpg" },
        { id: 6, image: "https://i.ibb.co/7YPLVQb/frozen-7.jpg" },
        { id: 7, image: "https://i.ibb.co/LP9frHz/frozen-3.jpg" },
        { id: 8, image: "https://i.ibb.co/rZZ7TP8/frozen-6.jpg" },
        { id: 9, image: "https://i.ibb.co/zb7thCN/ani-1.jpg" },
        { id: 10, image: "https://i.ibb.co/D4PjNJX/ani-2.jpg" },
        { id: 11, image: "https://i.ibb.co/FzR4x0j/ani-3.jpg" },
        { id: 12, image: "https://i.ibb.co/6yKynDn/ani-4.jpg" },
    ]
    return (
        <div className='bg-pink-100'>
            <Banner></Banner>
            <div className='my-container mx-auto text-center'>
                <h1 className='underline underline-offset-4 font-semibold text-2xl text-center'>Gallery</h1>
                <h2 className='my-5 text-lg text-center'>We make your children happier with the best toys</h2>
                <div data-aos="fade-up"
                    data-aos-duration="1000" className=' mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-9'>
                    {
                        galleries.map(gallery => <Gallery key={gallery.id} gallery={gallery}></Gallery>)
                    }
                </div>
            </div>
            <div className=' my-container'>
                <ShopCategory></ShopCategory>
            </div>
            <div className='grid gap-20 grid-cols-1 md:grid-cols-1 lg:grid-cols-2  my-container'>
                <div data-aos="zoom-out-right" data-aos-duration="1000">
                    <img className='rounded-2xl hover:scale-125 ease-in-out duration-500' src={baby2} alt="" srcset="" />
                </div>
                <div className=' space-y-5' data-aos="zoom-out-left" data-aos-duration="1000">
                    <p className='font-semibold'>CREATIVE APPROACH</p>
                    <h1 className='text-4xl font-semibold'>We help you take care of the kids</h1>
                    <p className='text-lg'>Not only do we sell toys, but we also try to make sure that your children are safe playing, learning, and having fun!</p>
                    <img className='rounded-2xl mt-3' src={baby1} alt="" srcset="" />
                </div>
            </div>
            <div className='my-container'>
                <div data-aos="zoom-in-up" data-aos-duration="1000" className='grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x my-12'>
                    <div className='inline-flex items-center w-full gap-3'>
                        <img src="https://img.icons8.com/external-outline-juicy-fish/64/external-cost-digital-nomad-outline-outline-juicy-fish.png" alt="external-cost-digital-nomad-outline-outline-juicy-fish" />
                        <span>
                            <p className='text-lg font-semibold'>Best Prices</p>
                            <p>Affordable</p>
                        </span>
                    </div>
                    <div className='inline-flex items-center w-full gap-3'>
                        <img src="https://img.icons8.com/material-rounded/64/secured-file.png" alt="secured-file" />
                        <span>
                            <p className='text-lg font-semibold'>Buyers Protection</p>
                            <p>Guarantee</p>
                        </span>
                    </div>
                    <div className='inline-flex items-center w-full gap-3'>
                        <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/external-offer-ecommerce-kiranshastry-lineal-kiranshastry.png" alt="external-offer-ecommerce-kiranshastry-lineal-kiranshastry" />
                        <span>
                            <p className='text-lg font-semibold'>Fast Shippment</p>
                            <p>Express</p>
                        </span>
                    </div>
                    <div className='inline-flex items-center w-full gap-3'>
                        <img src="https://img.icons8.com/ios/64/technical-support.png" alt="technical-support" />
                        <span>
                            <p className='text-lg font-semibold'>Live Support</p>
                            <p>Online</p>
                        </span>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <img className='w-full' src={dolls} alt="" srcset="" />
               </div>
            <div className='bg-blue-900 p-10'>
                <Testimonial></Testimonial>
            </div>
        </div>
    );
};

export default Home;