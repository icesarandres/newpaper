import React from 'react';



const Header = (props) => {
 
  return (
    <section className='Header'>
      <div class="container">
  <div class="row">
    <div class="col-sm">
 {/* image */}
    </div>
    <div class="col-sm">
    <p>El mejor diario del mundo</p>
    <h1>The Medallin Time</h1>
    <br>
    </br>
    <br/>
    <button>Ver más</button>
    </div>
    <div class="col-sm">
     <nav>
       <link rel="stylesheet" href="#" inicio/>
       <link rel="stylesheet" href="#" categorías/>
       <link rel="stylesheet" href="#" contacto/>
       <link rel="stylesheet" href="#" perfil/>
       <link rel="stylesheet" href="#"buscador/>
     </nav>
    </div>
  </div>
</div>
    </section>
  );
};

export default Header;
