import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000';

function Label({ children }) {
  return <div className="label">{children}</div>;
}

function Field({ label, children }) {
  return (
    <div>
      <Label>{label}</Label>
      {children}
    </div>
  );
}

export default function Login() {
  const [form, setForm] = useState({
    role: 'charter',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      console.log('Sign In payload:', form); // Debug payload
      const res = await fetch(`${API_BASE}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
  // Persist token & user
  localStorage.setItem('token', data.token);
  localStorage.setItem('user', JSON.stringify(data.user));
  navigate('/fixture');
      } else {
        console.error('Server response:', data);
        alert('Error: ' + (data.error || 'Unknown server error'));
      }
    } catch (error) {
      console.error('Fetch error:', error.message);
      alert('Error: Failed to connect to server');
    }
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    try {
      console.log('Create Account payload:', form); // Debug payload
      const res = await fetch(`${API_BASE}/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
  localStorage.setItem('token', data.token);
  localStorage.setItem('user', JSON.stringify(data.user));
  navigate('/fixture');
      } else {
        console.error('Server response:', data);
        alert('Error: ' + (data.error || 'Unknown server error'));
      }
    } catch (error) {
      console.error('Fetch error:', error.message);
      alert('Error: Failed to connect to server');
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!form.email) {
      alert('Please enter your email to reset password');
      return;
    }
    try {
      console.log('Forgot Password payload:', { email: form.email }); // Debug payload
      // Placeholder fetch call (backend not implemented)
      const res = await fetch(`${API_BASE}/api/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email }),
      });
      const data = await res.json();
      if (res.ok) {
        alert('Password reset link sent! Check your email.'); // Placeholder success message
      } else {
        console.error('Server response:', data);
        alert('Error: ' + (data.error || 'Unknown server error'));
      }
    } catch (error) {
      console.error('Fetch error:', error.message);
      alert('Error: Failed to connect to server');
    }
  };

  return (
    <div className="container mx-auto max-w-2xl p-4">
      <div className="panel bg-white shadow-md rounded-lg p-6">
        <h1 className="h1 text-2xl font-bold mb-6 text-center">Login</h1>
        <form>
          <div className="row mb-4">
            <Field label="Role">
              <select
                name="role"
                value={form.role}
                onChange={onChange}
                className="input w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="charter">Charter</option>
                <option value="ship_owner">Ship Owner</option>
              </select>
            </Field>
          </div>
          <div className="row mb-4">
            <Field label="Email">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="example@domain.com"
                className="input w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </Field>
          </div>
          <div className="row mb-6">
            <Field label="Password">
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={onChange}
                placeholder="Enter your password"
                className="input w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </Field>
          </div>
          <div className="flex flex-col gap-4">
            <button
              type="submit"
              onClick={handleSignIn}
              className="btn w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={handleCreateAccount}
              className="btn w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Create Account
            </button>
            <a
              href="#"
              onClick={handleForgotPassword}
              className="text-blue-600 hover:underline text-center"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}