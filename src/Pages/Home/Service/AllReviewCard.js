import React from 'react';

const AllReviewCard = ({ review }) => {
    const { serviceName, message, img, price } = review;

    return (
        <div>
            <div className="card-actions justify-center my-5 ">
                <div className="card w-96 bg-primary text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">Service name: {serviceName}</h2>
                        <h2 className="card-title">Price: {price}</h2>
                        <p>Review: {message}</p>
                        <div className="card-actions justify-end">

                            <div className="avatar">
                                <div className="w-8 rounded">
                                    {img &&
                                        <img src={img} alt="Tailwind-CSS-Avatar-component" />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default AllReviewCard;