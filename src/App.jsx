import "./App.css";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const user = { email, password };
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <h1>Simple CRUD</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="" />
        <input type="password" name="password" id="" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
