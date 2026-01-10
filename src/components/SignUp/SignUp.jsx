import { useForm } from "react-hook-form"

const SignUp =()=>{
 const{
  register,
  handleSubmit,
  formState: {errors}
 }=useForm();

 const onSubmit = (data) =>{
  console.log("Registrando", data)
 }

 return(
  <div className="signup-form">
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="username">Nombre de usuario</label>
        <input 
          id="username"
          type="text"
          placeholder="Escribe tu nombre de usuario"
          {...register("username",{
            required: "Este campo es obligatorio",
            minLength: {
             value: 3,
              message: "Mínimo 3 caracteres"
            },
            maxLength:{
              value: 18,
              message: "Máximo 18 caracteres"
            }
          })}
        />
        error={errors.username}
      </div>

      <div className="form-group">
        <label htmlFor="email">Correo electrónico</label>
        <input
          id="email"
          type="email"
          placeholder="Ingrese su correo electrónico"
          {...register("email",{
            required:"Este campo es obligatorio"
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "El formato del email no es correcto (ej: hola@ylink.com)"
            }
          })}
          />
          error={errors.email}
      </div>

      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          placeholder="Ingresa tu contraseña"
          {...register("password",{
            required:"Este campo es obligatorio",
            minLength:{
              value:6,
              message:"Mínimo 6 caracteres"
            },
            maxLength:{
              value:20,
              message:"Máximo 20 caracteres"
            }
          })}
        />
        error={errors.password}
      </div>

      <button type="signup" className="signup-btn">
        SignUp
      </button>

    </form>
  </div>
 )


}

export default SignUp;