import { MouseEventHandler, ReactNode } from "react";
import { UserCartItem } from "../../declarations";
import { userActions } from "../../redux/userSlice";
import { useAppDispatch } from "../../redux/hooks";

/* type CartItemProps = Product & {
  quantity: number;
}; */
export default function CartItem({ data }: { data: UserCartItem }) {
  const { id, title, image_url, price, quantity } = data;
  const dispatch = useAppDispatch();

  return (
    <div className="_shopping-cart-item flex bg-slate-800 p-4 gap-4 items-center text-white">
      <img className="h-24 aspect-auto" src={image_url} alt={title} />
      <h3>{title}</h3>
      <p className="mr-auto text-yellow-500">{`$${price}`}</p>
      <CartItemButton
        onClick={() => dispatch(userActions.cartItemDecrement({ id }))}
      >
        -
      </CartItemButton>
      <p>{quantity}</p>
      <CartItemButton
        onClick={() => dispatch(userActions.cartItemIncrement({ id }))}
      >
        +
      </CartItemButton>
      <CartItemButton
        onClick={() => dispatch(userActions.cartItemDelete({ id }))}
      >
        X
      </CartItemButton>
    </div>
  );
}

function CartItemButton({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button className="border-white min-w-[3rem]" onClick={onClick}>
      {children}
    </button>
  );
}
