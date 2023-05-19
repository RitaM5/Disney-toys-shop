import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
const Details = () => {
    const product = useLoaderData();
    const { _id, displayName, toy_name, category, price, quantity, toy_img, ratings, email, description } = product;
    return (
        <div>
            <Banner></Banner>
            <div className='my-container mx-auto'>
                <h1 className='underline underline-offset-4 font-semibold text-2xl text-center my-8'>Toy Details</h1>
                <div className="card card-side bg-lime-200 w-full shadow-xl grid lg:grid-cols-12 sm:grid-cols-1" data-aos="fade-down-left" data-aos-duration="1000">
                    <div className='lg:col-span-3 flex justify-center items-center lg:origin-center mx-auto'>
                        <figure><img src={toy_img} alt="" className='rounded-lg w-full hover:scale-75' /></figure>
                    </div>
                    <div className="card-body lg:col-span-9">
                        <div className='flex-shrink-0 w-full relative'>
                            <h1 className="text-3xl font-semibold">{toy_name}</h1>
                            <p><span className='font-semibold'>category:</span> {category}</p>
                            <p><span className='font-semibold'>descriptions:</span> {description}</p>
                            <p><span className='font-semibold'>quantity:</span> {quantity}</p>
                            <p><span className='font-semibold'>price:</span> {price}</p>
                            <p><span className='font-semibold'>saller-name:</span> {displayName}</p>
                            <p><span className='font-semibold'>email:</span> {email}</p>
                            <p>
                                <Rating className=' text-orange-300'
                                    placeholderRating={ratings}
                                    readonly
                                    emptySymbol={<FaRegStar ></FaRegStar>}
                                    placeholderSymbol={<FaStar></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}
                                ></Rating>
                            </p>
                            <button className="btn-secondary my-2 px-4 py-1 rounded-3xl font-semibold">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
