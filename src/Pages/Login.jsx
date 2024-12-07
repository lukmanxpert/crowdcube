import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="card mx-auto mt-10 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label flex flex-col gap-2 mt-4">
                        <Link className="label-text-alt link link-hover">Forgot password?</Link>
                        <Link className="label-text-alt link link-hover">Don't have account? <Link to='/register' className='text-red-500'>Register</Link></Link>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;