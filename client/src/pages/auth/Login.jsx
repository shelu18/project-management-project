// pages/auth/Login.jsx
import { useState } from 'react';
import LoginForm from '../../components/auth/LoginForm';

const LoginPage = () => {
  const [loginData, setLoginData] = useState(null);

  // Temporary onSubmit function to test form
  const handleSubmit = async (data) => {
    try {
      // Simulate API call with 1 second delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted with:', data);
      setLoginData(data);
      // Later this will be replaced with actual API call
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
      
      {/* This section is just for testing - remove it later */}
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