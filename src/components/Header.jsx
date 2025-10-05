import './styles.css';
import logo from '../assets/logo.jpg';
import lupa from '../assets/search.png';
import { useState } from 'react';

function Header() {
    const [mainOpen, setMainOpen] = useState(false);

    const toggleMain = () => {
        setMainOpen(!mainOpen);
    }



    return (

        <div className="header">
            <div className="div-logo">
                <img src={logo} alt="Logo" id="logo" />
            </div>

            <div className="div-search">
                <input type="text" id="search" placeholder="O que você deseja hoje?" />
                <button id='btn-search'><img src={lupa} alt="lupa-ico" id='lupa-ico' /></button>
            </div>
            <div className="lists">
                <ul className="ul-lists">
                    <li className="list-item"><a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("news").scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Doces
                    </a>
                    </li>
                    <li className="list-item"><a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("news").scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Bolos
                    </a>
                    </li>
                    <li className="list-item"><a
                        href="#news"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("news").scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Novidades
                    </a>
                    </li>
                    <li className="list-item"><a
                        href="#contacts"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("contacts").scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Contatos
                    </a>
                    </li>
                </ul>

                

            </div>
            <div className="div-main">
                <span className="main-mobile" onClick={toggleMain}>{mainOpen ? "X" : "☰"}</span>
            </div>
            <div className={`div-main-mobile ${mainOpen ? "show" : ""}`}>
                    <ul className="ul-lists-mob">
                        <li className="list-item-mob"><a
                            href="#"
                            onClick={() => setMainOpen(false)}
                        >
                            Doces
                        </a>
                        </li>
                        <li className="list-item-mob"><a
                            href="#"
                            onClick={() => setMainOpen(false)}
                        >
                            Bolos
                        </a>
                        </li>
                        <li className="list-item-mob"><a
                            href="#news"
                             onClick={() => setMainOpen(false)}
                        >
                            News
                        </a>
                        </li>
                        <li className="list-item-mob"><a
                            href="#contacts"
                            onClick={() => setMainOpen(false)}
                        >
                            Contatos
                        </a>
                        </li>
                    </ul>
                </div>
        </div>
    )
}

export default Header;