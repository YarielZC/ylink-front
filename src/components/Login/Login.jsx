
import React from "react";
import './Login.css'
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
    console.log('Logueando', data);
  };

  return (

    <div className='login-container'>
      <Card className='login-card'>

        <form className='form' onSubmit={handleSubmit(onSubmit)}>

          <Input className='login-input'
            error={errors.email_username}
            label={'Email or Username'}
            type='text'
            placeholder='Username or email'
            {...register('email_username', { required: 'This field is required', minLength: { value: 4, message: 'Minimum 4 characters' } })}
          />

          <Input className='login-input'
            error={errors.password}
            label={'Password'}
            type='password'
            placeholder='. . . . . . . . . .'
            {...register('password', {
              required: 'This field is required',
              minLength: {
                value: 8,
                message: 'Minimum 8 characters'
              },
              pattern: {
                value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).+$/,
                message: 'Must contain at least one uppercase letter, one number, and one special character'
              },
              validate: {
                noSpaces: value => !/\s/.test(value) || 'Spaces are not allowed',
              }
            })}

          />


          <Button className='login-button' type='submit'>Sign in</Button>
        </form>

        <p className='login-signup-p'>Don’t have an account? <a href='/login'> Sign up for free </a></p>

      </Card>
    </div>

  );

}
export default Login

