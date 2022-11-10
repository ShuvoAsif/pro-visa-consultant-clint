import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import passport from '../../../../../images/passport.png';
import { AuthContext } from '../../../../../context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);


    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
        <li className='font-semibold'><Link to='/myreview'>My Review</Link></li>
        {
            user ?
                <li className='font-semibold'><Link to='/addservice'>Add Service</Link></li>
                :
                <></>
        }
        {
            user ?
                <li onClick={logOut} className='font-semibold btn btn-outline btn-light'><Link to='/login'>Log out</Link></li>
                :
                <li className='font-semibold btn btn-outline btn-light'><Link to='/login'>Log in</Link></li>
        }
    </>


    return (
        <div>
            <div className="navbar h-20 bg-gray-500 text-white px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <img className="w-10" src={passport} alt="" />
                    <a href="/" className="font-bold normal-case text-2xl text-sky-100">Pro Visa Consultant</a>
                </div>
                <div className="navbar-end  hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;