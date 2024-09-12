/* eslint-disable no-unused-vars */
import { Form, redirect, useNavigation, useActionData } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import EmptyCart from "../cart/EmptyCart";
import store from "../../store";
import { useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import { fetchAddress } from "../user/userSlice";
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;

  const totalPrice = totalCartPrice + priorityPrice;
  const cart = useSelector(getCart);

  const formErrors = useActionData();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  /*   console.log(navigation); */
  const isSubmitting = navigation.state === "submitting";
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: addressError,
  } = useSelector((state) => state.user);
  const isAddressLoading = addressStatus === "loading";
  if (!cart.length) return <EmptyCart />;
  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">{`Ready to order? Let's go!`}</h2>

      <Form method="POST">
        <div className="felx-col mb-5 flex gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            defaultValue={username}
            className="input grow"
            type="text"
            name="customer"
            required
          />
        </div>

        <div className="felx-col mb-5 flex gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />

            {formErrors?.phone && (
              <p className="mb-2 mt-1 rounded-lg bg-red-200 p-2 text-sm text-red-700">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="felx-col relative mb-5 flex gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              defaultValue={address}
              className="input w-full"
              type="text"
              name="address"
              required
              disabled={isAddressLoading}
            />
          </div>
          {!position.latitude && !position.logitude && (
            <span className="absolute right-0.5 top-1">
              <Button
                disabled={isAddressLoading}
                type="small"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
              >
                get position
              </Button>
            </span>
          )}
        </div>
        {addressError && (
          <p className="mb-2 mt-1 rounded-lg bg-red-200 p-2 text-sm text-red-700">
            {addressError}
          </p>
        )}

        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-5 w-5 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-semibold">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              position.latitude && position.longitude
                ? `${position.latitude},${position.logitude}`
                : ""
            }
          />
          <Button disabled={isSubmitting || isAddressLoading} type="primary">
            {isSubmitting
              ? "Submitting order..."
              : `Order now for ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}
export async function action({ request }) {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);
  console.log(data);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority,
  };
  /*   console.log(order); */

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = `Please enter a valid phone number, we may need it for delivering the order`;
  if (Object.keys(errors).length > 0) return errors;
  //if everything is Okay then create a new order
  const newOrder = await createOrder(order);

  //Should nto over use this technique of impoering store itself
  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
