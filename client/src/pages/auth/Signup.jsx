import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SignupForm from '../../components/auth/SignupForm';

const SignupPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data) => {
    try {
      setIsLoading(true);
      setError(null);

      // Validate data before sending
      if (!data || Object.values(data).some(value => !value)) {
        throw new Error('Please fill in all required fields');
      }

      // Send data to the server
      const response = await axios.post('http://localhost:5000/api/users/register', data);

      // Handle successful response
      if (response.status === 201) {
        navigate('/login');
      } else {
        throw new Error('Failed to create account');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup-page">
      {error && <div className="error-message">{error}</div>}
      <SignupForm onSubmit={handleSubmit} isLoading={isLoading} />
    </div>
  );
};

export default SignupPage;