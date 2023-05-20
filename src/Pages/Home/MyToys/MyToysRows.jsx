import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
const MyToysRows = ({ toy, index }) => {
    const { _id, toy_name, toy_img, category, quantity, price, description, displayName } = toy;
    return (
        <tr className='text-center'>
            <td>
                {index + 1}.
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
                {description}
            </td>
            <td>
                <button className=' bg-green-600 px-3 py-1 font-lg rounded-2xl text-white text-sm'>Edit</button>
                <button className='ml-4 bg-gray-300 p-2 rounded-full'><RiDeleteBinLine /></button>
            </td>
        </tr>
    );
};

export default MyToysRows;