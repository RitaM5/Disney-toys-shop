import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';


const Signup = () => {
    const { createUser, setUserName, setPhotoUrl, logOut } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
            setError('password must be six characters or longer');
            return;
        }
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setUserName(result.user, name);
                setPhotoUrl(result.user, photo);
                logOut();
                navigate("/")
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div className='mt-3 mb-20 my-container'>
            <div className='lg:w-96 md:w-96 sm:w-full mx-auto'>
                <h1 className='text-left text-4xl font-bold text-blue-400 my-6'>SignUp</h1>
                <div className="card w-full bg-blue-200">
                    <form className="card-body" onSubmit={handleRegister}>
                        <input type="text" name="name" placeholder="name" className="input w-full" required />
                        <input type="email" name="email" placeholder="email" className="input w-full" required />
                        <input type="password" name="password" placeholder="password" className="input w-full" required />
                        <input type="text" name="photo" placeholder="photo url" className="input w-full" required />
                        <button type='submit' className="btn btn-primary mt-3">SignUp</button>
                        {
                            error && <p className='text-red-500 font-semibold mt-2'>{error}</p>
                        }
                        <p className='mt-1'><small className='font-semibold' style={{ fontSize: "14px" }}>Already Have an Account ?</small> <Link to="/login" className=' underline text-green-600'>Please LogIn</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;