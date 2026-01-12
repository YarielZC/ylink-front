import { useForm } from "react-hook-form"
import Card from "../Card/Card";
import { IconUserFilled, IconAt, IconLockFilled } from "@tabler/icons-react";
import './SignUp.css'
import Input from "../Input/Input";

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
  <div className="signup-container">
    <Card className="signup-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
              <Input
                label={"Username"}
                type="text"
                inputIcon={<IconUserFilled size={18}/>}
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
        </div>

        <div className="form-group">
              <Input
                label={"Email Address"}
                type="email"
                inputIcon={<IconAt size={18}/>}
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
        </div>

        <div className="form-group">
              <Input
                label={"Password"}
                type="password"
                inputIcon={<IconLockFilled size={18}/>}
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
        </div>

        <button type="submit" className="signup-btn">
          Sign Up
        </button>

      </form>
    </Card>
  </div>
 )


}

export default SignUp;