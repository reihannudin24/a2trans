import { useState } from "react";
import apiJson from "../function/axios";
import { useNavigate } from "react-router-dom";
import { textPopUp } from "../function/swal";
import React from "react";

export default function Login() {

    const navigate = useNavigate();
    const [error, setErro] = useState('');
    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        });
    };

    console.log("email : ", state.email === "")
    console.log("password : ", state?.email === "", state?.email)


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!state.email || !state.password) {
            setErro('Please fill in all fields.');
            textPopUp("Error", "Please complete all fields", "error");
            navigate('/login');
            return;
        }

        try {
            const response = await apiJson.post('/auth/login', {
                email: state.email,
                password: state.password
            });

            textPopUp("Success", "Login successful!", "success");
            navigate('/');
        } catch (err) {
            console.error(err);
            textPopUp("Error", `Login failed. Please check your credentials.`, "error");
            navigate('/login');
        }
    };

    return (
        <>
            <div className={"h-screen mx-auto w-full"} style={{ minWidth: "400px" }}>
                <div className={"relative w-full h-screen "}>
                    <div className={"absolute z-10 w-full h-full shadow-banner"}>
                        <img src="/assets/img/bus/banner-bus.jpg" alt="" className="absolute  inset-0 w-full h-full object-cover" />
                    </div>
                </div>
                <div className=" z-20 left-0 right-0 absolute container  mx-auto h-screen bottom-0 w-full ">
                    <div className="my-auto flex h-full w-full rounded-md items-center justify-center  md:mx-0 md:px-0 lg:mb-10 lg:items-center">
                        <div className={"bg-white w-11/12  md:w-8/12 lg:w-7/12 xl:w-5/12 mx-auto rounded-lg pt-6 pb-8 px-4 md:px-8 "}>
                            {/*xl:max-w-[420px]*/}
                            <div className=" w-full  max-w-full flex-col items-center  lg:pl-0 ">
                                <div className={"h-28"}>
                                    <img alt="Logo" className={"h-full object-cover"} src={"/assets/img/logo.svg"} />
                                </div>
                                <h4 className="mb-2.5 text-3xl sm:text-4xl font-bold text-navy-700">
                                    Sign In
                                </h4>
                                <p className="mb-4 sm:mb-9 ml-1 text-base text-gray-600">
                                    Enter your email and password to sign in!
                                </p>
                                <div className="mb-6 flex items-center  gap-3">
                                    <div className="h-px w-full bg-gray-200" />
                                </div>
                                <form onSubmit={handleSubmit} className="mt-5 ">
                                    <InputField
                                        variant="auth"
                                        extra="mb-3"
                                        label="Email"
                                        id="email"
                                        name="email"
                                        value={state.email}
                                        type="email"
                                        placeholder="Masukkan email admin"
                                        onChange={handleInputChange}
                                    />
                                    <InputField
                                        variant="auth"
                                        extra="mb-3"
                                        label="Password"
                                        id="password"
                                        name="password"
                                        value={state.password}
                                        type="password"
                                        placeholder="Masukkan kata sandi"
                                        onChange={handleInputChange}
                                    />
                                    <button className="w-full mt-10 py-3 font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                        </svg>
                                        <span>Login Admin</span>
                                    </button>
                                </form>
                                <div className="mt-4">
                                    <span className=" text-sm font-medium text-navy-700 ">
                                        Pastikan anda merupakan seorang admin
                                    </span>
                                    <a
                                        href=" "
                                        className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
                                    >
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


function InputField({ label, id, name, extra, type, placeholder, variant, state, disabled, onChange, value }) {
    const inputState = value ? "success" : state === "error" ? "error" : "";

    return (
        <div className={`${extra}`}>
            <label
                htmlFor={id}
                className={`text-sm text-navy-700 ${variant === "auth" ? "ml-1.5 font-medium" : "ml-3 font-bold"
                    }`}
            >
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none ${disabled === true
                    ? "!border-none !bg-gray-100  "
                    : inputState === "error"
                        ? "border-red-500 text-red-500 placeholder:text-red-500 "
                        : inputState === "success"
                            ? "border-red-500 text-black placeholder:text-black"
                            : "border-gray-200 "
                    }`}
            />
        </div>
    );
}

