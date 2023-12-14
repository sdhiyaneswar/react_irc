import React, { useState } from 'react';
import './styles.css'; // Import your stylesheet here

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    cpassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} id="form">
        <h1>Registeration Form</h1>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <div className="error"></div>
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="error"></div>
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="error"></div>
        </div>
        <div className="input-group">
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            type="password"
            id="cpassword"
            name="cpassword"
            value={formData.cpassword}
            onChange={handleChange}
          />
          <div className="error"></div>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;