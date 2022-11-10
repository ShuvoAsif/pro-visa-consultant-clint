import React, { useEffect, useState } from 'react';

const MyReviewRow = ({ review, handleDelete }) => {
    const { _id, serviceName, price, message, service } = review;
    const [reviewService, setreviewService] = useState({})

    useEffect(() => {
        fetch(` https://visa-agency-server.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setreviewService(data));
    }, [service])




    return (
        <div className="card-actions justify-center my-5 ">
            <div className="card w-96 bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">Service name: {serviceName}</h2>
                    <h2 className="card-title">Price: {price}</h2>
                    <p>Review: {message}</p>
                    <div className="card-actions justify-end">

                        <div className="avatar">
                            <div className="w-8 rounded">
                                {reviewService?.img &&
                                    <img src={reviewService.img} alt="Tailwind-CSS-Avatar-component" />}
                            </div>
                        </div>
                        <button onClick={() => handleDelete(_id)} className="btn">Delete</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MyReviewRow;