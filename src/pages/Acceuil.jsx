import { useState, useEffect } from "react";
import "../css/acceuil.css";
import sticker from '../img/sticker.webp';

import Navbar from "../component/Navbar";

const Acceuil = () => {
    
    const [activeTab, setActiveTab] = useState("signup");

    const handleTabClick = (e, tab) => {
        e.preventDefault();
        setActiveTab(tab);
    };

    return (
        <div>
            <Navbar />
            <div className="containerr">
                <div className="cardimage">
                    <img src={sticker} className="card-image" />
                    <h3 className="par">Pour acceder il<br/>faut:<br/>Inscrire ou creer<br/>un compte.</h3>
                </div>
                <div className="form">
                    <ul className="tab-group">
                        <li
                            className={`tab ${activeTab === "signup" ? "active" : ""}`}
                            onClick={(e) => handleTabClick(e, "signup")}
                        >
                            <a href="#signup">Inscrire</a>
                        </li>
                        <li
                            className={`tab ${activeTab === "login" ? "active" : ""}`}
                            onClick={(e) => handleTabClick(e, "login")}
                        >
                            <a href="#login">Connecter</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="signup" style={{ display: activeTab === "signup" ? "block" : "none" }}>
                            <h2>Bienvenue</h2>
                            <form action="/" method="post">
                                <div className="top-row">
                                    <div className="field-wrap">
                                        <input type="text" required placeholder="Nom de famille" />
                                    </div>
                                    <div className="field-wrap">
                                        <input type="text" required placeholder="Prenom" />
                                    </div>
                                </div>
                                <div className="field-wrap">
                                    <input type="email" required placeholder="Adresse Email"/>
                                </div>
                                <div className="field-wrap">
                                    <input type="password" required placeholder="Mot de passe" />
                                </div>
                                <button type="submit" className="button button-block">Inscrire</button>
                            </form>
                        </div>

                        <div id="login" style={{ display: activeTab === "login" ? "block" : "none" }}>
                            <h1>Bienvenue !</h1>
                            <form action="/" method="post">
                                <div className="field-wrap">
                                    <input type="email" required placeholder="Email" />
                                </div>
                                <div className="field-wrap">
                                    <input type="password" required placeholder="Mot de passe" />
                                </div>
                                <p className="forgot"><a href="">Mot de passe oublier ?</a></p>
                                <button className="button button-block">Connecter</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Acceuil;
