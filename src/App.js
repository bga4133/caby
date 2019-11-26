import React, { Component } from "react";
// import './App.css';
import Products from "./components/Products";
import Basket from "./components/Basket";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], filteredProducts: [], cartItems: [] };
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  }
  // fetch method
  componentWillMount() {
    fetch("http://localhost:8000/products")
      .then(res => res.json())
      .then(data =>
        this.setState({
          products: data,
          filteredProducts: data
        })
      );
    // localStorage basket
    if (localStorage.getItem("cartItems")) {
      this.setState({
        cartItems: JSON.parse(localStorage.getItem("cartItems"))
      });
    }
  }
  // handle add to cart method
  handleAddToCart(e, product) {
    this.setState(state => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;
      cartItems.forEach(item => {
        if (item.id === product.id) {
          productAlreadyInCart = true;
          item.count++;
        }
      });
      if (!productAlreadyInCart) {
        cartItems.push({ ...product, count: 1 });
      }
      if(cartItems.length > 3){
        cartItems.reduce((a, c) => a + c.price * c.count * 0.05, 0)
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return cartItems;
    });
  }
  // remove from cart method
  handleRemoveFromCart(e, item) {
    this.setState(state => {
      const cartItems = state.cartItems.filter(elm => elm.id != item.id);
      localStorage.setItem("cartItem", cartItems);
      return { cartItems };
    });
  }
  render() {
    return (
      <>
        {/* UI */}
        <main className="App">
          <section className="products">
            <h1 className="main">Shopping cart</h1>
            <ul className="products-list tableHead">
              <li className="products-list-title row">
                <div className="col-product">Product details</div>
                <div className="col-quantity">Quantity</div>
                <div className="col-price">Price</div>
                <div className="col-total">Total</div>
              </li>
            </ul>
            {/* products component */}
            <ul className="products-list">
              <Products
                products={this.state.filteredProducts}
                handleAddToCart={this.handleAddToCart}
              />
            </ul>
          </section>
          {/* Basket component */}
          <aside className="summary">
            <Basket
              cartItems={this.state.cartItems}
              handleRemoveFromCart={this.handleRemoveFromCart}
            />
          </aside>
        </main>
      </>
    );
  }
}

export default App;
