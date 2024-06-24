import { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ name: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/loginuser', {
        name: formData.name,
        password: formData.password
      }, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });

      const data = response.data;
      console.log(data);
      if (!data.success) {
        alert('Enter valid credentials');
      } else {
        alert('Login successful!');
        localStorage.setItem('authToken', data.authToken);
        navigate('/');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error logging in. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input type="email" name="name" required value={formData.name} onChange={handleChange} />
            <label>Email</label>
          </div>
          <div className="input-box">
            <input type="password" name="password" required value={formData.password} onChange={handleChange} />
            <label>Password</label>
          </div>
          <div className="forgot-pass">
            <a href="#">Forgot your password?</a>
          </div>
          <button type="submit" className="btn">Login</button>
          <div className="signup-link">
            <p>Have no account yet? <Link to="/signup">Signup</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
