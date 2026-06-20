import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

export default function Home() {
const [admin, setAdmin] = useState({ categories: [], banner: "" });
const [products, setProducts] = useState([]);

useEffect(() => {
api.get("/admin").then((r) => setAdmin(r.data));
api.get("/products").then((r) => setProducts(r.data.slice(0, 8)));
}, []);

const categoryImages = {
Fashion:
"https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
Electronics:
"https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg",
Mobiles:
"https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg",
Groceries:
"https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg",
"Sports Equipments":
"https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
};

return ( <div>
{/* HERO BANNER */}
<div
className="banner"
style={{
backgroundImage:
"linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.4)),url('https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg')",
backgroundSize: "cover",
backgroundPosition: "center",
color: "#fff",
}}
> <div> <h1>MEGA SALE 2026</h1> <p>Up to 70% OFF on Electronics, Fashion & Mobiles</p> <Link to="/products" className="btn-hero">
SHOP NOW </Link> </div> </div>
  {/* CATEGORY CARDS */}
  <h2 className="section-title">Shop By Category</h2>

  <div className="category-grid">
    {admin.categories.map((c) => (
      <Link
        key={c}
        to={`/products?category=${encodeURIComponent(c)}`}
        className="category-card"
      >
        <img src={categoryImages[c]} alt={c} />
        <h3>{c}</h3>
      </Link>
    ))}
  </div>

  {/* FEATURED PRODUCTS */}
  <h2 className="section-title">🔥 Featured Products</h2>

  <div className="products-grid">
    {products.map((p) => (
      <div key={p._id} className="product-card">
        <img
          src={p.image}
          alt={p.name}
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/300x300?text=Product";
          }}
        />

        <h3>{p.name}</h3>

        <p className="price">
          ₹{p.price.toLocaleString()}
        </p>

        <p>{p.discount}% OFF</p>

        <p>⭐ {p.rating}</p>

        <Link
          to="/products"
          className="btn-hero"
        >
          View Product
        </Link>
      </div>
    ))}
  </div>
</div>
);
}
