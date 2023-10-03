import { Product } from "../../declarations";
import { useAppDispatch } from "../../redux/hooks";
import { userActions } from "../../redux/userSlice";

/* type Props = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}; */
export default function ProductCard({
  id,
  title,
  description,
  imageUrl,
  price,
}: Product) {
  const dispatch = useAppDispatch();
  return (
    <div className="_card w-[300px] p-4 bg-slate-600 flex flex-col gap-4">
      <h3 className="text-slate-200">{title}</h3>
      <img src={imageUrl} alt={title} />
      <p className="text-slate-200">{description}</p>
      <p className="text-yellow-500">{`$${price}`}</p>
      <button
        className="bg-amber-400 hover:bg-amber-300 active:bg-amber-200 p-2 w-full"
        onClick={() => dispatch(userActions.addToCart({ id }))}
      >
        add to cart
      </button>
    </div>
  );
}
