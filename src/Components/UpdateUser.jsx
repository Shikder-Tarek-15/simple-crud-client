import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);

    fetch(`http://localhost:5000/users/${users._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          setUsers(data);
          alert("Data updated");
        }
      });
  };

  return (
    <div>
      <h2>Details of: {users.email}</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" defaultValue={users.email} id="" />
        <br />
        <input
          type="text"
          name="password"
          defaultValue={users.password}
          id=""
        />
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateUser;
