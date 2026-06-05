import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminTable } from '../../../../Components/AdminTable/AdminTable';
import { Basebutton } from '../../../../Components/button/button';
import './ProductInventory.css';

const dummyProducts = [
  { id: 1, name: "Nexus Chrono X1", sku: "NEX-WTC-001", category: "Accessories", price: "$249.00", stock: 12, status: "low stock" },
  { id: 2, name: "AudioSphere Elite", sku: "AUD-HDP-142", category: "Electronics", price: "$399.00", stock: 156, status: "in stock" },
  { id: 3, name: "Velocity Runner S", sku: "SHOE-RUN-99", category: "Footwear", price: "$125.00", stock: 0, status: "out of stock" },
  { id: 4, name: "InstaNow Pro 5", sku: "CAM-INST-03", category: "Electronics", price: "$89.00", stock: 45, status: "in stock" },
];

const columns = [
  { key: "name", label: "Product" },
  { key: "sku", label: "SKU" },
  { key: "category", label: "Category" },
  { key: "price", label: "Price" },
  { key: "stock", label: "Stock" },
  { key: "status", label: "Status" },
];

export const ProductInventory = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const filtered = dummyProducts.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.sku.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="inventory">

      {/* Header */}
      <div className="inventory__header">
        <h1 className="inventory__title">Inventory</h1>
        <div className="inventory__header-actions">
          <input
            type="text"
            className="inventory__search"
            placeholder="Search products, SKUs, or categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Basebutton
            backgroundColor="#6366f1"
            color="#ffffff"
            width="auto"
            onClick={() => navigate('/admin/products/create')}
          >
            + Add Product
          </Basebutton>
        </div>
      </div>

      {/* Table */}
      <AdminTable
        columns={columns}
        data={filtered}
        nav="admin"
        onEdit={(row) => navigate(`/admin/products/edit/${row.id}`)}
        onDelete={(row) => console.log("Delete:", row.name)}
      />

      {/* Footer */}
      <div className="inventory__footer">
        <p>Showing {filtered.length} of {dummyProducts.length} products</p>
      </div>

    </div>
  );
};