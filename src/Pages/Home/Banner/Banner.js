import React from 'react';
import imga from '../../../images/img3.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="relative">
            <div className='banner-img'>
                <img src={imga} alt="" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-2/4">
                <h1 className='text-4xl font-bold text-white  hidden lg:flex leading-normal'>I am a trusted visa consultant<br /> who can handle your case and <br />i will assist you with for your visa application.</h1>
            </div>
        </div>
    );
};

export default Banner;