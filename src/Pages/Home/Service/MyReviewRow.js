import React, { useEffect, useState } from 'react';

const MyReviewRow = ({ review, handleDelete }) => {
    const { _id, serviceName, price, message, service } = review;
    const [reviewService, setreviewService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setreviewService(data));
    }, [service])




    return (
        <div>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                reviewService?.img &&
                                <img src={reviewService.img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                    </div>
                </div>
            </td>
            <td>
                {price}
            </td>
            <td>{message}</td>
        </div >
    );
};

export default MyReviewRow;