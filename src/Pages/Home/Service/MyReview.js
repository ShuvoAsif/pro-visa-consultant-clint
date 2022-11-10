import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import MyReviewRow from './MyReviewRow';

const MyReview = () => {


    const { user } = useContext(AuthContext);
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])



    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this review');
        if (proceed) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = review.filter(rbw => rbw._id !== id);
                        setReview(remaining);
                    }
                })
        }
    }



    return (
        <div>
            {
                review.map(review => <MyReviewRow
                    key={review._id}
                    review={review}
                    handleDelete={handleDelete}
                ></MyReviewRow>)
            }
        </div>
    );
};

export default MyReview;