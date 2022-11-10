import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Review = () => {

    const { _id, title, price } = useLoaderData();

    const { user } = useContext(AuthContext);


    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const img = form.img.value;
        const phone = form.phone.value;
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            img,
            phone,
            message
        }



        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`

            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review Posted successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));



    }
    return (
        <div>
            <form onSubmit={handlePlaceOrder}>
                <h2 className="text-5xl text-center text-sky-100">Add your review on {title} service</h2>
                <div className='grid grid-cols-1 mt-5 mx-10 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                    <input name="img" type="" placeholder="Image link" className="input input-ghost w-full  input-bordered" />
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                    <textarea name="message" className="textarea textarea-bordered  h-24 w-full" placeholder="Your Review" required></textarea>
                </div>

                <div className="form-control my-6 mx-36">
                    <input className='btn btn-primary' type="submit" value="Submit Your Review" />
                </div>
            </form>

        </div>
    );
};

export default Review;