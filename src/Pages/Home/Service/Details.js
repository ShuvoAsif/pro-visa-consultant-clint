import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AllReviews from './AllReviews';

const Details = () => {

    const { _id, title, image_url, price, rating, details } = useLoaderData();

    return (
        <div className=''>
            <div className="card-actions justify-center my-5 ">
                <div className="card w-7/12 bg-base-100 shadow-xl">
                    <figure><img className='h-3/5' src={image_url} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {title}
                        </h2>
                        <p>{details}</p>
                        <div className="card-actions justify-center">
                            <div className="badge badge-outline">Price: {price}</div>
                            <div className="badge badge-outline">Ratings: {rating}</div>
                        </div>
                        <div className="card-actions justify-center">
                            <Link to={`/review/${_id}`}>
                                <button className="btn btn-primary">Review</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <AllReviews></AllReviews>
        </div>
    );
};

export default Details;