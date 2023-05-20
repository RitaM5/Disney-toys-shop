import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import MyToysRows from './MyToysRows';
import { FiArrowDown } from 'react-icons/fi';
const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [addToys, setAddToys] = useState([]);
    const [sortData, setSortData] = useState(false)
    const url = `https://disney-dolls-server.vercel.app/sellerToys?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAddToys(data)
            }
            )
    }, [url]);
    const sortToysData = () => {
        setSortData(true)
        console.log(sortData);
    }
    return (
        <div className=' bg-gray-900'>
            <div className='my-container'>
                <h1 className='text-center text-2xl font-semibold underline underline-offset-4 mt-3 text-white'>My Tyos</h1>
                <div className="w-full my-8 rounded p-4">
                    <table className="overflow-x-auto overflow-hidden table w-full">
                        {/* head */}
                        <thead className=''>
                            <tr className='text-center'>
                                <th>No</th>
                                <th>Seller Name</th>
                                <th>Toys Name</th>
                                <th>IMAGE</th>
                                <th>CATEGORY</th>
                                <th>QUANTITY</th>
                                <th className='inline-flex items-center'>PRICE<FiArrowDown onClick={sortToysData} className='ml-1' /></th>
                                <th>DETAILS</th>
                                <th>UPDATE/DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                addToys.map((toy, index) => <MyToysRows
                                    key={toy._id}
                                    toy={toy}
                                    index={index}
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