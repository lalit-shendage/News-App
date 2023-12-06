import React, { useState } from 'react';
import { UserAuth } from '../../context/authContext';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { createUser } = UserAuth();

  const handleSignupSubmit = async (event) => {
    event.preventDefault();

    try {
      const additionalInfo = {
        defaultCountry: country,
        defaultCategory: category,
      };

      await createUser(email, password);
      console.log(email, password, country, category);
      
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form-container sign-up">
      <form onSubmit={handleSignupSubmit} className="form">
        <h2>Sign up</h2>

        <div className="form-group">
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="form-group">
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          >
            <option value="">Select Country</option>
            <option value="in">India</option>
            <option value="us">USA</option>
            <option value="gb">United Kingdom</option>
          </select>
        </div>
        <div className="form-group">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="general">General</option>
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="health">Health</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
          </select>
        </div>
        <button type="submit" className="btn">
          Sign up
        </button>
        <div className="link">
          <p>
            Already have an account?{' '}
            <Link to="/">
              <label htmlFor="slider-one">Sign in</label>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
