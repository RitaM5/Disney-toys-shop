import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import Gallery from '../Gallery/Gallery';

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
        <div>
            <Banner></Banner>
            <div className='my-container'>
                <h1 className='underline underline-offset-4 font-semibold text-2xl text-center'>Gallery</h1>
                <h2 className='mt-4 text-lg text-center'>We make your children happier with the best toys</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-9'>
                    {
                        galleries.map(gallery => <Gallery key={gallery.id} gallery={gallery}></Gallery>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;