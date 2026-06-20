import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Navbar() {
  const { user, logout } = useAuth();
  const nav = useNavigate();
  return (
    <nav className="navbar">
      <Link to="/" className="logo">ShopEZ{user?.userType === "admin" && " (admin)"}</Link>
      <input className="search" placeholder="Search Electronics, Fashion, mobiles, etc.," />
      <div className="nav-links">
        <Link to="/products">Products</Link>
        {user?.userType === "admin" && <Link to="/admin">Dashboard</Link>}
        {user ? (
          <>
            <Link to="/cart">Cart</Link>
            <Link to="/profile">{user.username}</Link>
            <button onClick={() => { logout(); nav("/"); }}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
