import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    const { user, setUser, signOutUser } = useContext(AuthContext)
    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                setUser(null)
            })
            .catch(err => {
                console.log("ERROR", err);
            })
    }
    const links = <>
        <NavLink to='/home'><a>Home</a></NavLink>
        <NavLink to='/all-campaign'><a>All Campaign</a></NavLink>
        {
            user && <div className='flex flex-col md:flex-row md:gap-4'>
                <NavLink to='/add-campaign'><a>Add New Campaign</a></NavLink>
                <NavLink to='/my-campaign'><a>My Campaign</a></NavLink>
                <NavLink to='/my-donation'><a>My Donations</a></NavLink>
            </div>
        }
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/home' className="btn btn-ghost text-xl">Crowdcube</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu gap-4 menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="relative inline-block group">
                            {
                                user.photoURL ? <img
                                    src={user.photoURL}
                                    alt={user.displayName}
                                    className="w-10 h-10 rounded-full cursor-pointer"
                                /> : <FaUserCircle className='h-8 w-8' />
                            }
                            <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 hidden group-hover:block bg-gray-800 text-white text-sm py-1 px-3 rounded shadow-lg whitespace-nowrap z-10">
                                {user.displayName}
                            </div>
                            <button
                                className="absolute left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block bg-red-500 text-white text-sm px-4 py-1 rounded shadow-lg z-10"
                                style={{ top: "20px" }}
                                onClick={handleLogOut}
                            >
                                Log out
                            </button>
                        </div>
                        : <Link to='/login' className="btn">Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;