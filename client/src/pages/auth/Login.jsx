// pages/auth/Login.jsx
import { useState } from 'react';
import axios from 'axios';
import LoginForm from '../../components/auth/LoginForm';

const LoginPage = () => {
  const [loginData, setLoginData] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (data) => {
    try {
      // Call the login API with the provided data
      const response = await axios.post('http://localhost:5000/api/users/login', data);

      // Save the token and clear the error message
      const token = response.data.token;
      console.log('JWT Token:', token);

      // Optionally store the token in localStorage for future use
      localStorage.setItem('token', token);

      // Update state with submitted data for testing
      setLoginData(data);
      setError('');
    } catch (err) {
      // Handle errors
      console.error('Login error:', err.response?.data?.message || err.message);
      setError(err.response?.data?.message || 'An error occurred during login.');
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />

      {/* Display error message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* This section is for testing - remove it later */}
      {loginData && (
        <div style={{ marginTop: '20px', padding: '20px' }}>
          <h3>Submitted Data (for testing):</h3>
          <pre>{JSON.stringify(loginData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
