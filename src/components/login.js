import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';  
import Cookies from 'universal-cookie';

const api="http://localhost:3001/usuarios";
const cookies = new Cookies();


class profile extends Component {
    //Para capturar lo que los usuarios ponen en los input.
    state = {
        form: {
            username: "",
            password: ""
        }
    }

    //async para ver en tiempo real por consola lo que hacemos
    handleChange =async e => {
      await  this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }

        })
        //Para mostrar por consola lo que hacemos en el form
        //console.log(this.state.form);
    }

    //Petición get para consultar información
    iniciarSesion = async () =>{
        await axios.get(api, {params: {username: this.state.form.username, password: md5(this.state.form.password)}})
        //Mostrar por consola si la petición fue exitosa o hubo error.
        .then (response =>{
            //Aquí se retorna.
            return response.data;
        })
        //Aquí se puede utilizar ->Inicio de sesión válido
        .then (response =>{
            if(response.length>0){
                var respuesta=response[0];
              //Para guardar las variables de inicio de sesion  
              cookies.set('id', respuesta.id, {path:"/"})
              cookies.set('primer_apellido', respuesta.primer_apellido, {path:"/"})
              cookies.set('segundo_apellido', respuesta.segundo_apellido, {path:"/"})
              cookies.set('nombre', respuesta.nombre, {path:"/"})
              cookies.set('username', respuesta.username, {path:"/"})
              alert(`Inicio de sesion exitoso ${respuesta.nombre} ${respuesta.primer_apellido}`);
              window.location.href="./Profile";
            }
            else{
                alert('El usuario o la contraseña no son correctos');
            }
        })
        .catch(error =>{
            console.log(error);
        })
    }

    render() {
        return (
            <div className="containerPrincipal">
                <h1>Perfil</h1>
                <div className="containerSecundario">
                    <div className="form-group">
                        <label>Usuario:</label>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            onChange={this.handleChange}>
                        </input>
                        <br />
                        <label>Contraseña:</label>
                        <br />
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={this.handleChange}>
                        </input>
                        <br />
                        <button type="button" onClick={() => this.iniciarSesion()} className="btn btn-outline-primary">iniciar Sección</button>
                    </div>
                </div>
    
            </div>
        )
    }
    
}

export default profile