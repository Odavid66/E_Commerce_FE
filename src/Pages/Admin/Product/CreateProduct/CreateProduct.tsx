import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminForm } from '../../../../Components/AdminForm/AdminForm';
import { Basebutton } from '../../../../Components/Button/button';
import './CreateProduct.css';
import { CreateProduct as CreateProductService } from '../../../../services/productservice';
import { GetCategories, CreateCategory } from '../../../../services/categoryservice';

export const CreateProduct = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [categories, setCategories] = useState<any[]>([]);
  const [saving, setSaving] = useState(false);
  const [showNewCategory, setShowNewCategory] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [error, setError] = useState('');

  const fetchCategories = async () => {
    try {
      const data = await GetCategories();
      setCategories(data);
    } catch (err: any) {
      setError(err.message || 'Failed to get categories');
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAddcategory = async () => {
    if (!newCategory.trim()) return;
    try {
      const data = await CreateCategory({ name: newCategory });
      console.log('CategoryCreated:', data)
      setCategories([...categories, data]);
      setSelectedCategory(data?.id || data);
      setNewCategory('');
      setShowNewCategory(false);
    } catch (err: any) {
      setError(err.message || "Failed to create category");
    }
  }

  const handleSave = async () => {
    try {
      setSaving(true);
      await CreateProductService({
        name: title,
        price: Number(price),
        stock: Number(stock),
        description: description,
        imageUrl: "",
        category: selectedCategory,
      });
      navigate('/admin/products');
    } catch (err: any) {
      setError(err.message || 'Failed to create products');
    } finally {
      setSaving(false);
    }
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
            disabled={saving}
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </Basebutton>
        </div>
      </div>
      {error && <p className='create-product__error'>{error}</p>}

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

            <div className="create-product__row">
              <AdminForm
                label="Price ($)"
                type="number"
                placeholder="0"
                value={price}
                onChange={setPrice}
                required
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
              value={selectedCategory}
              onChange={setSelectedCategory}
              options={categories.map((c: any) => ({ label: c.name || c.label, value: c.id || c.value || c }))}
            />

            {/* Add new category */}
            {!showNewCategory ? (
              <button
                className="create-product__add-category"
                onClick={() => setShowNewCategory(true)}>
                + Add New Category
              </button>
            ) : (
              <div className="create-product__new-category">
                <AdminForm
                  label="New Category Name"
                  type="text"
                  placeholder='Add Category'
                  value={newCategory}
                  onChange={setNewCategory}
                />
                <div className="create-product__new-category-actions">
                  <Basebutton
                    backgroundColor='#6366f1'
                    color='#ffffff'
                    width='auto'
                    onClick={handleAddcategory}
                  >
                    Add
                  </Basebutton>
                  <Basebutton
                    backgroundColor='transparent'
                    color='#6b7280'
                    width='auto'
                    onClick={() => setShowNewCategory(false)}
                  >
                    Cancel
                  </Basebutton>

                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};