import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <img className='w-60' src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/media/507f015a7efd81cec270faf9c4f1aabd.gif" alt="" srcset="" />
                <div className='max-w-md text-center'>
                    <p className='text-2xl font-semibold md:text-3xl my-6'>
                        {error?.message}
                    </p>
                    <Link
                        to='/'
                        className='px-8 my-4 py-3 rounded-md font-semibold text-lg bg-green-600 text-white'
                    >
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;