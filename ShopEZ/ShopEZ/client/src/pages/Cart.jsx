import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

export default function Cart() {
  const [cart, setCart] = useState({ items: [] });
  const nav = useNavigate();

  const load = () => api.get("/cart").then((r) => setCart(r.data));
  useEffect(() => { load(); }, []);

  const remove = async (pid) => { await api.delete(`/cart/${pid}`); load(); };

  const total = cart.items.reduce((s,i)=> s + (i.productId?.price||0)*i.quantity, 0);

  const checkout = () => {
    const items = cart.items.map(i => ({
      productId: i.productId._id, name: i.productId.name, price: i.productId.price, quantity: i.quantity
    }));
    nav("/checkout", { state: { items, total } });
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.items.length === 0 ? <p>Cart is empty.</p> : (
        <>
          <table className="table">
            <thead><tr><th>Product</th><th>Price</th><th>Qty</th><th>Subtotal</th><th></th></tr></thead>
            <tbody>
              {cart.items.map((i) => (
                <tr key={i.productId?._id}>
                  <td>{i.productId?.name}</td>
                  <td>₹{i.productId?.price}</td>
                  <td>{i.quantity}</td>
                  <td>₹{(i.productId?.price||0)*i.quantity}</td>
                  <td><button onClick={()=>remove(i.productId._id)}>Remove</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total: ₹{total}</h3>
          <button className="btn" onClick={checkout}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
}
