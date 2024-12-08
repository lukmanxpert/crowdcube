import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const Login = () => {
    const { setUser, signInUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
            return toast.error("Password must have at least 6 character")
        }
        signInUser(email, password)
            .then(res => {
                setUser(res.user);
                toast.success("Successfully Logged In")
                form.reset();
                navigate('/')
            })
            .catch(err => {
                toast.error('Wrong email or password', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            })
    }
    return (
        <div className="card mx-auto mt-10 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    <label className="label flex flex-col gap-2 mt-4">
                        <Link className="label-text-alt link link-hover">Forgot password?</Link>
                        <Link className="label-text-alt link link-hover">Don't have account? <Link to='/register' className='text-red-500'>Register</Link></Link>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Bounce
            />
            {/* Same as */}
            <ToastContainer />
        </div>
    );
};

export default Login;