import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

export default function AdminNewProduct() {
  const [f, setF] = useState({ name:"", description:"", price:0, discount:0, category:"Fashion", image:"", stock:100 });
  const nav = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    await api.post("/products", { ...f, price: Number(f.price), discount: Number(f.discount), stock: Number(f.stock) });
    nav("/admin/products");
  };
  return (
    <form className="auth" onSubmit={submit}>
      <h2>New Product</h2>
      <input placeholder="Name" value={f.name} onChange={(e)=>setF({...f,name:e.target.value})} required />
      <textarea placeholder="Description" value={f.description} onChange={(e)=>setF({...f,description:e.target.value})} />
      <input type="number" placeholder="Price" value={f.price} onChange={(e)=>setF({...f,price:e.target.value})} required />
      <input type="number" placeholder="Discount %" value={f.discount} onChange={(e)=>setF({...f,discount:e.target.value})} />
      <select value={f.category} onChange={(e)=>setF({...f,category:e.target.value})}>
        {["Fashion","Electronics","Mobiles","Groceries","Sports Equipments"].map(c=><option key={c}>{c}</option>)}
      </select>
      <input placeholder="Image URL" value={f.image} onChange={(e)=>setF({...f,image:e.target.value})} />
      <input type="number" placeholder="Stock" value={f.stock} onChange={(e)=>setF({...f,stock:e.target.value})} />
      <button>Create Product</button>
    </form>
  );
}
