import { useState } from 'react';

import TextField from './TextField';

const initialUserData = {
  name: '',
  password: '',
};

const AuthForm = () => {
  const [userData, setUserData] = useState(initialUserData);
  const [isLoginOrRegister, setIsLoginOrRegister] = useState('register');

  const onChangeAuthType = () => {
    setIsLoginOrRegister(
      isLoginOrRegister === 'register' ? 'login' : 'register',
    );
  };

  const onChangeUserData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmitUserData = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(userData);

    setUserData(initialUserData);
  };

  return (
    <form
      onSubmit={onSubmitUserData}
      className='flex flex-col gap-4 w-72 px-10 py-6 rounded-md bg-white shadow-md shadow-gray-300'
    >
      <h1 className='mb-5 text-center text-xl font-semibold text-gray-500'>
        {isLoginOrRegister === 'register' ? 'Sign up form' : 'Login form'}
      </h1>

      <TextField
        placeholder='Name'
        name='name'
        value={userData.name}
        onChange={onChangeUserData}
      />

      <TextField
        type='password'
        placeholder='Password'
        name='password'
        value={userData.password}
        onChange={onChangeUserData}
      />

      <button
        type='submit'
        className='px-4 py-2 rounded-md font-semibold text-white bg-blue-500'
      >
        {isLoginOrRegister === 'register' ? 'Register' : 'Login'}
      </button>

      <p className='text-center'>
        {isLoginOrRegister === 'register'
          ? 'Is already a registered?'
          : 'Dont have an account?'}

        <button
          className='ml-1 underline underline-offset-2'
          onClick={onChangeAuthType}
        >
          {isLoginOrRegister === 'register' ? 'Login here' : 'Register here'}
        </button>
      </p>
    </form>
  );
};

export default AuthForm;
