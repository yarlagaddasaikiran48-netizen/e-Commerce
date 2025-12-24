import { Container } from 'react-bootstrap';

function Cart({ show, onHide, cartItems, onUpdateQuantity, onRemoveItem, onClearCart, currentUser, onLoginNeeded }) {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1;
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + tax + shipping;

  if (!show) return null;

  const handleCheckout = () => {
    if (!currentUser) {
      onLoginNeeded();
      return;
    }
    // Payment modal will be shown here
    alert('Proceeding to payment for $' + total.toFixed(2));
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <Container style={{ maxWidth: '600px' }}>
        <div className="cart-container">
          <button className="close-btn" onClick={onHide}>
            ← Close Cart
          </button>

          <h2 className="cart-title">Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty-icon">🛒</div>
              <p style={{ fontSize: '1.2rem' }}>Your cart is empty</p>
              <p style={{ color: '#999', marginBottom: 0 }}>Start shopping to add items!</p>
            </div>
          ) : (
            <>
              <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="cart-item-image"
                    />
                    <div className="cart-item-details">
                      <div className="cart-item-name">{item.name}</div>
                      <div className="cart-item-price">${item.price.toFixed(2)}</div>
                    </div>
                    <div className="quantity-control">
                      <button 
                        className="quantity-btn"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      >
                        −
                      </button>
                      <span style={{ padding: '0 0.8rem', fontWeight: '600' }}>
                        {item.quantity}
                      </span>
                      <button 
                        className="quantity-btn"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button 
                      className="remove-btn"
                      onClick={() => onRemoveItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <div className="summary-row">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Tax (10%):</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping:</span>
                  <span>{shipping === 0 ? '🎉 Free!' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="summary-row total">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <button className="checkout-btn" onClick={handleCheckout}>
                  {currentUser ? '💳 Proceed to Checkout' : '🔐 Login to Checkout'}
                </button>
                <button 
                  className="checkout-btn" 
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    marginTop: '0.8rem',
                    border: '2px solid white'
                  }}
                  onClick={onClearCart}
                >
                  Clear Cart
                </button>
              </div>
            </>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Cart;
