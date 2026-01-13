import React from "react";
import Card from "../Card/Card";
import Input from '../Input/Input';
import Button from '../Button/Button.jsx';
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Logueando", data);
  };

  return (
    <>
      <h1>Welcome back</h1>
      <p>Sign in to manage your links and analytics</p>

      <Card>


        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Email or Username
              <Input
                type="text"
                placeholder="Username or email"
                {...register("emailOrUsername", { required: "Este campo es obligatorio" })}
              />
            </label>
            {errors.emailOrUsername && <p style={{ color: "red" }}>{errors.emailOrUsername.message}</p>}
          </div>


          <label>Password
            <Input
              type="password"
              placeholder=". . . . . . . ."
              {...register("password", {
                required: "Este campo es obligatorio",
                minLength: {
                  value: 8,
                  message: "La contraseña debe tener al menos 8 caracteres"
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d).+$/,
                  message: "Debe contener al menos una mayúscula y un número"
                },
                validate: {
                  noSpaces: value => !/\s/.test(value) || "No debe contener espacios",
                  specialChar: value => /[!@#$%^&*(),.?":{}|<>]/.test(value) || "Debe contener al menos un carácter especial"
                }
              })}
              onChange={(e) => {
                // Puedes agregar lógica adicional aquí si necesitas
                console.log("Contraseña cambiada:", e.target.value);
              }}
            />
          </label>
          {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}

          <Button type="submit">Sign in</Button>
        </form>

        <p>Don’t have an account? Sign up for free</p>


      </Card>
    </>
  );


}
export default Login