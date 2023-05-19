import React from 'react';
import { Link } from 'react-router-dom';

const AllToysCard = ({ product }) => {
    const { _id, displayName, toy_name, category, price, quantity, toy_img } = product;
    return (
        <div className="card w-full bg-lime-100 shadow-xl">
            <figure><img className='mt-5 rounded-xl hover:scale-125 ease-in-out duration-500 ' src={toy_img} alt="dolls" /></figure>
            <div className="card-body text-left">
                <h2 className="card-title">
                    {displayName}
                    <div className="badge badge-secondary">seller</div>
                </h2>
                <p><span className='font-semibold'>Toy-Name:</span> {toy_name}</p>
                <p><span className='font-semibold'>Category:</span> {category}</p>
                <p><span className='font-semibold'>Quantity:</span> {quantity}</p>
                <p><span className='font-semibold'>Price:</span> {price} $</p>
                <div className="card-actions justify-end">
                    <Link to ={`/details/${_id}`} state={product?.toy_name}>
                        <div className="badge badge-outline px-4 py-4 btn-primary font-semibold">Details</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllToysCard;