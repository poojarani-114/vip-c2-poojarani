import { Link } from "react-router-dom";

export default function ProductCard({ p }) {
  return (
    <div className="card">
      <img src={p.image || "https://via.placeholder.com/200"} alt={p.name} />
      <h4>{p.name}</h4>
      <p className="muted">{p.category}</p>
      <p>
        <strong>₹{p.price}</strong>
        {p.discount > 0 && <span className="discount"> {p.discount}% off</span>}
      </p>
      <Link to={`/products/${p._id}`} className="btn">Shop Now</Link>
    </div>
  );
}
