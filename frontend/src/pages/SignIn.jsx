import React, { useState } from 'react';
import axios from 'axios';

export default function SignIn() {
  const [groupId, setGroupId] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post(
        'http://localhost:8000/api/user/sign-in', // Use relative path
        {
          groupid: groupId,
          password: password,
        }
      );
      setData(response.data.message);
      setError(''); // Clear any previous errors
    } catch (error) {
      if (error.response) {
        setData('');
        setError(error.response.data.message); // Set error message from server
      } else {
        console.error('Error during login:', error);
        setError('An error occurred. Please try again.'); // Set a general error message
      }
    }
  };

  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-r from-red-400 to-red-600'>
      <form
        onSubmit={handleSubmit}
        className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'
      >
        <h2 className='text-2xl font-semibold mb-6 text-center text-gray-700'>
          Sign In
        </h2>

        <div className='mb-4'>
          <label
            htmlFor='groupId'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            Group ID
          </label>
          <input
            type='text'
            id='groupId'
            value={groupId}
            onChange={(e) => setGroupId(e.target.value)}
            className='mt-1 block w-full border border-gray-300 rounded-md p-3 transition duration-200 focus:outline-none focus:ring focus:ring-red-400'
            required
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='password'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            Password
          </label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='mt-1 block w-full border border-gray-300 rounded-md p-3 transition duration-200 focus:outline-none focus:ring focus:ring-red-400'
            required
          />
        </div>

        <button
          type='submit'
          className='w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-200'
        >
          Sign In
        </button>

        {data && <p className='text-green-600 mt-4 text-center'>{data}</p>}
        {error && <p className='text-red-600 mt-4 text-center'>{error}</p>}
      </form>
    </div>
  );
}
