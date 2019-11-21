import React, { Component } from 'react'

export default class Basket extends Component {
    render() {
        const {cartItems} = this.props;
        return (
            <>
            {/* <h1 class="main">Order Summary</h1>
            <ul class="summary-items wrapper border">
              <li>
                <span class="summary-items-number">{cartItems.length===0? "0" : <span class="summary-items-price">{cartItems.length}<span class="currency">€</span></span>}</span
                ><span class="summary-items-price"
                  >{cartItems.reduce((a,c) => a + c.price*c.count, 0 )}<span class="currency">€</span></span>
              </li>
            </ul>
            <div class="summary-discounts wrapper-half border">
              <h2>Discounts</h2>
              <ul>
                <li><span>2x1 Mug offer</span><span>-10€</span></li>
                <li><span>x3 Shirt offer</span><span>-3€</span></li>
                <li><span>Promo code</span><span>0€</span></li>
              </ul>
            </div>
            <div class="summary-total wrapper">
              <ul>
                <li>
                  <span class="summary-total-cost">Total cost</span
                  ><span class="summary-total-price">107€</span>
                </li>
              </ul>
              <button type="submit">Checkout</button>
            </div> */}


            <div>
                {cartItems.length===0? "Basket is empty" : <div> you have {cartItems.length}</div>}
                {cartItems.length > 0 &&
                    <div>
                        <ul>
                            {cartItems.map(item =>
                                <li>
                                    <b>{item.title}</b>
                                    x {item.count} = {item.price * item.count}
                                    <button onClick={(e) => this.props.handleRemoveFromCart(e, item)}>X</button>
                                </li>
                            )}
                        </ul>
                        total : {cartItems.reduce((a,c) => a + c.price*c.count, 0 )} €
                    </div>
                } 
            </div> 
            </>
        )
    }
}
