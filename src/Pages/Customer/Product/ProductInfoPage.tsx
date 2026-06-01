// import { useParams, useNavigate } from 'react-router-dom';
// import { ProductInfo } from '../../../Components/ProductInfo/ProductInfo';
// import type { Product } from '../../../Components/ProductCard/ProductCardComponent';
// import jersey from '../../../assets/jersey.webp';

// // Same dummy products — later this will come from an API
// const dummyProducts: Product[] = [
//   {
//     id: 1,
//     name: "Bayern Munich Jersey",
//     price: 89.99,
//     image: jersey,
//     category: "Jerseys",
//     description: "Official Bayern Munich home jersey. Comfortable and stylish."
//   },
//   {
//     id: 2,
//     name: "Real Madrid Jersey",
//     price: 79.99,
//     image: jersey,
//     category: "Jerseys",
//     description: "Official Real Madrid home jersey. Premium quality fabric."
//   },
//   {
//     id: 3,
//     name: "Chelsea Jersey",
//     price: 74.99,
//     image: jersey,
//     category: "Jerseys",
//     description: "Official Chelsea home jersey. Classic blue design."
//   }
// ];

// export const ProductInfoPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   // Find the product that matches the ID in the URL
//   const product = dummyProducts.find(p => p.id === Number(id));

//   // If no product found, show a message
//   if (!product) {
//     return (
//       <div style={{ textAlign: "center", padding: "40px" }}>
//         <p>Product not found.</p>
//         <button onClick={() => navigate('/')}>Go Back</button>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <button
//         onClick={() => navigate('/')}
//         style={{ margin: "20px", cursor: "pointer", background: "none", border: "none", fontSize: "1rem", color: "#6366f1" }}
//       >
//         ← Back to Products
//       </button>
//       <ProductInfo
//         product={product}
//         onAddToCart={(product, quantity) => console.log(`Added ${quantity}x ${product.name}`)}
//       />
//     </div>
//   );
// };