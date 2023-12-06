import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/authContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signIn(email, password);
      navigate('/Home');
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="form-container sign-in">
      <form onSubmit={handleSubmit} className="form">
        <h2>Login</h2>
        <div className="form-group">
          <input
            type="text"
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
        <button type="submit" className="btn">
          Login
        </button>
        <div className="link">
          <p>
            Don't have an account?{' '}
            <Link to="/signup">
              <label htmlFor="slider-one">Sign up</label>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
