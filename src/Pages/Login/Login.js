import { GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const {register, formState: { errors }, handleSubmit} = useForm();
    const {signIn, googleSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = data =>{
        console.log(data);
        signIn(data.email, data.password)
        .then( result =>{
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true})
        })
        .catch(error => console.log(error))
    }

    

    const handleGoogleSignIn = () =>{
        googleSignIn(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });
        })
        .catch(error => console.error(error));
    }
    
   
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                    <h1 className="text-5xl font-bold">Login now!</h1>
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
                            <label className="label">
                                <p className="label-text-alt link link-hover">Forget password?</p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <label className="label">
                                <Link to='/register' className=" link-hover">Don't have an account? Register</Link>
                            </label>
                    </form>
                    
                    <div className=" mb-5">
                            <button onClick={handleGoogleSignIn} className="btn btn-primary btn-wide">Login with Google</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Login;