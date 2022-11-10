import React, { useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider/AuthProvider'
import { GoogleAuthProvider } from 'firebase/auth';



const Registration = () => {


    const { createUser, providerLogin, setUser } = useContext(AuthContext);

    const Navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const googleProvider = new GoogleAuthProvider()



    const handleGoogleSignIn = () => {



        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);


                const currentUser = {
                    email: user.email
                }

                console.log(currentUser);

                fetch(' https://visa-agency-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('genius-token', data.token);
                        Navigate(from, { replace: true });

                    });
            })
            .catch(error => console.error(error))
    }



    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();


                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);


                fetch(' https://visa-agency-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('genius-token', data.token);
                        Navigate(from, { replace: true });
                    });
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="hero w-full my-20">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-700 py-20">
                <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" name='password' placeholder="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Sign Up" />
                    </div>
                    <Link onClick={handleGoogleSignIn} className='btn btn-outline btn-light my-3 font-bold' to="/signup"><h1 className='px-1'>Sign Up with</h1><FaGoogle ></FaGoogle> </Link>
                </form>
                <p className='text-center'>Already have an account? <Link className='text-sky-600 font-bold' to="/login">Login</Link> </p>
            </div>
        </div>
    );
};

export default Registration;