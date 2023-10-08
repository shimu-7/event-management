import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";


const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen ">

                <div className="hero-content flex-col">
                    
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-100 mx-8">

                        <h1 className="text-4xl font-bold text-center my-5">Login now!</h1>
                        <form className="card-body">
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
                            <p>New here!!! Please <Link to="/register" className="text-red-600">Register</Link></p>
                            <div className="form-control mt-6">
                                <button className="btn bg-teal-200">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;