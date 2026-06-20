import { Link } from "react-router-dom";
export default function AdminDashboard() {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div className="admin-grid">
        <Link to="/admin/products" className="tile">All Products</Link>
        <Link to="/admin/products/new" className="tile">New Product</Link>
        <Link to="/admin/orders" className="tile">All Orders</Link>
      </div>
    </div>
  );
}
