import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import { FaGoogle } from 'react-icons/fa';

const Register = () => {
    const { setUser, signUpNewUser, signInWithGoogle, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (password.length < 6) {
            return toast.error("Password must have at least 6 characters");
        } else if (!passwordRegex.test(password)) { // Use "!" to check if the regex fails
            return toast.error("Password must have at least one uppercase and one lowercase character");
        }
        signUpNewUser(email, password)
            .then(res => {
                setUser(res.user);
                updateUserProfile(name, photo)
                    .then(res => {
                    }).catch(err => {
                        console.log("ERROR", err);
                    })
                form.reset();
                navigate('/home')
            })
            .catch(err => {
                toast.error(err.message)
            })
    }
    const handleGoogleRegister = () => {
        signInWithGoogle()
            .then(res => {
                setUser(res.user);
                navigate('/home')
            })
            .catch(err => {
                console.log("ERROr", err);
            })
    }
    return (
        <div className="card mx-auto mt-10 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    <label className="label flex flex-col gap-2 mt-4">
                        <Link className="label-text-alt link link-hover">Already have account? <Link to='/login' className='text-red-500'>Login</Link></Link>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
                <div className='flex flex-col text-center justify-center items-center'>
                    <p className='text-xs'>or</p>
                    <button onClick={handleGoogleRegister} className='text-2xl font-bold flex items-center justify-center gap-2 shadow-md p-4 rounded-md'><FaGoogle></FaGoogle> Continue With Google</button>
                </div>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;