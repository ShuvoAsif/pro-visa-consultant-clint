import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDemoCard = ({ service }) => {
    const { _id, image_url, price, title, details } = service;

    return (
        <div>

            <div className="card w-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image_url} alt="" className="rounded-xl h-56" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>Price: ${price}</p>
                    <p>

                        {
                            details.length > 100 ?
                                <>{details.slice(0, 100) + '...'}</>
                                :
                                <>{details}</>
                        }

                    </p>
                    <div className="card-actions">
                        <Link to={`/details/${_id}`}>
                            <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDemoCard;