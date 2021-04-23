import React from 'react';
import { isAuthenticated, signout } from "../core/apiCore";


const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: '#ff9900' }
    } else {
        return { color: '#ffffff' }
    }
}


const Navbar = ({ history }) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <div className="container-fluid">
                    <a className="navbar-brand" href="/Historia">Club Sport 3 de Julio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">INICIO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Noticia">NOTICIAS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Dirigencia">PLANTEL</a>
                            </li>

                            <div class="dropdown">
                                <li class="nav-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    CLUB
  </li>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="/Historia">HISTORIA</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="/Directiva">DIRECTIVA</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="/Normativa">NORMATIVA</a>
                                </div>
                            </div>

                            {!isAuthenticated() && (
                                <>
                            <li className="nav-item">
                                <a className="nav-link" href="/signup">SignUp</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/signin">Login</a>
                            </li>
                                </>
                            )

                            }


                            {
                                isAuthenticated() &&(
                                    <>
                                    <li className="nav-item">
                                <a className="nav-link" href="/addNoticia">Añadir noticia</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/" onClick={() =>
                                signout(() => {
                                    history.push("/");
                                })}> Logout</a>
                            </li>
                                    </>
                                )
                            }
                           
             


                           

                        </ul>

                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar;