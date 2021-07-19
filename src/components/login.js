import React, {Component} from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Login extends Component {
    render() { 
        console.log('id' + cookies.get('id'));
        console.log('primer_apellido' + cookies.get('primer_apellido'));
        console.log('segundo_apellido' + cookies.get('segundo_apellido'));
        console.log('nombre' + cookies.get('nombre'));
        console.log('username' + cookies.get('username'));

        return (
            <div>
                Hola soy el login
            </div>
          );
    }
}
 
export default Login;