import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

export default function Header() {
  const { user } = useAppSelector((state) => state.user);
  return (
    <header className="p-8 bg-slate-800 text-slate-100 flex justify-center gap-6">
      <NavLink to="/">Home</NavLink>
      <NavLink to="catalog">Catalog</NavLink>
      <NavLink to="cart">Cart</NavLink>
      <NavLink to="profile">Profile</NavLink>
      <NavLink to="login">Login</NavLink>
      <p className="text-red-400">{user || "no user"}</p>
    </header>
  );
}
