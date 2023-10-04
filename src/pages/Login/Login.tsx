import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { login } from "../../redux/userSlice";

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    console.log({ form });
    const username = form.username.value;
    const password = form.password.value;
    console.log({ username, password });
    dispatch(login({ username, password })).then(() =>
      navigate("/home", { replace: true })
    );
    /* const {
      usernameInput: { value: username },
      passwordInput: { value: password },
    } = form.elements; */
  }

  return (
    <div className="bg-slate-400 text-lg flex min-h-screen items-center justify-center">
      <form
        className="flex flex-col gap-4 p-4 bg-slate-300"
        onSubmit={handleSubmit}
      >
        {/* <label htmlFor="usernameInput">
          <p>Username</p>
          <input type="text" id="usernameInput" name="username" />
        </label>
        <label htmlFor="passwordInput">
          <p>Password</p>
          <input type="text" id="passwordInput" name="password" />
        </label> */}
        <FormInput name="username" caption="Username" />
        <FormInput name="password" caption="Password" />
        <button className="bg-slate-800 hover:bg-slate-600 text-slate-100 mt-1">
          Log In
        </button>
      </form>
    </div>
  );
}

type FormInputProps = {
  name: string;
  caption: string;
  type?: string;
};
function FormInput({ name, caption, type = "text" }: FormInputProps) {
  return (
    <label htmlFor={`${name}Input`}>
      <p>{caption}</p>
      <input
        className="px-2 py-1"
        type={type}
        id={`${name}Input`}
        name={name}
      />
    </label>
  );
}
