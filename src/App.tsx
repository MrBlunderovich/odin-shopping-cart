import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Catalog from "./pages/Catalog/Catalog";
import Profile from "./pages/Profile/Profile";
import { useAppSelector } from "./redux/hooks";
import Cart from "./pages/Cart/Cart";

export default function App() {
  const { user } = useAppSelector((state) => state.user);

  console.log(import.meta.env.VITE_ENV_STRING);
  return (
    <Routes>
      <Route path="home" element={<Navigate to="/" />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {user ? protectedRoutes : publicRoutes}
        <Route path="catalog" element={<Catalog />} />
        <Route path="404" element={<NotFound />} />
      </Route>
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}

///////////////////////////////////////////

const publicRoutes = (
  <>
    <Route path="login" element={<Login />} />
    <Route path="profile" element={<Navigate to="/login" />} />
    <Route path="cart" element={<Navigate to="/login" />} />
  </>
);

const protectedRoutes = (
  <>
    <Route path="profile" element={<Profile />} />
    <Route path="cart" element={<Cart />} />
  </>
);

/* function PublicRoutes() {
  return (
    <>
      <Route path="login" element={<Login />} />
    </>
  );
}

function ProtectedRoutes() {
  return (
    <>
      <Route path="profile" element={<Login />} />
      <Route path="profile" element={<Profile />} />
    </>
  );
} */
