import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">

                <div >
                    <Link
                        className="navbar-brand"
                        to="/newpaper"
                    >
                        <img src="data:image/png;base64,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" alt="" width="100" height="50"/>
                    </Link>
                </div>
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to="/category"
                            >
                                Categoria
                            </NavLink>

                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to="/contact"
                            >
                                Contacto
                            </NavLink>

                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to="/profile"
                            >
                                Perfil
                            </NavLink>

                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to="/aboutus"
                            >
                                Nosotros
                            </NavLink>

                            <form class="d-flex">
                                <button class="btn btn-sm btn-outline-secondary" type="button">
                                    <NavLink
                                        activeClassName="active"
                                        className="nav-item nav-link"
                                        exact
                                        to="/profile"
                                    >
                                        Inicia Sesion
                                    </NavLink>
                                </button>
                            </form>
                        </ul>
                    </div>
                </div>
        </nav>



            )
}