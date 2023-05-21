import React from 'react';

const Testimonial = () => {
    return (
        <div data-aos="fade-up"
            data-aos-duration="1000" className='my-container grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6'>
            <div className=" w-full">
                <div className="text-white card-body space-y-2">
                    <h2 className="card-title">TESTIMONIALS</h2>
                    <p className='text-3xl font-semibold'>What Our Clients Say About Us</p>
                    <p className=''>We appreciate your kind and honest feedback and invite you to our amazing store.</p>
                    <div className="card-actions">
                        <button className="btn bg-pink-600">About Us</button>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-full bg-base-100 shadow-xl p-6 hover:-translate-y-2 transition ease-in-out delay-350">
                <div className="card-body">
                    <h2 className="card-title">Not only do the toys make our children squeal with joy, but the sales team is awesome!</h2>
                    <div className="mt-5 card-actions inline-flex items-center gap-3">
                        <img className='w-28 rounded-full' src="https://i.ibb.co/6X6Fs4Y/seller-5.jpg" alt="" srcset="" />
                        <div>
                            <p className='text-lg font-semibold'>Rehnuma Khanam</p>
                            <span>CEO, Business Co.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-full bg-base-100 shadow-xl p-6 hover:-translate-y-2 transition ease-in-out delay-350">
                <div className="card-body">
                    <h2 className="card-title">What a great store for the entire family! My kids love this place because of the toys!</h2>
                    <div className="mt-5 card-actions inline-flex items-center gap-3">
                        <img className='w-28 rounded-full' src="https://i.ibb.co/sCMY7Dt/seller-1.jpg" alt="" srcset="" />
                        <div>
                            <p className='text-lg font-semibold'>Murtashim Khan</p>
                            <span>CEO, Business Co.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;