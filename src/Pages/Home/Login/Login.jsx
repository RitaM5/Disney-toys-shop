import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';


const Login = () => {
    const { signIn, googleSignIn, user } = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    const from = location.state?.from?.pathname || '/';
    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                setError("Email/Password didn't match.");
            })
    }
    //goole sign in
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {

            })
            .catch(error => {
              setError(error.message)
            })
    }
    useEffect(() => {
        if (user) {
            navigate(from)
        }
    }, [user]);
    return (
        <div className='mt-3 mb-20 my-container'>
            <div className='lg:w-96 md:w-96 sm:w-full mx-auto'>
                <h1 className='text-left text-4xl font-bold text-slate-500 my-5'>Login</h1>
                <div className="card w-full bg-slate-300">
                    <div className="card-body" >
                        <form onSubmit={handleLogIn}>
                            <input name="email" type="email" placeholder="email" className="input w-full " required />
                            <input name="password" type="password" placeholder="password" className="input mt-2 w-full" required />
                            <input className="mt-3 w-full btn btn-primary" type="submit" value="LogIn" required />
                            {
                                error && <p className='text-red-500 font-semibold mt-2'>Error: {error}</p>
                            }
                        </form>
                        <button onClick={handleGoogleSignIn} className="btn btn-active btn-accent"><img src="https://img.icons8.com/color/30/undefined/google-logo.png" /> <span className='text-white'> Google</span></button>
                        <p className='mt-1'><small className='font-semibold' style={{ fontSize: "14px" }}>Don't Have an Account ?</small> <Link to="/register" className=' underline text-green-600'>Please SignUp</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;