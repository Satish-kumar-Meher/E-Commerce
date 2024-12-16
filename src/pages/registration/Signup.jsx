/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";

const Signup = () => {


    const context = useContext(myContext);
    const {loading, setLoading } = context;

    // navigate 
    const navigate = useNavigate();

    // User Signup State 
    const [userSignup, setUserSignup] = useState({
        name: "",
        email: "",
        password: "",
        role: ""
    });


    /**========================================================================
    *========================================================================**/

    const userSignupFunction = async () => {
        // validation 
        if (userSignup.name === "" || userSignup.email === "" || userSignup.password === "" || userSignup.role === "") {
            toast.error("All Fields are required")
        }

        setLoading(true);
        try {
            const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password,userSignup.role);

            // create user object
            const user = {
                name: userSignup.name,
                email: users.user.email,
                uid: users.user.uid,
                role: userSignup.role,
                time: Timestamp.now(),
                date: new Date().toLocaleString(
                    "en-US",
                    {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    }
                )
            }

            // create user Refrence
            const userRefrence = collection(fireDB, "user")

            // Add User Detail
            addDoc(userRefrence, user);

            setUserSignup({
                name: "",
                email: "",
                password: ""
            })

            toast.success("Signup Successfully");

            setLoading(false);
            navigate('/login')
        } catch (error) {
            console.log(error);
            setLoading(false);
        }

    }





    return (
        <div className='flex justify-center items-center h-screen'>
               {loading && <Loader/> }
            {/* Login Form  */}
            <div className="login_Form bg-[#bdf6ee] px-1 lg:px-8 py-6 border border-[#57b7aa] rounded-xl shadow-md">

                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-[#57b7aa] '>
                        Signup
                    </h2>
                </div>

                {/* Input One  */}
                <div className="mb-3">
                    <input
                        type="text"
                        value={userSignup.name}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                name:e.target.value
                            })
                        }}
                        placeholder='Full Name'
                        className='bg-[#bdf6ee] border border-[#57b7aa] px-2 py-2 w-96 rounded-md outline-none placeholder-[#57b7aa]'
                    />
                </div>

                {/* Input Two  */}
                <div className="mb-3">
                    <input
                        type="email"
                        value={userSignup.email}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                email:e.target.value
                            })
                        }}
                        placeholder='Email Address'
                        className='bg-[#bdf6ee] border border-[#57b7aa] px-2 py-2 w-96 rounded-md outline-none placeholder-[#57b7aa]'
                    />
                </div>


                {/* Input: Role */}
                <div className="mb-5">
                    <select
                        value={userSignup.role}
                        onChange={(e) => setUserSignup({ ...userSignup, role: e.target.value })}
                        className='bg-[#bdf6ee] border border-[#57b7aa] px-2 py-2 w-96 rounded-md outline-none text-[#57b7aa]'
                    >
                        <option value="" disabled>Select Role</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>

                {/* Input Three  */}
                <div className="mb-5">
                    <input
                        type="password"
                        value={userSignup.password}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                password:e.target.value
                            })
                        }}
                        placeholder='Password'
                        className='bg-[#bdf6ee] border border-[#57b7aa] px-2 py-2 w-96 rounded-md outline-none placeholder-[#57b7aa]'
                    />
                </div>


                {/* Signup Button  */}
                <div className="mb-5">
                    <button
                        type='button'
                        onClick={userSignupFunction}
                        className='bg-[#57b7aa] hover:bg-[#41897f] w-full text-white text-center py-2 font-bold rounded-md '
                    >
                       SignUp
                    </button>
                </div>

                <div>
                    <h2 className='text-black'>Have an account <Link className=' text-[#57b7aa] font-bold' to={'/login'}>Login</Link></h2>
                </div>

            </div>
        </div>
    );
}

export default Signup;