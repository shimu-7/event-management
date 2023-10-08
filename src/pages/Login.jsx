import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import toast, { Toaster } from "react-hot-toast";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Footer from "../components/Footer";


const Login = () => {

    const [regError, setRegError] = useState(null);

    const {logIn} = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        setRegError(null)

        logIn(email,password)
        .then(result =>{
            console.log(result.user);
            toast('Successfully Logged In');
            setTimeout(() => {
                navigate(location?.state ? location.state : '/')
              }, 1000);   
            
        })
        .catch(error=>{
            console.log(error.message);
            setRegError(error.message);
            //toast('invalid-login-credentials');
        })

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen ">

                <div className="hero-content flex-col">
                    
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-100 mx-8">

                        <h1 className="text-4xl font-bold text-center my-5">Login now!</h1>
                        <form onSubmit={handleLogin} className="card-body">
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
                        {
                            regError && <p className="text-red-500 pl-2 pb-2">{regError}</p>
                        }
                       <Toaster/>
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Login;