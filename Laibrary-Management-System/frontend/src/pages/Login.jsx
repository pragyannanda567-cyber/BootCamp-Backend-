import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "./Login.css";

function Login() {

    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await API.post("/login", loginData);

            localStorage.setItem("token", response.data.token);

            localStorage.setItem(
                "user",
                JSON.stringify(response.data.user)
            );

            if (response.data.user.role === "Admin") {
                navigate("/dashboard");
            } else {
                navigate("/student-dashboard");
            }

        } catch (error) {

            console.log(error);

            alert(error.response?.data?.message || "Login Failed");

        }

    };

    return (

        <div className="login-container">

            <div className="login-card">

                <h1>📚 Library Management System</h1>

                <p>Login to continue</p>

        <form onSubmit={handleLogin}>

            <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={loginData.email}
                onChange={handleChange}
                required
            />

            <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={loginData.password}
                onChange={handleChange}
                required
            />

            <button
                type="submit"
                className="login-btn"
            >
                Login
            </button>

          </form>

<div className="login-footer">
    Library Management System
</div>

            </div>

        </div>

    );

}

export default Login;