import { ShopContext } from '../../components/ShopContext';
import React, { useState, useEffect, useContext} from 'react';
import { fetchProductsByCategory } from '/src/Services/Api'; 
import ProductCard from '/src/components/ProductCard/ProductCard.jsx';
import '/src/components/CategoryPage/CategoryPage.css'


const CategoryPage = ({ categoryId }) => {
  const { addToCart } = useContext(ShopContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductsByCategory(categoryId);
        setProducts(data.data.attributes.products.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [categoryId]);

  const uploadURL = 'http://localhost:1337';

  const handleOnAddToCart = (product) => {
    // { title, description, price, quantity, image, productId }
    addToCart({
      title: product.attributes.title,
      description: product.attributes.description,
      price: product.attributes.price,
      quantity: product.attributes.quantity,
      image: product.attributes.image,
      productId: product.id
    })
  }

  return (
    <div className="category-page">
      <h2>{categoryId}</h2>
      <div className="products-container">
        {products.map(product => (
          <ProductCard
            key={product.id}
            productId={product.id}
            title={product.attributes.title}
            image={uploadURL + product.attributes.image.data.attributes.url} 
            description={product.attributes.description}
            price={product.attributes.price}
            quantity={product.attributes.quantity}
            isNew={product.attributes.isNew}
            addToCart={() => handleOnAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
