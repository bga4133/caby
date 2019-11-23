import React, { Component } from "react";

export default class Products extends Component {
  render() {
    const productItems = this.props.products.map(product => (
      <>
        {/* <a href={`#${product.id}`} onClick={(e)=> this.props.handleAddToCart(e, product)}>
                    <img src={`/products/${product.sku}.png`} alt={product.title}></img>
                    <p>{product.title}</p>
                </a>
                <div>
                    <p>{product.price} €</p>
                    <button className=""
                    onClick={(e)=> this.props.handleAddToCart(e, product)}
                    >Add to cart</button>
                </div>  */}

        <li class="product row">
          <div
            class="col-product"
            onClick={e => this.props.handleAddToCart(e, product)}
          >
            <figure class="product-image">
              <img src={`/products/${product.sku}.png`} alt={product.title} />
              <div class="product-description">
                <h1>{product.title}</h1>
                <p class="product-code">Product code X7R2OPX</p>
              </div>
            </figure>
          </div>
          <div class="col-quantity">
            {/* <button class="count" >-</button> */}
            {/* <input type="text" class="product-quantity" value="" /> */}
            <button
              onClick={e => this.props.handleAddToCart(e, product)}
              class="count"
            >
              {" "}
              +{" "}
            </button>
          </div>
          <div class="col-price">
            <span class="product-price">{product.price}</span>
            <span class="product-currency currency">€</span>
          </div>
          <div class="col-total">
            <span class="product-price">60</span>
            <span class="product-currency currency">€</span>
          </div>
        </li>
      </>
    ));
    return <div>{productItems}</div>;
  }
}
