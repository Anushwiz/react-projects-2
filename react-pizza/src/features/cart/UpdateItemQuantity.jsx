/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from "../../ui/Button";
import {
  decreaseQuantity,
  getCurrentQuantityById,
  increaseQuantity,
} from "./cartSlice";
import { useSelector, useDispatch } from "react-redux";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-2">
      <Button type="round" onClick={() => dispatch(decreaseQuantity(pizzaId))}>
        -
      </Button>
      <span className="text-xs font-bold">{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(increaseQuantity(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
