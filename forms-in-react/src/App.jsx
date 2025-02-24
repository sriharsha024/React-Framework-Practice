import React, { useEffect } from 'react';
import './App.css';
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const watchedName = watch('name');
  const watchedEmail = watch('email');
  const watchedPassword = watch('password');
  const watchedConfirmPassword = watch('confirmPassword');

  useEffect(() => {
    console.log(`Name: ${watchedName}`);
  }, [watchedName]);

  useEffect(() => {
    console.log(`Email: ${watchedEmail}`);
  }, [watchedEmail]);

  return (
    <div className="App-container">
      <h1>Forms in React</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name:</label>
        <input {...register('name', { 
          required: 'Name is required', 
          minLength: { value: 2, message: 'Name is required with at least 2 letters' },
          validate: value => value !== 'admin' || 'Name should not be admin',
          validate: value => !/\d/.test(value) || 'Name should not contain numbers'
        })} />
        {errors.name && <p>{errors.name.message}</p>}
        <br />
        <label>Email:</label>
        <input {...register('email', { 
          required: 'Email is required', 
          pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: 'Email is required and should be a valid email address' }
        })} />
        {errors.email && <p>{errors.email.message}</p>}
        <br />
        <label>Password:</label>
        <input {...register('password', { 
          required: 'Password is required', 
          minLength: { value: 6, message: 'Password is required with at least 6 characters' }
        })} type="password" />
        {errors.password && <p>{errors.password.message}</p>}
        <br />
        <label>Confirm Password:</label>    
        <input {...register('confirmPassword', { 
          required: 'Confirm Password is required', 
          validate: value => value === watchedPassword || 'Passwords do not match'
        })} type="password" className={watchedConfirmPassword && watchedConfirmPassword !== watchedPassword ? 'input-error' : 'input-success'} />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;