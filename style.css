/* Basic Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

/* Navbar */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: black;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

#navMenu {
  display: flex;
  gap: 20px;
}

#navMenu a {
  color: white;
  text-decoration: none;
}

.menu-toggle {
  display: none;
  cursor: pointer;
}

/* Hero Section */
#hero {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

#hero img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  transition: opacity 1s ease-in-out;
}

/* Shop Section */
#shop {
  padding: 80px 20px;
  text-align: center;
}

.shop-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.collection-box {
  position: relative;
  overflow: hidden;
}

.collection-box img {
  width: 100%;
  display: block;
}

.collection-box .overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  text-align: center;
}

/* Partner Section */
#partner {
  padding: 80px 20px;
  text-align: center;
}

.partner-slider {
  display: flex;
  gap: 20px;
  overflow: hidden;
  margin-top: 20px;
  animation: move 10s linear infinite;
}

.partner-box {
  min-width: 150px;
  background: #eee;
  padding: 20px;
  border-radius: 8px;
}

@keyframes move {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

/* Responsive */
@media (max-width: 768px) {
  #navMenu {
    display: none;
    flex-direction: column;
    background: black;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
  }
  #navMenu.show {
    display: flex;
  }
  .menu-toggle {
    display: block;
  }
}
