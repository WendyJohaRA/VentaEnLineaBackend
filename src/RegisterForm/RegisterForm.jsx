import React, { useRef } from "react";
import { useState } from "react";
import { userSignUp } from "../Api/UserApi";
import InputRegister from "./InputRegister";
import { Toast } from "primereact/toast"
import { showToast } from "../Utils/ToastMessage";

const RegisterForm = () => {
  //creamos una constante para los toast
  const toast = useRef(null);

  //necesitamos un useState tipo objeto que tenga las mismas propiedades que los name de los inputs
  const [inputs, setInputs] = useState({
    Nombre: "",
    Apellido: "",
    Email: "",
    UsuarioRol:'',
    Password: "",
  });

  const { Nombre, Apellido, Email, UsuarioRol, Password } = inputs

  //funcion manejadora para controlar los valores de los inputs
  const handleInputsForm = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };


  //funcion manejadora del formulario
  const handleOnSubmit = async ( e ) => {
    e.preventDefault();
    // alert(JSON.stringify(inputs));
    
    //validacion de que los inputs no esten vacios
    if(!Nombre || !Apellido || !Email || !UsuarioRol || !Password){
      alert('All inputs are required')
    }else{
      const result = await userSignUp(inputs) //llamamos a la api
      if(result.status){
        showToast('success', 'Success', result.message, toast)
        //limpiamos el formulario
        setInputs( {
          Nombre:'',
          Apellido:'',
          Email:'',
          UsuarioRol:'',
          Password:'',
        })
        setTimeout(() => {
          window.location.href = '/'
        }, 3000);
      } else {
        showToast('warn', 'Warn', result.message, toast)
      }
    }
    
    
  };

  return (
    <>
      <Toast ref={toast} />
      <div className="card card-register">
        <h2>Formulario de Registro</h2>

        {/* inicio del formulario de Registro */}
        <form action="" onSubmit={ handleOnSubmit }>
          <InputRegister title='First Name' type='text' name='Nombre' value={inputs.Nombre} handle={ handleInputsForm }/>
          <InputRegister title='Last Name' type='text' name='Apellido' value={inputs.Apellido} handle={ handleInputsForm }/>
          <InputRegister title='Email' type='Email' name='Email' value={inputs.Email.toLowerCase()} handle={ handleInputsForm }/>
          <InputRegister title='UsuarioRol' type='UsuarioRol' name='UsuarioRol' value={inputs.UsuarioRol} handle={ handleInputsForm }/>
          <InputRegister title='Password' type='Password' name='Password' value={inputs.Password} handle={ handleInputsForm }/>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;