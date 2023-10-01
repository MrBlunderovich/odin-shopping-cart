import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Catalog from "./pages/Catalog/Catalog";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <Routes>
      <Route path="home" element={<Navigate to="/" />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="404" element={<NotFound />} />
      </Route>
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}

export default App;
