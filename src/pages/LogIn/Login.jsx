import React from 'react'
import background from "./3390.png"
import "./login.css"

const Login = () => {
    return (
        <div className="loginPage">
            <div className="login">
                <div className="image">
                    <img src={background} alt="image" />
                </div>
                <div className="loginform">
                    <div className="form">
                        <div className="title">
                            <h1>Tizimga hush kelibsiz!</h1>
                            <p>
                                Tizimga kirish uchun login va parol orqali autentifikatsiya jarayonidan o'ting
                            </p>
                        </div>
                        <form>
                            <div className="inputs">
                                <input type="text" placeholder="Login" />
                                <input type="password" placeholder="Parol" />
                            </div>
                            <div className="btn">
                                <button>Tizimga kirish</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login;