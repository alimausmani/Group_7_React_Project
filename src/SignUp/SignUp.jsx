import  { useState } from 'react';
import axios from 'axios';
import './SignUp.css'; 
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
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
      const response = await axios.post('http://localhost:3000/api/createuser', {
        name: formData.name,
        email: formData.email,
        password: formData.password
      }, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      console.log(response);
      alert('Signup successful!');
      navigate('/login');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <div className="signup-box">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
            <label>Name</label>
          </div>
          <div className="input-box">
            <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
            <label>Email</label>
          </div>
          <div className="input-box">
            <input type="password" name="password" value={formData.password} onChange={handleChange} required/>
            <label>Password</label>
          </div>
          <button type="submit" className="btn">Signup</button>
          <div className="signup-link">
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
