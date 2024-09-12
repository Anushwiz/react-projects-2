import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="px-5 py-4">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-5 rounded-lg bg-zinc-200 px-4 py-3 font-semibold text-yellow-600">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
