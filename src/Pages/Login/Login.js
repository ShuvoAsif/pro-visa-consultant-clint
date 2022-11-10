import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider'
import { FaGoogle } from 'react-icons/fa';



const Login = () => {


    const { login, providerLogin, setUser } = useContext(AuthContext);
    const Navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const googleProvider = new GoogleAuthProvider()


    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
            })
            .catch(error => console.error(error))
    }



    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);

                const currentUser = {
                    email: user.email
                }

                console.log(currentUser);

                fetch('http://localhost:5000/jwt', {
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
            .then(error => console.log(error));
    }


    return (
        <div className="hero w-full my-20">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-700 py-20">
                <h1 className="text-5xl text-center font-bold">Login</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Login" />

                        <Link onClick={handleGoogleSignIn} className='btn btn-outline btn-light my-3 font-bold' to=""><h1 className='px-1'>Log in with</h1><FaGoogle ></FaGoogle> </Link>
                    </div>
                </form>
                <p className='text-center'>Pro Visa Consultant <Link className='text-sky-600 font-bold' to="/signup">Sign Up</Link> </p>
            </div>
        </div>
    );
};

export default Login;