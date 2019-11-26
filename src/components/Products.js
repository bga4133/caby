import React, { Component } from "react";

export default class Products extends Component {
  render() {
    // map to show the products
    const productItems = this.props.products.map(product => (
      <>
        {/* UI */}
        <li className="product row">
          <div
            className="col-product"
            onClick={e => this.props.handleAddToCart(e, product)}
          >
            <figure className="product-image">
              <img src={`/products/${product.sku}.png`} alt={product.title} />
              <div className="product-description">
                <h1>{product.title}</h1>
                <p className="product-code">Product code {product.code}</p>
              </div>
            </figure>
          </div>
          <div className="col-quantity">
            {/* <button className="count" >-</button> */}
            {/* <input type="text" className="product-quantity" value="" /> */}
            <button
              onClick={e => this.props.handleAddToCart(e, product)}
              className="count"
            >
              {" "}
              +{" "}
            </button>
          </div>
          <div className="col-price">
            <span className="product-price">{product.price}</span>
            <span className="product-currency currency">€</span>
          </div>
          <div className="col-total">
            <span className="product-price">60</span>
            <span className="product-currency currency">€</span>
          </div>
        </li>
      </>
    ));
    return <div>{productItems}</div>;
  }
}
