import React from "react";
import { Button } from "@material-ui/core";
import { Buttons, Wrapper } from "./CartItem.styles";
import { CartItemType } from "../../../App";

type CartItemProps = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<CartItemProps> = ({
  item,
  addToCart,
  removeFromCart,
}) => {
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>Price: ${item.price}</p>
      <p>Total Price: ${(item.amount * item.price).toFixed(2)}</p>
      <Buttons>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => removeFromCart(item.id)}
        >
          -
        </Button>
        <p>{item.amount}</p>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => addToCart(item)}
        >
          +
        </Button>
      </Buttons>
    </Wrapper>
  );
};

export default CartItem;
