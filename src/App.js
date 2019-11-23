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
  componentWillMount() {
    fetch("http://localhost:8000/products")
      .then(res => res.json())
      .then(data =>
        this.setState({
          products: data,
          filteredProducts: data
        })
      );
    if (localStorage.getItem("cartItems")) {
      this.setState({
        cartItems: JSON.parse(localStorage.getItem("cartItems"))
      });
    }
  }
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
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return cartItems;
    });
  }
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
        {/* <div className="App">
          <h1>Hola</h1>
          <Products products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart} />

          <div>
            <Basket cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart} />
          </div>
        </div>  */}

        <main class="App">
          <section class="products">
            <h1 class="main">Shopping cart</h1>
            <ul class="products-list tableHead">
              <li class="products-list-title row">
                <div class="col-product">Product details</div>
                <div class="col-quantity">Quantity</div>
                <div class="col-price">Price</div>
                <div class="col-total">Total</div>
              </li>
            </ul>
            <ul class="products-list">
              <Products
                products={this.state.filteredProducts}
                handleAddToCart={this.handleAddToCart}
              />
            </ul>
          </section>
          <aside class="summary">
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
