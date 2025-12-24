import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import '../styles/Header.css';

function Header({ cartCount, onCartClick, searchQuery, onSearch, categories, selectedCategory, onCategoryChange, currentUser, onLoginClick, onAccountClick, onLogout }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar className="navbar-custom sticky-top" expand="lg" bg="dark" sticky="top">
        <Container>
          <Navbar.Brand 
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="brand-logo"
          >
            <span className="brand-icon">🛍️</span>
            Smart Gadget
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-menu">
              <Nav.Link 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="nav-item"
              >
                🏠 Home
              </Nav.Link>
              <Nav.Link 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('products');
                }}
                className="nav-item"
              >
                💻 Products
              </Nav.Link>
              <Nav.Link 
                href="#"
                className="nav-item"
              >
                🏷️ Categories
              </Nav.Link>
              <Nav.Link 
                href="#"
                className="nav-item"
              >
                📞 Contact
              </Nav.Link>
              <Button 
                className="cart-btn"
                onClick={onCartClick}
                variant="outline-light"
              >
                🛒 Cart
                {cartCount > 0 && (
                  <span className="cart-badge-new">{cartCount}</span>
                )}
              </Button>
              {currentUser ? (
                <>
                  <Button 
                    className="account-btn"
                    onClick={onAccountClick}
                    variant="outline-light"
                  >
                    👤 {currentUser.name}
                  </Button>
                  <Button 
                    className="logout-btn-nav"
                    onClick={onLogout}
                    variant="outline-light"
                  >
                    🚪
                  </Button>
                </>
              ) : (
                <Button 
                  className="login-btn"
                  onClick={onLoginClick}
                  variant="outline-light"
                >
                  🔐 Login
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Search and Filter Bar */}
      <div className="search-bar-section">
        <Container>
          <div className="search-filter-container">
            {/* Search Bar */}
            <div className="search-input-wrapper">
              <input
                type="text"
                className="search-input-navbar"
                placeholder="🔍 Search products..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="category-filter-navbar">
              <div className="category-buttons-navbar">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`category-btn-navbar ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => onCategoryChange(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Header;
