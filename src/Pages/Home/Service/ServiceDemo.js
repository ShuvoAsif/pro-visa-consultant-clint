import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceDemoCard from './ServiceDemoCard';

const ServiceDemo = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(' https://visa-agency-server.vercel.app/servidemo')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className=''>

            <div className='text-center mb-4'>
                <p className="text-3xl font-bold text-sky-100">Services</p>
                <p className='text-2xl font-bold text-sky-100'>The services i provide </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceDemoCard
                        key={service._id}
                        service={service}
                    ></ServiceDemoCard>)
                }
            </div>
            <div className='flex'>
                <div className='justify-center my-5 mx-auto '>
                    <Link to={`/service`}>
                        <button className="btn btn-primary">View All Service</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDemo;