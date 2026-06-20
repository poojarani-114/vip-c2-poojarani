import { useEffect, useState } from "react";
import api from "../api";
import { useAuth } from "../context/AuthContext.jsx";

export default function Profile() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => { api.get("/orders/me").then((r)=>setOrders(r.data)); }, []);
  return (
    <div>
      <h2>Profile</h2>
      <p><strong>{user.username}</strong> — {user.email}</p>
      <h3>Your Orders</h3>
      {orders.length === 0 ? <p>No orders yet.</p> : orders.map(o => (
        <div key={o._id} className="order">
          <p><strong>#{o._id.slice(-6)}</strong> — ₹{o.totalAmount} — {o.status}</p>
          <p className="muted">{o.address} | {o.paymentMethod} | {new Date(o.createdAt).toLocaleString()}</p>
          <ul>{o.items.map((it,i)=><li key={i}>{it.name} × {it.quantity} — ₹{it.price}</li>)}</ul>
        </div>
      ))}
    </div>
  );
}
