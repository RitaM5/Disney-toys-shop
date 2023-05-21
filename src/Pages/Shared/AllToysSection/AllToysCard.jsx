import React from 'react';
import { Link } from 'react-router-dom';

const AllToysCard = ({ product, index }) => {
    const { _id, displayName, toy_name, category, price, quantity, toy_img } = product;
    return (
        <tr className='text-center'>
            <td>
                {index + 1}
            </td>
            <td className='font-semibold'>
                {displayName}
            </td>
            <td className=''>
                {toy_name}
            </td>
            <td>
                <div className="avatar">
                    <div className="rounded w-1/2 h-16 mx-auto">
                        <img className='' src={toy_img} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td className=''>{category}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>
                <Link to={`/details/${_id}`} state={product?.toy_name}>
                    <div className="badge badge-outline px-4 py-4 btn-primary font-semibold">Details</div>
                </Link>
            </td>
        </tr>
    );
};

export default AllToysCard;
/* 

*/