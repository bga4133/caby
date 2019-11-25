import React, { Component } from "react";

export default class Basket extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <>
        <h1 className="main">Order Summary</h1>
        <ul className="summary-items wrapper border">
          <li>
            <span className="summary-items-number">
              {cartItems.length === 0 ? (
                "0"
              ) : (
                <div> you have {cartItems.length}</div>
              )}
            </span>
            <span className="summary-items-price">
              {cartItems.reduce((a, c) => a + c.price * c.count,0)}
              <span className="currency">€</span>
            </span>
          </li>
        </ul>
        <div className="summary-discounts wrapper-half border">
          <h2>Discounts</h2>
          <ul>
            <li>
              <span>2x1 Mug offer</span>
              <span>-10€</span>
            </li>
            <li>
              <span>x3 Shirt offer</span>
              <span>-3€</span>
            </li>
            <li>
              <span>Promo code</span>
              <span>0€</span>
            </li>
          </ul>
        </div>
        <>
          {cartItems.length > 0 && (
            <>
              <div className="marginBasket">
                {/* {cartItems.length===0? "Basket is empty" : <div> you have {cartItems.length}</div>} */}
                <div>
                  <ul>
                    {cartItems.map(item => (
                      <li>
                        <b>{item.title}</b>x {item.count} ={" "}
                        {item.price * item.count}€
                        <button
                          className="countRemove"
                          onClick={e =>
                            this.props.handleRemoveFromCart(e, item)
                          }
                        >
                          X
                        </button>
                      </li>
                    ))}
                  </ul>
                  {/* total : {cartItems.reduce((a,c) => a + c.price*c.count, 0 )} € */}
                </div>
              </div>
              <div className="">
                <ul>
                  <li>
                    <span className="summary-total-cost">Total cost</span>
                    <span className="summary-total-price">
                      {cartItems.reduce((a, c) => a + c.price * c.count, 0)}€
                    </span>
                  </li>
                </ul>
                {/* <button type="submit">Checkout</button> */}
              </div>
            </>
          )}
          <div className="summary-total wrapper">
            <button type="submit">Checkout</button>
          </div>
        </>
      </>
    );
  }
}
