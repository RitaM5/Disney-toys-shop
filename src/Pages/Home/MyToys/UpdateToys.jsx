import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateToys = () => {
    const toysData = useLoaderData();
    const { _id, quantity, price, description } = toysData;
    const handleUpdateToys = event => {
        event.preventDefault();
        const form = event.target;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const price = form.price.value;
        console.log(quantity, description, price);
        const updateInfo = {
            quantity: quantity,
            description: description,
            price: price,
        }
        fetch(`https://disney-dolls-server.vercel.app/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('updated successfully');
                }
            })
    }
    return (
        <div className='my-container'>
            <h2 className='text-center text-2xl font-semibold underline underline-offset-4 mt-3'>Update Toys</h2>
            <p className='text-center mt-3'>You can just three data updates</p>
            <div className='card w-full bg-base-200 shadow-xl p-6 my-10'>
                <form onSubmit={handleUpdateToys}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Price :</span>
                            </label>
                            <input type="number" defaultValue={price} placeholder="$" name='price' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Quantity :</span>
                            </label>
                            <input type="number" defaultValue={quantity} name='quantity' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Description :</span>
                            </label>
                            <input type="text" defaultValue={description} name='description' className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control text-center mx-auto w-56 mt-6">
                        <input className="btn btn-success text-white btn-block" type="submit" value="Update Toys" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateToys;