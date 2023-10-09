import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
import { updateProfile } from "firebase/auth";



const Register = () => {

    const [regError, setRegError] = useState(null);

    const { createUser } = useContext(AuthContext);
    

    const location = useLocation();
    const navigate = useNavigate();

    // const notify = () => toast('Registration successful');

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const username = e.target.name.value;
        const photo = e.target.photo.value;
        console.log(email, password, username, photo);
        setRegError(null);

        createUser(email, password, username, photo)
            .then(result => {
                console.log(result.user);

                updateProfile(result.user,{
                    displayName: username, photoURL: photo
                })
                .then()
                .catch()

                toast('Registration successful');
                setTimeout(() => {
                    navigate(location?.state ? location.state : '/')
                }, 1000);

            })
            .catch(error => {
                console.log(error.message);
                setRegError(error.message);
            })
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen ">

                <div className="hero-content flex-col">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-100 mx-8">

                        <h1 className="text-4xl font-bold text-center my-5">Please Register</h1>
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" placeholder="User Name" className="input input-bordered" name="name" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url" placeholder="Photo URL" className="input input-bordered" name="photo"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <p>Already have an account!!! Please <Link to="/login" className="text-red-600">Login</Link></p>
                            <div className="form-control mt-6">
                                <button className="btn bg-teal-200">Register</button>
                            </div>
                        </form>
                        {
                            regError && <p className="text-red-500 pl-2 pb-2">{regError}</p>
                        }
                    </div>
                    <Toaster />
                </div>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Register;