import { Container } from 'react-bootstrap';
import ProductCard from './ProductCard';

function ProductList({ products, onAddToCart }) {
  return (
    <section className="products-section" id="products">
      <Container>
        {products.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2rem',
            marginTop: '2rem'
          }}>
            {products.map((product) => (
              <ProductCard 
                key={product.id}
                product={product} 
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            color: '#999'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>No products found</h3>
            <p>Try adjusting your search terms or selecting a different category</p>
          </div>
        )}
      </Container>
    </section>
  );
}

export default ProductList;
