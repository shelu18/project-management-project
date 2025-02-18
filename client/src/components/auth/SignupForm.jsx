import { useForm } from 'react-hook-form'; // Handles form state and validation
import { zodResolver } from '@hookform/resolvers/zod'; // Integrates zod for schema-based validation
import { signupSchema } from '../../utils/validation/authSchema'; 
import './SignupForm.css';

const SignupForm = ({ onSubmit, isLoading }) => {
  const {
    register, // Connects form fields to react-hook-form
    handleSubmit, // Wraps the submit function to handle validation
    formState: { errors, isSubmitting }, // Provides validation errors and submission state
    watch, // Observes changes to specified form fields
    setError, // Manually sets errors in the form state
    clearErrors // Clears errors from the form state
  } = useForm({
    resolver: zodResolver(signupSchema), // Uses the zod schema to validate form fields
    defaultValues: { // Initial values for the form fields
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const handleFormSubmit = async (data) => {
    try {
      clearErrors(); // Clears any previous errors before submission
      
      // Remove confirmPassword before sending the data to the backend
      const { confirmPassword, ...submitData } = data;

      // Log the exact data being submitted to the backend
      console.log('Form data being submitted:', submitData);
      
      await onSubmit(submitData); // Call the provided onSubmit function with the form data
    } catch (error) {
      // Set a general error at the root level for submission failure
      setError('root', {
        type: 'manual',
        message: error.message || 'Failed to submit form'
      });

      // Handle field-specific errors from the backend response
      if (error.response?.data?.errors) {
        Object.entries(error.response.data.errors).forEach(([field, message]) => {
          setError(field, {
            type: 'manual',
            message: message
          });
        });
      }

      console.error('Form submission error:', error); // Log the error for debugging
    }
  };

  // Watches the password field to compare it with confirmPassword
  const password = watch('password');

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit(handleFormSubmit)} className="signup-form" noValidate>
        <h2>Create Account</h2>
        
        {/* Display root-level errors */}
        {errors.root && (
          <div className="form-error-message" role="alert">
            {errors.root.message}
          </div>
        )}
        
        {/* Name input field */}
        <div className="form-group">
          <label htmlFor="name"> name</label>
          <input
            type="text"
            id="name"
            {...register('name')} // Registers the input with react-hook-form
            className={errors.name ? 'error' : ''} // Adds error class if validation fails
            disabled={isLoading} // Disables the field while loading
            aria-invalid={errors.name ? 'true' : 'false'} // Accessibility attribute for invalid input
          />
          {errors.name && (
            <span className="error-message" role="alert">{errors.name.message}</span>
          )}
        </div>

        {/* Email input field */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className={errors.email ? 'error' : ''}
            disabled={isLoading}
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          {errors.email && (
            <span className="error-message" role="alert">{errors.email.message}</span>
          )}
        </div>

        {/* Password input field */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register('password')}
            className={errors.password ? 'error' : ''}
            disabled={isLoading}
            aria-invalid={errors.password ? 'true' : 'false'}
          />
          {errors.password && (
            <span className="error-message" role="alert">{errors.password.message}</span>
          )}
        </div>

        {/* Confirm Password input field */}
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            {...register('confirmPassword', {
              validate: value => 
                value === password || "Passwords don't match" // Custom validation to match passwords
            })}
            className={errors.confirmPassword ? 'error' : ''}
            disabled={isLoading}
            aria-invalid={errors.confirmPassword ? 'true' : 'false'}
          />
          {errors.confirmPassword && (
            <span className="error-message" role="alert">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        {/* Submit button */}
        <button 
          type="submit" 
          disabled={isLoading || isSubmitting} // Prevents multiple submissions
          className={isLoading || isSubmitting ? 'loading' : ''}
        >
          {isLoading || isSubmitting ? 'Creating Account...' : 'Sign Up'} {/* Button text based on loading state */}
        </button>

        {/* Link to the login page */}
        <p className="login-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
