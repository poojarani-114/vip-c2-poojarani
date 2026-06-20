import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../api";

export default function Checkout() {
  const { state } = useLocation();
  const nav = useNavigate();
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");

  if (!state?.items) { nav("/cart"); return null; }

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/orders", {
      items: state.items, totalAmount: state.total, address, paymentMethod
    });
    alert("Order placed! Confirmation sent.");
    nav("/profile");
  };

  return (
    <form className="auth" onSubmit={submit}>
      <h2>Order Details</h2>
      <p>Total: <strong>₹{state.total}</strong></p>
      <textarea required placeholder="Shipping address" value={address} onChange={(e)=>setAddress(e.target.value)} />
      <label>Payment Method</label>
      <select value={paymentMethod} onChange={(e)=>setPaymentMethod(e.target.value)}>
        <option>Cash on Delivery</option>
        <option>UPI</option>
        <option>Credit/Debit Card</option>
        <option>Net Banking</option>
      </select>
      <button>Place Order</button>
    </form>
  );
}
