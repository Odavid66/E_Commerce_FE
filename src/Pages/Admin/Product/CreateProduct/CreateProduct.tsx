import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminForm } from '../../../../Components/AdminForm/AdminForm';
import { Basebutton } from '../../../../Components/button/button';
import './CreateProduct.css';

export const CreateProduct = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [stock, setStock] = useState('');
  const [status, setStatus] = useState('active');
  const [category, setCategory] = useState('electronics');

  const handleSave = () => {
    console.log({ title, description, price, discount, stock, status, category });
    navigate('/admin/products');
  };

  return (
    <div className="create-product">

      {/* Header */}
      <div className="create-product__header">
        <div>
          <p className="create-product__breadcrumb">Products / Add New Product</p>
          <h1 className="create-product__title">Create Product</h1>
          <p className="create-product__subtitle">
            Add a new item to your store inventory. Ensure all mandatory fields are completed.
          </p>
        </div>
        <div className="create-product__header-actions">
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
      <div className="create-product__body">

        {/* Left Column */}
        <div className="create-product__left">

          {/* General Information */}
          <div className="create-product__section">
            <h2 className="create-product__section-title">
              📋 General Information
            </h2>
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
          <div className="create-product__section">
            <h2 className="create-product__section-title">
              🖼️ Product Media
            </h2>
            <div className="create-product__upload">
              <div className="create-product__upload-icon">📁</div>
              <p className="create-product__upload-text">
                Drop your images here or browse
              </p>
              <p className="create-product__upload-hint">
                Supports JPG, PNG, and WebP. Minimum size 800x800px.
              </p>
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="create-product__right">

          {/* Status & Pricing */}
          <div className="create-product__section">
            <h2 className="create-product__section-title">
              💰 Status & Pricing
            </h2>
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
            <div className="create-product__row">
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
          <div className="create-product__section">
            <h2 className="create-product__section-title">
              🗂️ Organization
            </h2>
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