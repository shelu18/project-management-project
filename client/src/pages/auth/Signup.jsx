// pages/auth/Signup.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupForm from '../../components/auth/SignupForm';

const SignupPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async (data) => {
    try {
      // Reset any previous errors
      setError(null);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Log the data (for testing purposes)
      console.log('Form submitted with:', data);
      
      // For testing: show success and redirect
      alert('Account created successfully!');
      navigate('/login');
      
      // Later this will be replaced with actual API call:
      // const response = await axios.post('/api/auth/signup', data);
      // handle response...
      
    } catch (err) {
      setError(err.message || 'Something went wrong during signup');
      console.error('Signup error:', err);
    }
  };

  return (
    <div className="signup-page">
      {error && (
        <div className="error-alert">
          {error}
        </div>
      )}
      <SignupForm onSubmit={handleSubmit} />
    </div>
  );
};

export default SignupPage;