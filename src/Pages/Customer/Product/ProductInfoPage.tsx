import { useParams, useNavigate } from 'react-router-dom';
import { ProductInfo } from '../../../Components/ProductInfo/ProductInfo';
import type { Product } from '../../../Components/ProductCard/ProductCardComponent';
import jersey from '../../../assets/jersey.webp';
import { useState, useEffect} from 'react';
import { GetProducts } from '../../../services/productservice';
import { GetCategories } from '../../../services/categoryservice';

const dummyProducts: Product[] = [
  { id: 1, name: "Bayern Munich Jersey", price: 89.99, image: jersey, category: "Jerseys", description: "Official Bayern Munich home jersey. Comfortable and stylish." },
  { id: 2, name: "Real Madrid Jersey", price: 79.99, image: jersey, category: "Jerseys", description: "Official Real Madrid home jersey. Premium quality fabric." },
  { id: 3, name: "Chelsea Jersey", price: 74.99, image: jersey, category: "Jerseys", description: "Official Chelsea home jersey. Classic blue design." },
];

const dummyReviews = [
  { id: 1, name: "James D.", verified: true, rating: 5, comment: "The quality is insane. It feels much more premium than other plastic-heavy smartwatches. The titanium is light but rugged." },
  { id: 2, name: "Alice M.", verified: true, rating: 4, comment: "Battery life actually lasts the full week for me, even with daily runs. The display is bright enough even in direct noon sun." },
  { id: 3, name: "Robert K.", verified: true, rating: 5, comment: "Integration with the Nexus health ecosystem is seamless. The data precision is miles ahead of my previous tracker." },
];

export const ProductInfoPage = () => {
  // const { id } = useParams();
  // const navigate = useNavigate();

  // const [product, setProduct] = useState('');
  // const [relatedProducts, setRelatedProducts] = useState('');
  // const [isLoading, setIsLoading] = useState(true);
  // const [errorm setError] = useState('');

  // useEffect(() => {
  //   fetchProductData();
  // });

  // const fetchProductData = async() => {
  //   try {
  //     setIsLoading(true);
  //     const
  //   }catch (err: any) {

  //   }finally{

  //   }
  // }

  if (!product) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <p>Product not found.</p>
        <button onClick={() => navigate('/')}>Go Back</button>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div style={{ padding: "16px 40px", fontSize: "0.85rem", color: "#6b7280" }}>
        <span style={{ cursor: "pointer" }} onClick={() => navigate('/')}>Shop</span>
        {" > "}
        <span>{product.category}</span>
        {" > "}
        <span style={{ color: "#111827", fontWeight: 600 }}>{product.name}</span>
      </div>

      <ProductInfo
        product={product}
        images={[product.image, product.image, product.image, product.image]}
        reviews={dummyReviews}
        relatedProducts={dummyProducts.filter(p => p.id !== product.id)}
        onAddToCart={(p, qty) => console.log(`Added ${qty}x ${p.name}`)}
      />
    </div>
  );
};