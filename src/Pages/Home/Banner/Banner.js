import React from 'react';
import imga from '../../../images/img3.jpg';
import imgae from '../../../images/visac.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="relative">
                <div className='banner-img'>
                    <img src={imga} alt="" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-2/4">
                    <h1 className='text-4xl font-bold text-white  hidden lg:flex leading-normal'>I am a trusted visa consultant<br /> who can handle your case and <br />i will assist you with for your visa application.</h1>
                </div>
            </div>
            <div className='my-10 '>
                <h1 className="text-3xl font-bold text-center my-5 text-sky-100">The countries i prefer</h1>
                <img src={imgae} alt="" />
            </div>
            <div className='flex justify-around text-center my-36'>
                <div className="">
                    <h1 className='text-5xl font-bold  text-sky-100'>315</h1>
                    <h3 className='text-3xl font-bold  text-sky-100'>I have work with clints</h3>
                </div>
                <div className="">
                    <h1 className='text-5xl font-bold  text-sky-100'>91%</h1>
                    <h3 className='text-3xl font-bold  text-sky-100'>Successfull visa process rate</h3>
                </div>
                <div className="">
                    <h1 className='text-5xl font-bold  text-sky-100'>72 Hrs</h1>
                    <h3 className='text-3xl font-bold  text-sky-100'>Application approval Time</h3>
                </div>
            </div>
        </div>
    );
};

export default Banner;