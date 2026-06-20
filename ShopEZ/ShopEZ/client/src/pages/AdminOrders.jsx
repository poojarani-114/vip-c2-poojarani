import { useEffect, useState } from "react";
import api from "../api";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => { api.get("/orders").then((r)=>setOrders(r.data)); }, []);
  return (
    <div>
      <h2>All Orders</h2>
      {orders.map(o => (
        <div key={o._id} className="order">
          <p><strong>#{o._id.slice(-6)}</strong> — {o.userId?.username} ({o.userId?.email})</p>
          <p>₹{o.totalAmount} — {o.status} — {o.paymentMethod}</p>
          <p className="muted">{o.address} | {new Date(o.createdAt).toLocaleString()}</p>
          <ul>{o.items.map((it,i)=><li key={i}>{it.name} × {it.quantity}</li>)}</ul>
        </div>
      ))}
    </div>
  );
}
