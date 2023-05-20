import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const AddToys = () => {
    // const toys = useLoaderData();
    // console.log(toys);
    // const { _id } = toys;
    const { user } = useContext(AuthContext);
    const handleAddToys = event => {
        event.preventDefault();
        const form = event.target;
        const toyName = form.name.value;
        const displayName = user?.displayName;
        const email = user?.email;
        const toyImg = form.photo.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        console.log(toyName, email, displayName, toyImg, category, quantity, description, price, ratings);
        const addInfo = {
            displayName,
            email,
            toy_name: toyName,
            toy_img: toyImg,
            category: category,
            quantity: quantity,
            description: description,
            price: price,
            ratings: ratings
        }

        fetch('https://disney-dolls-server.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.indsertedId) {
                    alert('toys add successfully')
                }
                form.reset();
            })
    }
    return (
        <div className='my-container'>
            <h2 className='text-center text-2xl font-semibold underline underline-offset-4 mt-3'>Add Toys</h2>
            <div className='card w-full bg-base-200 shadow-xl p-6 my-10'>
                <form onSubmit={handleAddToys}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Seller Name :</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Seller Email :</span>
                            </label>
                            <input type="text" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Toy Name :</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Toy Image :</span>
                            </label>
                            <input type="text" name='photo' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Category :</span>
                            </label>
                            <input type="text" name='category' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Description :</span>
                            </label>
                            <input type="text" name='description' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Price :</span>
                            </label>
                            <input type="number" placeholder="$" name='price' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Quantity :</span>
                            </label>
                            <input type="number" name='quantity' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Ratings :</span>
                            </label>
                            <input type="number" name='ratings' className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control text-center mx-auto w-56 mt-6">
                        <input className="btn btn-success text-white btn-block" type="submit" value="Add Toys" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToys;