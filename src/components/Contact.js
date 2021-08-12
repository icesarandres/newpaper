import React from 'react'

export const Contact = () => {
    return (
        <div>
      <div className="bg-linear text-light">
            <h4 className="text-light text-center container center">Contacto</h4>
<br/><br/><br/>
      
            <div class="container center">
  <div class="wrap">
      <div className="white-text">
          <p>
Llama: 1-321934576</p>
<br/><p>
@email: newpapers@contactus.com</p>
<br/><p>
Sedes Físicas: Bogotá-Medellín Colombia. Torres-NewPapers</p>

      </div>

</div>

</div>
<div class="col-sm lft-margin subida">

    <form className="form-contact center">
   <h2 className="text-center">Formulario de Contacto</h2>
   <p className=" text-center">Si desea contactarnos, por favor, llene este Formulario</p>
<label className="center">
                <input class="huecos" type="text" onkeypress="return ((event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122))" required  required name="name" id="name" placeholder="Nombre">
                </input>
            </label><br/>
            <label  className="center">
                <input  class="huecos"  type="email" name="correo" id="email" placeholder="Correo electronico">
                </input >
            </label><br/>
            <label  className="center">
                <input class="huecos " type="text"   placeholder="Telefóno">
                </input>
            </label><br/>
  
 
            <textarea class="moreInfo center"  cols="20" rows="5" placeholder="Hablénos de usted"></textarea>
        <br/>
            <button  className="btn-form">Enviar</button>
            </form>
            </div>
  </div>
  </div>
    )
}
