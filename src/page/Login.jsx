import { InputComponent } from "../component/Input.Component";
import { useState } from "react";
import apiJson from "../function/axios";
import {useNavigate} from "react-router-dom";
import {textPopUp} from "../function/swal";

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

    console.log("email : ", state.email)
    console.log("password : ", state.password)

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await apiJson.post('/auth/login', {
                email : state.email,
                password : state.password
            })

            const data = await response;
            console.log(data);
            textPopUp("Success", "Login successful!", "success");
            navigate('/dashboard'); 
        } catch (err) {
            console.error(err);
            textPopUp("Error", "Login failed. Please check your credentials.", "error");
        }
    };

    return (
        <>
            <div className={"relative"}>
                <div className={"fixed w-full h-screen "}>
                    <div className={"absolute z-10 w-full h-full shadow-banner"}>
                    </div>
                    <img src="/assets/img/bus/banner-bus.jpg" alt="" className="absolute  inset-0 w-full h-full object-cover" />
                </div>
                <div className=" z-20  absolute top-0 h-screen bottom-0 w-full ">
                    <div className={"flex justify-center  relative h-full items-center"}>
                        <div className={" h-screen w-5/12 mx-auto relative left-0 right-0 top-0 bottom-0 pb-2 "}>
                            <div className="w-11/12  my-8 bg-white left-0 right-0 top-0 bottom-0 mx-auto container py-4 px-8 rounded-xl shadow-md">
                                <div className={"h-28"}>
                                    <img className={"h-full object-cover"} src={"/assets/img/logo.svg"}/>
                                </div>
                                <div>
                                    <h1 className="text-3xl font-bold">Admin Login</h1>
                                    <p className="text-slate-500">Halo Admin, Selamat datang kembali 👋</p>
                                </div>
                                <form onSubmit={handleSubmit} className="mt-5 ">
                                    <div className="flex flex-col space-y-3 ">
                                        <InputComponent
                                            id="email"
                                            name="email"
                                            label="Email Admin"
                                            value={state.email}
                                            type="email"
                                            placeholder="Masukkan email admin"
                                            onChange={handleInputChange}
                                        />
                                        <div>
                                            <InputComponent
                                                id="password"
                                                name="password"
                                                label="Kata Sandi"
                                                value={state.password}
                                                type="password"
                                                placeholder="Masukkan kata sandi"
                                                onChange={handleInputChange}
                                            />
                                            <div className="flex flex-row my-2 justify-between">
                                                <div>
                                                    <label htmlFor="remember" className="flex items-center">
                                                        <input type="checkbox" id="remember" className="w-4 h-4 border-slate-200 focus:bg-indigo-600 mr-2" />
                                                        Ingat saya
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"mt-10 mb-4"}>
                                        <button className="w-full py-3 font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                            </svg>
                                            <span>Login Admin</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
