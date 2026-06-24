import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminTable } from '../../../../Components/AdminTable/AdminTable';
import { Basebutton } from '../../../../Components/button/button';
import './ProductInventory.css';
import { GetProducts } from '../../../../services/productservice';
import type { Product } from '../../../../Components/ProductCard/ProductCardComponent';
// AdminLayout's props typing may not include children; cast to any for usage here


const columns = [
  { key: "name", label: "Product" },
  { key: "description", label: "Desc" },
  { key: "category", label: "Category" },
  { key: "price", label: "Price" },
  { key: "stock", label: "Stock" },
];

export const ProductInventory = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchAllProductData = async() => {
    try {
      setLoading(true);
      const Productdata = await GetProducts();
      console.log("Products:", Productdata);
      setProducts(Productdata);
    } catch (err: any){
      setError(err.message || 'Failed to load Inventory');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllProductData();
  }, []);

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.categoryName?.toLowerCase().includes(search.toLowerCase())
  );

  if(loading)
    return <p className="loading">Loading Products...</p>;
  if(error)
    return <p className="error-message">{error}</p>;
  

  return (
      <div className="inventory">

        {/* Header */}
        <div className="inventory__header">
          <h1 className="inventory__title">Inventory</h1>
          <div className="inventory__header-actions">
            <input
              type="text"
              className="inventory__search"
              placeholder="Search product or categories..."
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
          <p>Showing {filtered.length} of {products.length} products</p>
        </div>

      </div>
  );
};