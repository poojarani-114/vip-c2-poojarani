import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const load = () => api.get("/products").then((r)=>setProducts(r.data));
  useEffect(() => { load(); }, []);
  const del = async (id) => { if(confirm("Delete?")){ await api.delete(`/products/${id}`); load(); } };
  return (
    <div>
      <h2>All Products</h2>
      <Link to="/admin/products/new" className="btn">+ New Product</Link>
      <table className="table">
        <thead><tr><th>Name</th><th>Category</th><th>Price</th><th>Stock</th><th></th></tr></thead>
        <tbody>{products.map(p=>(
          <tr key={p._id}><td>{p.name}</td><td>{p.category}</td><td>₹{p.price}</td><td>{p.stock}</td>
          <td><button onClick={()=>del(p._id)}>Delete</button></td></tr>
        ))}</tbody>
      </table>
    </div>
  );
}
