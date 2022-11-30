import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';


const Register = () => {
    const {register, formState: { errors }, handleSubmit} = useForm();
    const {createUser, updateUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleRegister = data =>{
        console.log(data);
        createUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true})
            toast('Successfully created user')
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(() =>{})
            .catch(error => console.log(error))
        })
        .catch(error => console.log(error));
    }
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(handleRegister)} className="card-body">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register('Name', {required: "Name Address is required"})} type="text" placeholder="name" className="input input-bordered" />
                            {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register('email', {required: "Email Address is required"})} type="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register('password', {required: "Password Address is required", minLength: { value: 6, message: "Password must be at least 6 characters"}})} type="password" placeholder="password" className="input input-bordered" />
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <label className="label">
                                <Link to='/login' className=" link-hover">Already have an account? Login</Link>
                            </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;