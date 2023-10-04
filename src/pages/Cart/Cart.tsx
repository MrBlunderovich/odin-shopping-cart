import { ReactNode, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { cartActions, fetchCartProducts } from "../../redux/cartSlice";
import ProductCard from "../../components/ProductCard/ProductCard";
import CartItem from "../../components/CartItem/CartItem";

export default function Cart() {
  const { cart } = useAppSelector((state) => state.user);
  const { items } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const numberOfItemsInCart = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  //const IDs = cart.map((item) => item.id);

  useEffect(() => {
    dispatch(fetchCartProducts());
    return () => {
      dispatch(cartActions.clearCartProducts());
    };
  }, []);

  return (
    <div className="bg-slate-400 text-lg flex flex-col min-h-screen p-4 gap-4 justify-center">
      {/* {cart.map((item) => (
        <p key={item.id}>{item.id + " : " + item.quantity}</p>
      ))} */}
      {items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          price={item.price}
          quantity={cart.find((i) => i.id === item.id)?.quantity!}
        />
      ))}
    </div>
  );
}
