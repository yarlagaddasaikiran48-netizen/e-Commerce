import '../styles/UserAccount.css';

function UserAccount({ user, onLogout, onClose, show = false }) {
  if (!user || !show) return null;

  return (
    <div className="user-account-overlay" onClick={(e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    }}>
      <div className="user-account-container">
        <button className="account-close-btn" onClick={onClose}>✕</button>

        <div className="account-header">
          <div className="account-avatar">👤</div>
          <div className="account-info">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        </div>

        <div className="account-sections">
          {/* Personal Information */}
          <section className="account-section">
            <h3>📋 Personal Information</h3>
            <div className="section-content">
              <div className="info-item">
                <label>Full Name:</label>
                <p>{user.name}</p>
              </div>
              <div className="info-item">
                <label>Email:</label>
                <p>{user.email}</p>
              </div>
              <div className="info-item">
                <label>Phone:</label>
                <p>{user.phone || 'Not provided'}</p>
              </div>
            </div>
          </section>

          {/* Saved Addresses */}
          <section className="account-section">
            <h3>📍 Saved Addresses</h3>
            <div className="section-content">
              <p className="placeholder-text">No saved addresses. Add one when you checkout.</p>
            </div>
          </section>

          {/* Payment Methods */}
          <section className="account-section">
            <h3>💳 Payment Methods</h3>
            <div className="section-content">
              <p className="placeholder-text">No saved payment methods. Add one during checkout.</p>
            </div>
          </section>

          {/* Order History */}
          <section className="account-section">
            <h3>📦 Order History</h3>
            <div className="section-content">
              <p className="placeholder-text">No orders yet. Start shopping to see your order history here.</p>
            </div>
          </section>

          {/* Account Settings */}
          <section className="account-section">
            <h3>⚙️ Account Settings</h3>
            <div className="section-content">
              <button className="setting-btn">Change Password</button>
              <button className="setting-btn">Edit Profile</button>
              <button className="setting-btn">Notification Preferences</button>
            </div>
          </section>
        </div>

        {/* Logout Button */}
        <button className="logout-btn" onClick={() => {
          onLogout();
          onClose();
        }}>
          🚪 Logout
        </button>
      </div>
    </div>
  );
}

export default UserAccount;
