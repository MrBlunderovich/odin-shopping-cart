import { useAppSelector } from "../../redux/hooks";

export default function Profile() {
  const { user } = useAppSelector((state) => state.user);
  return (
    <div className="bg-slate-400 text-lg flex min-h-screen items-center justify-center">
      {`Hello, ${user}`}
    </div>
  );
}
