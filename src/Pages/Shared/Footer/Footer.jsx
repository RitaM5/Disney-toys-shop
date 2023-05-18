import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { RiWhatsappFill } from 'react-icons/ri';
import { FiInstagram } from 'react-icons/fi';
const Footer = () => {
    return (
        <div className='bg-gray-800 text-center py-7'>
              <img className='mx-auto' src="https://img.icons8.com/external-others-inmotus-design/100/external-Doll-toys-others-inmotus-design.png" alt="external-Doll-toys-others-inmotus-design"/>
            <span className='text-yellow-500 text-3xl font-bold'>DISNEY</span><span className='text-2xl font-semibold text-green-700'>SHOP</span>
            <p className='text-white text-sm'>TOYS AND GAMES</p>
            <div>
                <BsFacebook/>
                <FiInstagram/>
                <RiWhatsappFill/>
            </div>
            <div className='mt-4 grid gap-28 grid-cols-1 md:grid-cols-2 w-96 mx-auto'>
                <div className='text-white text-left'>
                    <h1 className='my-2 text-2xl font-semibold'>Address</h1>
                    <p>Bangladesh —</p>
                    <p>785 15h Street, Office 478</p>
                    <p>Rangpur, De 105</p>
                </div>
                <div className='text-white text-left'>
                    <h1 className='my-2 text-2xl font-semibold'>Say Hello</h1>
                    <p>disney@email.com</p>
                    <p>+1 840 841 25 69</p>
                </div>
            </div>
            <hr className='my-8'/>
            <p className='text-white'>DISNEYshop © 2023. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;
//https://junotoys.themerex.net/