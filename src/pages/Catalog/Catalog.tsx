import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchProducts } from "../../redux/catalogSlice";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function Catalog() {
  const { products } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (products.length > 0) return;
    dispatch(fetchProducts());
  }, [products]);
  return (
    <div className="bg-slate-400 text-lg flex min-h-screen items-center justify-center gap-4">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          price={item.price}
        />
      ))}
    </div>
  );
}
