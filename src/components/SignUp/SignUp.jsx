import { useForm } from "react-hook-form"
import Card from "../Card/Card";
import { IconUserFilled, IconAt, IconLockFilled } from "@tabler/icons-react";
import './SignUp.css'
import Input from "../Input/Input";
import { apiFetch } from "../../services/api";

const SignUp =()=>{
 const{
  register,
  handleSubmit,
  formState: {errors}
 }=useForm();

const onSubmit = async (data) => {
  try {
    const userData = {
      username: data.username,
      email: data.email,
      password: data.password
    };

    const response = await apiFetch('/users', {
      method: 'POST',
      body: JSON.stringify(userData)
    });

      console.log("Respuesta del servidor:", response);


  } catch (error) {
    console.error("Algo salió mal:", error);
    alert("Error al registrar. Por favor, inténtalo de nuevo.");
  }
};

 return(
  <div className="signup-container">
    <Card className="signup-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={"Username"}
            type="text"
            inputIcon={<IconUserFilled/>}
            placeholder="johndoe"
            name="username"
            {...register("username",{
              required: "This field is required",
              minLength: {
                value: 3,
                message: "Minimum 3 characters"
              },
              maxLength:{
                value: 18,
                message: "Maximum 18 characters"
              }
            })}
            error={errors.username}
        />

              <Input
                label={"Email Address"}
                type="email"
                inputIcon={<IconAt/>}
                placeholder="name@company.com"
                name="email"
                {...register("email",{
                  required:"This field is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "The email format is incorrect (e.g., hola@ylink.com)"
                  }
                })}
                error={errors.email}
              />

              <Input
                label={"Password"}
                type="password"
                inputIcon={<IconLockFilled/>}
                placeholder="Create a password"
                name="password"
                {...register("password",{
                  required:"This field is required",
                  minLength:{
                    value:6,
                    message:"Minimum 6 characters"
                  },
                  maxLength:{
                    value:20,
                    message:"Maximum 20 characters"
                  }
                })}
                error={errors.password}
              />

        <button type="submit" className="signup-btn">
          Sign Up
        </button>

      </form>
    </Card>
  </div>
 )


}

export default SignUp;