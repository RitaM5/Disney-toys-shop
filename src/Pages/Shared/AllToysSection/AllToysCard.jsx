import React from 'react';

const AllToysCard = ({ product }) => {
    console.log(product);
    const { displayName, toy_name, category, price, quantity, toy_img } = product;
    return (
        <div className="card w-96 bg-lime-100 shadow-xl">
            <figure><img className='mt-5 rounded-xl hover:scale-125 ease-in-out duration-500 ' src={toy_img} alt="dolls" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {displayName}
                    <div className="badge badge-secondary">seller</div>
                </h2>
                <p><span className='font-semibold'>Toy-Name:</span> {toy_name}</p>
                <p><span className='font-semibold'>Category:</span> {category}</p>
                <p><span className='font-semibold'>Quantity:</span> {quantity}</p>
                <p><span className='font-semibold'>Price:</span> {price} $</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                </div>
            </div>
        </div>
    );
};

export default AllToysCard;