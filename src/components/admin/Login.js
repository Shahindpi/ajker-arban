import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from './../../assets/images/ajker-arban-1.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Access the navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
        const response = await fetch('http://127.0.0.1:8000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Failed to login');
        }

        const data = await response.json();

        // Assuming the server returns a 'message' property for unsuccessful logins
        if (data.message) {
            throw new Error(data.message);
        }

        const token = data.token;
        localStorage.setItem('token', token);
        // Redirect upon successful login
        navigate('/dashboard'); // Replace '/dashboard' with your desired route
    } catch (error) {
        console.error('Login error:', error);
        setError(error.message || 'Invalid email or password');
    } finally {
        setIsLoading(false);
    }
};

  return (
    <div className="login-wrapper">
      <div className="login-wrapper__content">
          <div className="login-wrapper__content--title">Login to <img src={logo} alt="Ajker Arban" /></div>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
              <div className="form-wrap">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              </div>
              <div className="form-wrap">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              </div>
              <div className="form-wrap">
                {!isLoading ? (
                  <button type="submit">Login</button>
                ) : (
                  <button type="button" disabled>Loading...</button>
                )}
              </div>
          </form>
      </div>
  </div>
  );
};

export default Login;
