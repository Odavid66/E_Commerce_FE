import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AdminForm } from '../../../../Components/AdminForm/AdminForm';
import { Basebutton } from '../../../../Components/Button/button';
import './EditProduct.css';

// Dummy data — later this will come from an API using the id
const dummyProducts = [
  { id: 1, name: "Nexus Chrono X1", description: "The Nexus Chrono X1 is the pinnacle of precision engineering and modern aesthetics.", price: "299", discount: "10", stock: "124", status: "active", category: "accessories" },
  { id: 2, name: "AudioSphere Elite", description: "Premium wireless headphones with noise cancellation.", price: "399", discount: "0", stock: "156", status: "active", category: "electronics" },
  { id: 3, name: "Velocity Runner S", description: "High performance running shoes.", price: "125", discount: "5", stock: "0", status: "draft", category: "footwear" },
  { id: 4, name: "InstaNow Pro 5", description: "Compact instant camera for every moment.", price: "89", discount: "0", stock: "45", status: "active", category: "electronics" },
];

export const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Find product by id from URL
  const existing = dummyProducts.find(p => p.id === Number(id));

  const [title, setTitle] = useState(existing?.name || '');
  const [description, setDescription] = useState(existing?.description || '');
  const [price, setPrice] = useState(existing?.price || '');
  const [discount, setDiscount] = useState(existing?.discount || '');
  const [stock, setStock] = useState(existing?.stock || '');
  const [status, setStatus] = useState(existing?.status || 'active');
  const [category, setCategory] = useState(existing?.category || 'electronics');

  // If product not found
  if (!existing) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <p>Product not found.</p>
        <button onClick={() => navigate('/admin/products')}>Go Back</button>
      </div>
    );
  }

  const handleSave = () => {
    console.log({ id, title, description, price, discount, stock, status, category });
    navigate('/admin/products');
  };

  const handleDelete = () => {
    console.log("Deleting product:", id);
    navigate('/admin/products');
  };

  return (
    <div className="edit-product">

      {/* Header */}
      <div className="edit-product__header">
        <div>
          <p className="edit-product__breadcrumb">Products / Edit Product</p>
          <h1 className="edit-product__title">Edit Product: {existing.name}</h1>
          <p className="edit-product__subtitle">Last updated: Oct 24, 2024 at 10:45 AM</p>
        </div>
        <div className="edit-product__header-actions">
          <Basebutton
            backgroundColor="transparent"
            color="#6b7280"
            border="1px solid #e5e7eb"
            width="auto"
            onClick={() => navigate('/admin/products')}
          >
            Cancel
          </Basebutton>
          <Basebutton
            backgroundColor="#6366f1"
            color="#ffffff"
            width="auto"
            onClick={handleSave}
          >
            Save Changes
          </Basebutton>
        </div>
      </div>

      {/* Body */}
      <div className="edit-product__body">

        {/* Left Column */}
        <div className="edit-product__left">

          {/* General Information */}
          <div className="edit-product__section">
            <h2 className="edit-product__section-title">📋 General Information</h2>
            <AdminForm
              label="Product Title"
              type="text"
              placeholder="e.g. Performance Wireless Headphones"
              value={title}
              onChange={setTitle}
              required
            />
            <AdminForm
              label="Description"
              type="textarea"
              placeholder="Highlight key features, technical specs, and materials..."
              value={description}
              onChange={setDescription}
            />
          </div>

          {/* Product Media */}
          <div className="edit-product__section">
            <h2 className="edit-product__section-title">🖼️ Product Media</h2>
            <div className="edit-product__upload">
              <div className="edit-product__upload-icon">📁</div>
              <p className="edit-product__upload-text">Drop your images here or browse</p>
              <p className="edit-product__upload-hint">Supports JPG, PNG, and WebP. Minimum size 800x800px.</p>
            </div>
          </div>

          {/* Destructive Action */}
          <div className="edit-product__section edit-product__section--danger">
            <h2 className="edit-product__section-title edit-product__section-title--danger">
              ⚠️ Destructive Action
            </h2>
            <p className="edit-product__danger-text">
              Deleting this product is permanent and cannot be undone. All associated data will be removed from the catalog.
            </p>
            <Basebutton
              backgroundColor="#ef4444"
              color="#ffffff"
              width="auto"
              onClick={handleDelete}
            >
              🗑️ Delete Product
            </Basebutton>
          </div>

        </div>

        {/* Right Column */}
        <div className="edit-product__right">

          {/* Status & Pricing */}
          <div className="edit-product__section">
            <h2 className="edit-product__section-title">💰 Status & Pricing</h2>
            <AdminForm
              label="Status"
              type="select"
              value={status}
              onChange={setStatus}
              options={[
                { label: "Active", value: "active" },
                { label: "Draft", value: "draft" },
                { label: "Archived", value: "archived" },
              ]}
            />
            <div className="edit-product__row">
              <AdminForm
                label="Price ($)"
                type="number"
                placeholder="0"
                value={price}
                onChange={setPrice}
                required
              />
              <AdminForm
                label="Discount (%)"
                type="number"
                placeholder="0"
                value={discount}
                onChange={setDiscount}
              />
            </div>
            <AdminForm
              label="Stock Quantity"
              type="number"
              placeholder="0"
              value={stock}
              onChange={setStock}
              required
            />
          </div>

          {/* Organization */}
          <div className="edit-product__section">
            <h2 className="edit-product__section-title">🗂️ Organization</h2>
            <AdminForm
              label="Category"
              type="select"
              value={category}
              onChange={setCategory}
              options={[
                { label: "Electronics", value: "electronics" },
                { label: "Accessories", value: "accessories" },
                { label: "Footwear", value: "footwear" },
                { label: "Fashion", value: "fashion" },
              ]}
            />
          </div>

        </div>
      </div>
    </div>
  );
};