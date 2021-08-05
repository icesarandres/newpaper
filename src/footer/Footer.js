import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../index.css'
export const Footer = () => {
    return (
       
              <section className='footer-bg text-center'>
      <div class="container center">
  <div class="row">
    <div class="col-sm">
   {/* { <h1 class="text-hide" style="background-image: url('../img/logo'); width: 50px; height: 50px;">Bootstrap</h1>} */}
    </div>
    <div class="col-md">
    <br/>
    <p>El mejor diario del mundo</p>
    <h1  className="textoH">The Medallin Time</h1>
   

    </div>
    <div class="col-sm">
    <nav className="navbar navbar-expand-sm textoH" >
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
                        className=" textoH nav-item nav-link " 
                        exact
                        to="/category"
                    >
                        Categoria
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className=" textoH nav-item nav-link" 
                        exact
                        to="/contact"
                    >
                        Contacto
                    </NavLink>
                </div>
            </div>

          
        
            <div className="navbar-collapse">
                <div className=" textoH navbar-nav">
                    <NavLink 
                        activeClassName="active"
                        className="textoH nav-item nav-link" 
                        exact
                        to="/profile"
                    >
                        Perfil
                    </NavLink>
                    </div>
            </div>
   


              
            <div className="navbar-collapse">
                <div className=" textoH navbar-nav">
                    <NavLink 
                        activeClassName="active"
                        className="textoH nav-item nav-link" 
                        exact
                        to="/login"
                    >
                        Login
                    </NavLink>
                    </div>
            </div>
       

        </nav>
    </div>
  </div>
</div>
    </section>
     
    )
}