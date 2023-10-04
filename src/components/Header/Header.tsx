import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

export default function Header() {
  const { user, cart } = useAppSelector((state) => state.user);
  const numberOfItemsInCart = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  return (
    <header className="grid grid-cols-3 p-8 bg-slate-800 text-slate-100">
      <nav className="col-start-2  flex justify-center gap-6">
        <NavLink to="/">Home</NavLink>
        <NavLink to="catalog">Catalog</NavLink>
        <NavLink to="cart">Cart</NavLink>
        {user && <NavLink to="profile">Profile</NavLink>}
        {!user && <NavLink to="login">Login</NavLink>}
      </nav>
      <span className="text-yellow-500 ml-auto col-start-3">
        {user || "no user"}
        <span>:{numberOfItemsInCart}</span>
      </span>
    </header>
  );
}
