import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../Context/User';

function UserForm() {
  const { handleAuth } = useContext(UserContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({});
  const [loginToggle, setLoginToggle] = useState(false);

  const handleForm = () => {
    setLoginToggle(!loginToggle);
  };

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAuth(loginToggle, form).finally(() => {
      setForm({});
      e.target.reset();
      navigate('/');
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={form.name || ''}
          name="name"
          disabled={loginToggle}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          value={form.email || ''}
          name="email"
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          value={form.password || ''}
          name="password"
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
      <label>
        <input type="checkbox" onChange={handleForm} />
        <span>{loginToggle ? 'Back to registration' : 'To login'}</span>
      </label>
    </div>
  );
}

export default UserForm;
