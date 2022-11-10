import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import MyReviewRow from './MyReviewRow';

const MyReview = () => {


    const { user, logOut } = useContext(AuthContext);
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch(` https://visa-agency-server.vercel.app/myreview?email=${user?.email}`,
            {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('genius-token')}`
                }
            })

            .then(res => {

                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => setReview(data))
    }, [user?.email, logOut])



    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this review');
        if (proceed) {
            fetch(` https://visa-agency-server.vercel.app/review/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('genius-token')}`
                }
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