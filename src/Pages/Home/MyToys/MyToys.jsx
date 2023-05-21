import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import MyToysRows from './MyToysRows';
const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [addToys, setAddToys] = useState([]);
    const [sort, setSort] = useState(true);
    const url = `https://disney-dolls-server.vercel.app/sellerToys?email=${user?.email}&sort=true`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAddToys(data)
            }
            )
    }, [url]);
    const handleSort = () => {
        setSort(!sort)
        console.log(sort);
    }
    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete');
        if (proceed) {
            fetch(`https://disney-dolls-server.vercel.app/product/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = addToys.filter(addToy => addToy._id !== id);
                        setAddToys(remaining);
                    }
                })
        }
    }
    return (
        <div className=' bg-pink-100'>
            <div className='my-container'>
                <h1 className='text-center text-2xl font-semibold underline underline-offset-4 mt-3'>My Tyos</h1>
                <p className='text-center mt-4'>These are the toys you addedd, which you added to sell !</p>
                <button onClick={handleSort}>sort by</button>
                <div data-aos="fade-up"
                    data-aos-duration="1000" className=" my-8 rounded p-4 overflow-x-auto">
                    <table className=" table w-full">
                        {/* head */}
                        <thead className=''>
                            <tr className='text-center'>
                                <th className=''>No</th>
                                <th>SELLER NAME</th>
                                <th>TOYS NAME</th>
                                <th>IMAGE</th>
                                <th>CATEGORY</th>
                                <th>QUANTITY</th>
                                <th>PRICE</th>
                                <th>DETAILS</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                addToys.map((toy, index) => <MyToysRows
                                    key={toy._id}
                                    toy={toy}
                                    index={index}
                                    handleDelete={handleDelete}
                                ></MyToysRows>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;