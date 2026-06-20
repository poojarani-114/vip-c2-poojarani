import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";
import { useAuth } from "../context/AuthContext.jsx";

export default function ProductDetails() {
  const { id } = useParams();
  const [p, setP] = useState(null);
  const { user } = useAuth();
  const nav = useNavigate();

  useEffect(() => { api.get(`/products/${id}`).then((r) => setP(r.data)); }, [id]);

  const addToCart = async () => {
    if (!user) return nav("/login");
    await api.post("/cart", { productId: id, quantity: 1 });
    nav("/cart");
  };

  if (!p) return <p>Loading…</p>;
  return (
    <div className="details">
      <img src={p.image || "https://via.placeholder.com/400"} alt={p.name} />
      <div>
        <h2>{p.name}</h2>
        <p className="muted">{p.category}</p>
        <p>{p.description}</p>
        <h3>₹{p.price} {p.discount>0 && <span className="discount">{p.discount}% off</span>}</h3>
        <p>Rating: {p.rating} ★ | In stock: {p.stock}</p>
        <button className="btn" onClick={addToCart}>Add to Cart</button>
        <button className="btn-secondary" onClick={()=>nav("/checkout", { state:{ items:[{productId:p._id,name:p.name,price:p.price,quantity:1}], total:p.price }})}>Shop Now</button>
      </div>
    </div>
  );
}
