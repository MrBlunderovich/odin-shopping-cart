export default function Home() {
  return (
    <div className="bg-slate-400 text-lg flex flex-col min-h-screen items-center justify-center">
      <img src="https://picsum.photos/id/27/1153/648" alt="sea" />
      <h2>TODO:</h2>
      <pre>
        - make user sessions persistent
        <br />
        - update cart item stock status somehow
        <br />- let successful login redirect user to previous page
        <br />- process failure to log in
      </pre>
    </div>
  );
}
