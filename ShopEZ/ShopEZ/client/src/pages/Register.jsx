import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";
import { useAuth } from "../context/AuthContext.jsx";

export default function Register() {
  const [form, setForm] = useState({ username:"", email:"", password:"", userType:"customer" });
  const [err, setErr] = useState("");
  const { login } = useAuth();
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/auth/register", form);
      login(data);
      nav(data.user.userType === "admin" ? "/admin" : "/");
    } catch (e) { setErr(e.response?.data?.message || "Registration failed"); }
  };

  return (
    <form className="auth" onSubmit={submit}>
      <h2>Register</h2>
      <input placeholder="Username" value={form.username} onChange={(e)=>setForm({...form,username:e.target.value})} />
      <input placeholder="Email address" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} />
      <input type="password" placeholder="Password" value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})} />
      <label>User type</label>
      <select value={form.userType} onChange={(e)=>setForm({...form,userType:e.target.value})}>
        <option value="customer">Customer</option>
        <option value="admin">Admin</option>
      </select>
      <button>Register</button>
      {err && <p className="error">{err}</p>}
      <Link to="/login">Already registered? Login</Link>
    </form>
  );
}
