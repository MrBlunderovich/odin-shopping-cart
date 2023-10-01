import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Catalog from "./pages/Catalog/Catalog";
import Profile from "./pages/Profile/Profile";
import { useAppSelector } from "./redux/hooks";

function App() {
  const { user } = useAppSelector((state) => state.user);

  return (
    <Routes>
      <Route path="home" element={<Navigate to="/" />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {user ? <PublicRoutes /> : <ProtectedRoutes />}
        <Route path="catalog" element={<Catalog />} />
        <Route path="404" element={<NotFound />} />
      </Route>
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}

export default App;

///////////////////////////////////////////

function PublicRoutes() {
  return (
    <>
      <Route path="profile" element={<Profile />} />
    </>
  );
}

function ProtectedRoutes() {
  return (
    <>
      <Route path="profile" element={<Login />} />
      <Route path="login" element={<Login />} />
    </>
  );
}
