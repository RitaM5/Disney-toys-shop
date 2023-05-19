import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Gallery = ({ gallery }) => {
    const { image } = gallery;
    return (
        <>
            <div className="card card-compact w-full py-9 bg-base-100 shadow-xl hover:-translate-y-7 transition ease-in-out delay-350" 
            >
                <LazyLoadImage
                    className='w-72 h-72 mx-auto' src={image} alt=""
                    effect="blur"
                />
            </div>
        </>

    );
};

export default Gallery;