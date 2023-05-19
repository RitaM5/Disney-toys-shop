import React from 'react';
import Marquee from "react-fast-marquee";
const ShopCategory = () => {
    return (
        <div className='my-container text-center'>
            <h1 className='font-semibold underline underline-offset-4 text-2xl text-center my-4'>Shop By Category</h1>
            <Marquee speed={100}>
                <div className='grid gap-2 grid-cols-1 md:grid-cols-3 items-center mt-8'>
                    <button className="btn rounded-3xl btn-active btn-primary">Disney Princes</button>
                    <button className="btn rounded-3xl btn-active btn-secondary">Frozen Dolls</button>
                    <button className="btn rounded-3xl text-white btn-active btn-accent">Animation Characters</button>
                </div>
            </Marquee>

        </div>
    );
};

export default ShopCategory;