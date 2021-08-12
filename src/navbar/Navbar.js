import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../index.css'

export const Navbar = () => {
    return (
       
              <section className=' textoH '>
      <div class="container center">
  <div class="row">
    <div class="logo">
    <img src={"../img/logo.jpeg"} class="img-thumbnail" alt="..."></img>
    </div>
    <div class="col-sm text-center lft-margin">
    <br/>
    <p>El mejor diario del mundo</p>
    <h1  className="textoH">The Medallin Time</h1>
  
    <br/>
    <button className="btn-vm" >Ver más</button>   <br/>   <br/>
    </div>
    <div class="col-sm ">
  
    <nav className="navbar navbar-expand-sm textoH nv-p" >
    <Link 
                className="navbar-brand textoH " 
                to="/"
            >
                New Paper
            </Link>
            <div className="navbar-collapse">
                <div className=" textoH navbar-nav">

        
                    <NavLink 
                        activeClassName="active"
                        className="navbar-brand textoH nav-item nav-link " 
                        exact
                        to="/social"
                    >
                        Categoria
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="navbar-brand textoH nav-item nav-link" 
                        exact
                        to="/contact"
                    >
                        Contacto
                    </NavLink>
        
      
                <ul className="navbar-nav ml-auto">
                    <NavLink 
                        activeClassName="active"
                        className="navbar-brand textoH nav-item nav-link" 
                        exact
                        to="/profile"
                    >
                        Perfil
                    </NavLink>
                </ul>
       
                <ul className="navbar-nav ml-auto">
                    <NavLink 
                        activeClassName="active"
                        className=" navbar-brand textoH nav-item nav-link" 
                        exact
                        to="/login"
                    >
                        Login
                    </NavLink>
                </ul>
                </div>
            </div>


        </nav>
    </div>
  </div>
</div>
    </section>
     
    )
}