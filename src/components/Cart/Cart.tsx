import React from "react";
import { CartItemType } from "../../App";
import { Wrapper } from "./Cart.styles";
import CartItem from "./CartItem/CartItem";

type CartProps = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<CartProps> = ({
  cartItems,
  addToCart,
  removeFromCart,
}) => {
  const totalCartPrice = cartItems.reduce(
    (ack: number, item: CartItemType) => ack + item.amount * item.price,
    0
  );

  return (
    <Wrapper>
      <h2>Shopping cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map((cartItem) => (
          <CartItem
            item={cartItem}
            key={cartItem.id}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))
      )}
      <h2>Total: ${totalCartPrice}</h2>
    </Wrapper>
  );
};

export default Cart;
