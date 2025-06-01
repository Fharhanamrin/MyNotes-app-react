import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/login.css';
import { login, putAccessToken } from "../utils/network-data";
import { Link, useNavigate } from "react-router";
import { useAuth } from '../components/AuthContext';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [buttonLoading, setbuttonLoading] = useState(false);
    let navigate = useNavigate();

    const { isAuthenticated, loading, checkAuthStatus } = useAuth();

    useEffect(() => {
        if (loading == false && isAuthenticated) {
            navigate('/');
        }
        return () => {

        }
    }, [isAuthenticated, loading]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setbuttonLoading(true);

        try {
            const result = await login({ email, password });
            if (!result.error) {
                putAccessToken(result.data.accessToken);
                checkAuthStatus();
            } else {
                alert("Mungkin email atau password salah");
            }
        } catch (error) {
            alert(`Internal Server Error ${error}`);
        } finally {
            setbuttonLoading(false);
        }
    };
    return (
        <div onSubmit={handleLogin} className="login-page">
            <form className="login-form">
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
                    {buttonLoading ? 'Loading...' : 'Login'}
                </button>
                <p className='text-grey'>Apa kamu belom punya akun ? silahkan register dahulu <Link to="/register">
                    Register
                </Link></p>
            </form>
        </div>
    )
}

LoginPage.propTypes = {
    isAuthenticated: PropTypes.bool,
    loading: PropTypes.bool,
    checkAuthStatus: PropTypes.func
};
