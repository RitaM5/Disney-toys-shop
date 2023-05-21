import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
const CategoryCard = ({ toy }) => {
    const { _id, toy_name, price, ratings, toy_img } = toy;
    const notify = () =>{
        toast("You have to log in first to view details!")
    };
    return (
        <div className="card w-full bg-lime-100 shadow-xl">
            <figure><img className='mt-5 rounded-xl hover:scale-125 ease-in-out duration-500 ' src={toy_img} alt="dolls" /></figure>
            <div className="card-body text-left">
                <h2 className="card-title">
                    {toy_name}
                    <div className="badge badge-secondary">name</div>
                </h2>
                <p><span className='font-semibold'>Price:</span> {price} $</p>
                <p>
                    <Rating className=' text-orange-300'
                        placeholderRating={ratings}
                        readonly
                        emptySymbol={<FaRegStar ></FaRegStar>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                </p>
                <div className="card-actions justify-end">
                    <Link onClick={notify} to={`/details/${_id}`} state={toy?.toy_name}>
                        <div className="badge badge-outline px-4 py-4 btn-primary font-semibold">Details</div>
                    </Link>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;