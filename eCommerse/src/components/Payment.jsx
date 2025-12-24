import { useState } from 'react';
import '../styles/Payment.css';

function Payment({ show, onHide, total, onConfirmPayment }) {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [cardData, setCardData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: ''
  });

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePayment = (e) => {
    e.preventDefault();
    onConfirmPayment(paymentMethod, cardData);
  };

  if (!show) return null;

  return (
    <div className="payment-overlay">
      <div className="payment-container">
        <button className="payment-close-btn" onClick={onHide}>✕</button>

        <h2 className="payment-title">Checkout - Payment</h2>

        <div className="payment-summary">
          <p>Order Total: <strong>${total.toFixed(2)}</strong></p>
        </div>

        {/* Payment Methods */}
        <div className="payment-methods">
          <h3>Select Payment Method</h3>
          
          <div className="method-option">
            <input
              type="radio"
              id="credit-card"
              name="payment"
              value="credit-card"
              checked={paymentMethod === 'credit-card'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="credit-card">
              <span className="method-icon">💳</span>
              Credit / Debit Card
            </label>
          </div>

          <div className="method-option">
            <input
              type="radio"
              id="paypal"
              name="payment"
              value="paypal"
              checked={paymentMethod === 'paypal'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="paypal">
              <span className="method-icon">🅿️</span>
              PayPal
            </label>
          </div>

          <div className="method-option">
            <input
              type="radio"
              id="google-pay"
              name="payment"
              value="google-pay"
              checked={paymentMethod === 'google-pay'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="google-pay">
              <span className="method-icon">🔵</span>
              Google Pay
            </label>
          </div>

          <div className="method-option">
            <input
              type="radio"
              id="apple-pay"
              name="payment"
              value="apple-pay"
              checked={paymentMethod === 'apple-pay'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="apple-pay">
              <span className="method-icon">🍎</span>
              Apple Pay
            </label>
          </div>

          <div className="method-option">
            <input
              type="radio"
              id="bank-transfer"
              name="payment"
              value="bank-transfer"
              checked={paymentMethod === 'bank-transfer'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="bank-transfer">
              <span className="method-icon">🏦</span>
              Bank Transfer
            </label>
          </div>
        </div>

        {/* Card Form */}
        {paymentMethod === 'credit-card' && (
          <form onSubmit={handlePayment} className="card-form">
            <h3>Card Details</h3>

            <div className="form-group">
              <label>Card Holder Name</label>
              <input
                type="text"
                name="cardHolder"
                value={cardData.cardHolder}
                onChange={handleCardChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label>Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={cardData.cardNumber}
                onChange={handleCardChange}
                placeholder="1234 5678 9012 3456"
                maxLength="19"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Expiry Month</label>
                <input
                  type="number"
                  name="expiryMonth"
                  value={cardData.expiryMonth}
                  onChange={handleCardChange}
                  placeholder="MM"
                  min="1"
                  max="12"
                  required
                />
              </div>

              <div className="form-group">
                <label>Expiry Year</label>
                <input
                  type="number"
                  name="expiryYear"
                  value={cardData.expiryYear}
                  onChange={handleCardChange}
                  placeholder="YY"
                  min="24"
                  max="35"
                  required
                />
              </div>

              <div className="form-group">
                <label>CVV</label>
                <input
                  type="password"
                  name="cvv"
                  value={cardData.cvv}
                  onChange={handleCardChange}
                  placeholder="123"
                  maxLength="4"
                  required
                />
              </div>
            </div>

            <button type="submit" className="payment-submit-btn">
              Pay ${total.toFixed(2)}
            </button>
          </form>
        )}

        {paymentMethod !== 'credit-card' && (
          <form onSubmit={handlePayment} className="other-payment-form">
            <p className="payment-info">
              You will be redirected to {paymentMethod === 'paypal' ? 'PayPal' : paymentMethod === 'google-pay' ? 'Google Pay' : paymentMethod === 'apple-pay' ? 'Apple Pay' : 'your bank'} to complete the payment.
            </p>
            <button type="submit" className="payment-submit-btn">
              Continue to {paymentMethod === 'paypal' ? 'PayPal' : paymentMethod === 'google-pay' ? 'Google Pay' : paymentMethod === 'apple-pay' ? 'Apple Pay' : 'Bank Transfer'}
            </button>
          </form>
        )}

        <div className="payment-security">
          <p>🔒 Your payment is secure and encrypted</p>
        </div>
      </div>
    </div>
  );
}

export default Payment;
