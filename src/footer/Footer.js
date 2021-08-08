import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../index.css'
export const Footer = () => {
    return (
       
              <section className='footer-bg text-center text-light'>
      <div>
  <div class="wrap">
  <div class="logo">
    <img src={"../img/logo.jpeg"} class="img-thumbnail" alt="..."></img>
    </div>
    <div >
    <br/>
    <nav className=" nav-left navbar nav flex-column " >
    <Link 
                className=" nav-item navbar-brand  " 
                to="/"
            >
                 Inicio
            </Link>
          
      
      

            <div className="navbar-collapse">
                <div className="  navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="   nav-item navbar-brand " 
                        exact
                        to="/category"
                    >
                        Categoría
                    </NavLink>
              
     
                    <NavLink 
                        activeClassName="active"
                        className="  nav-item navbar-brand " 
                        exact
                        to="/contact"
                    >
                    Contacto  
                    </NavLink>
                </div>
            </div>

          
        
            <div className="navbar-collapse">
                <div className="  navbar-nav">
                    <NavLink 
                        activeClassName="active"
                        className=" nav-item navbar-brand " 
                        exact
                        to="/profile"
                    >
                       Perfil
                    </NavLink>
               
                    </div>
            </div>
   


              
            <div className="navbar-collapse">
                <div className=" navbar-nav">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item navbar-brand " 
                        exact
                        to="/login"
                    >
                        Login
                    </NavLink>
                    </div>
            </div>
       

        </nav>
  

    </div>
    <div class="col-sm lft-margin subida">
        <p>ingresa tu correo para recibir información en tiempo real</p>
<label>
    <input className="l-s">
    </input>
    <button className="btn-s"> subir</button>
</label>
<div class="wrap">
{/* <i class="fab fa-facebook-f">a</i>
<i class="fab fa-twitter">a</i>
<i class="fab fa-youtube">a</i>
<i class="fab fa-github">a</i>
<i class="fab fa-instagram">a</i> */}
</div>
</div>
  </div>
</div>
    </section>
     
    )
}