import React from 'react';

const AddService = () => {




    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.firstName.value;
        const image_url = form.img.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const details = form.message.value;

        const service = {
            serviceName: name,
            price,
            rating,
            image_url,
            details
        }



        fetch('http://localhost:5000/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Service Posted successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));

    }

    return (
        <div>

            <form onSubmit={handlePlaceOrder}>
                <h2 className="text-5xl text-center text-sky-100">Add a service</h2>
                <div className='grid grid-cols-1 mt-5 mx-10 gap-4'>
                    <input name="serviceName" type="text" placeholder="service Name" className="input input-ghost w-full  input-bordered" />
                    <input name="price" type="text" placeholder="price" className="input input-ghost w-full  input-bordered" />
                    <input name="img" type="" placeholder="Image link" className="input input-ghost w-full  input-bordered" />
                    <input name="rating" type="text" placeholder="rating" className="input input-ghost w-full  input-bordered" required />
                    <textarea name="message" className="textarea textarea-bordered  h-24 w-full" placeholder="Details" required></textarea>
                </div>

                <div className="form-control my-6 mx-36">
                    <input className='btn btn-primary' type="submit" value="Add Your Service" />
                </div>
            </form>
        </div>
    );
};

export default AddService;