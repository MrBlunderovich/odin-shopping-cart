export default function Login() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    console.log({ form });
    const username = form.username.value;
    const password = form.password.value;
    console.log({ username, password });
    /* const {
      usernameInput: { value: username },
      passwordInput: { value: password },
    } = form.elements; */
  }

  return (
    <div className="bg-slate-400 text-lg flex min-h-screen items-center justify-center">
      <form onSubmit={handleSubmit}>
        <label htmlFor="usernameInput">
          <p>Username</p>
          <input type="text" id="usernameInput" name="username" />
        </label>
        <label htmlFor="passwordInput">
          <p>Password</p>
          <input type="text" id="passwordInput" name="password" />
        </label>
        <button>Log In</button>
      </form>
    </div>
  );
}
