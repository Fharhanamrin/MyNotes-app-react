import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/login.css';
import { register } from "../utils/network-data";
import { Link, useNavigate } from "react-router";
import { useAuth } from '../components/AuthContext';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ButtonLoading, setButtonLoading] = useState(false);
  let navigate = useNavigate();

  const { isAuthenticated, loading } = useAuth();

  useEffect(() => {
    if (loading === false && isAuthenticated) {
      navigate('/');
    }
    return () => {
      
    }
  }, [isAuthenticated, loading, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setButtonLoading(true);
    try {
      const result = await register({ name, email, password });
      if (!result.error) {
        navigate('/login');
      } else {
        alert("Mungkin email atau password salah");
      }
    } catch (error) {
      alert(`Internal Server Error ${error}`);
    } finally {
      setButtonLoading(false);
    }
  };

  return (
    <div onSubmit={handleLogin} className="login-page">
      <form className="login-form">
        <input
          type="text"
          placeholder="Name"
          className="login-input"
          onChange={e => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="login-input"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          onChange={e => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="login-button"
        >
          {ButtonLoading ? 'Loading...' : 'Register'}
        </button>
        <p className='text-grey'>Apa kamu sudah punya akun ? silahkan login <Link to="/login">
          Login
        </Link></p>
      </form>
    </div>
  )
}

RegisterPage.propTypes = {
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool,
};

export default RegisterPage;
