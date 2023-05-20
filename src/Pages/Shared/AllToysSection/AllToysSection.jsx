import React, { useEffect, useState } from 'react';
import AllToysCard from './AllToysCard';
const AllToysSection = () => {
    const [products, setProducts] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        fetch('https://disney-dolls-server.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, []);
    const handleSearch = () => {
        fetch(`https://disney-dolls-server.vercel.app/toysSearch/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }
    return (
        <div>
            <h1 className='font-semibold underline underline-offset-4 text-2xl text-center my-8'>All Toys</h1>
            <div className='text-center'>
                <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
                <button onClick={handleSearch} className="btn btn-outline btn-secondary ml-2">Search</button>
            </div>
            <div data-aos="fade-up"
                data-aos-duration="2000" className='my-10 grid gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                {
                    products.map(product => <AllToysCard
                        key={product._id}
                        product={product}
                    ></AllToysCard>)
                }
            </div>
        </div>
    );
};

export default AllToysSection;