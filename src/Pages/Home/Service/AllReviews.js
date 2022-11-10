import React, { useEffect, useState } from 'react';
import AllReviewCard from './AllReviewCard';

const AllReviews = () => {

    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch(' https://visa-agency-server.vercel.app/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [review]);
    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-3xl font-bold text-sky-100">Reviews</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    review.map(review => <AllReviewCard
                        key={review._id}
                        review={review}
                    ></AllReviewCard>)
                }
            </div>

        </div>
    );
};

export default AllReviews;