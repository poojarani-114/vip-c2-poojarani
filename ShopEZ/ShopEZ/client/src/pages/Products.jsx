import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../api";
import ProductCard from "../components/ProductCard.jsx";

export default function Products() {
  const [params, setParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("popular");
  const category = params.get("category") || "All";

  useEffect(() => {
    api.get("/products", { params: { category, sort } }).then((r) => setProducts(r.data));
  }, [category, sort]);

  return (
    <div className="products-page">
      <aside className="filters">
        <h3>Filters</h3>
        <label>Sort By</label>
        {["popular","priceAsc","priceDesc","discount"].map((s) => (
          <label key={s} className="radio">
            <input type="radio" checked={sort===s} onChange={()=>setSort(s)} />
            {{popular:"Popular",priceAsc:"Price (low to high)",priceDesc:"Price (high to low)",discount:"Discount"}[s]}
          </label>
        ))}
        <label>Category</label>
        <select value={category} onChange={(e)=>setParams({category:e.target.value})}>
          {["All","Fashion","Electronics","Mobiles","Groceries","Sports Equipments"].map(c=>(
            <option key={c}>{c}</option>
          ))}
        </select>
      </aside>
      <section className="grid">
        <h2>{category === "All" ? "All Products" : category}</h2>
        <div className="card-grid">
          {products.map((p) => <ProductCard key={p._id} p={p} />)}
          {products.length === 0 && <p>No products found.</p>}
        </div>
      </section>
    </div>
  );
}
