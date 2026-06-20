import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";
import { useAuth } from "../context/AuthContext.jsx";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");
  const { login } = useAuth();
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/auth/login", form);
      login(data);
      nav(data.user.userType === "admin" ? "/admin" : "/");
    } catch (e) { setErr(e.response?.data?.message || "Login failed"); }
  };

  return (
    <form className="auth" onSubmit={submit}>
      <h2>Login</h2>
      <input placeholder="Email address" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} />
      <input type="password" placeholder="Password" value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})} />
      <button>Login</button>
      {err && <p className="error">{err}</p>}
      <Link to="/register">New here? Register</Link>
    </form>
  );
}
