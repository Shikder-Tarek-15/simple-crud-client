import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const User = () => {
  const loaderUsers = useLoaderData();
  const [users, setUsers] = useState(loaderUsers);

  const handleDelete = (_id) => {
    console.log("Delete id: ", _id);

    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("user delete successfull");
          const remaining = users.filter((user) => user._id !== _id);
          setUsers(remaining);
        }
      });
  };

  return (
    <div>
      <h3>The user :{users.length}</h3>

      <div>
        {users.map((data) => (
          <p key={data._id}>
            {data.email} : {data.password}{" "}
            <Link to={`/update/${data._id}`}>
              <button>Update</button>
            </Link>
            <button onClick={() => handleDelete(data._id)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default User;
