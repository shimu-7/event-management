import { useContext } from "react";
import Footer from "../components/Footer";
import { CgProfile } from "react-icons/cg";
import Navbar from "../shared/Navbar";
import { AuthContext } from "../providers/AuthProvider";


const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl my-10 text-center font-semibold">My Account</h2>
            <div>
                <div className="grid h-20 rounded bg-emerald-100 font-medium text-black place-content-center">{user.displayName ? user.displayName : 'Display name Not Showed'
                }</div>
                <div className="grid  h-20 rounded bg-accent  place-content-center">{user.photoURL? <img className="h-16 w-20 rounded-full" src={user.photoURL} referrerPolicy="no-referrer"></img> :<CgProfile className="text-5xl"></CgProfile>}</div>
                <div className="grid  h-20 rounded bg-emerald-100 text-black font-medium place-content-center">{user.email}</div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Profile;