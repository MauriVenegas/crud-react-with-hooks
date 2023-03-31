import React, { useState } from "react";
import AddUserForm from "./Components/forms/AddUserForm";
import EditUserForm from "./Components/forms/EditUserForm";
import UserTable from "./Components/tables/UserTable";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  // Data
  const usersData = [
    { id: uuidv4(), name: "Tania", userName: "floppydiskette" },
    { id: uuidv4(), name: "Craig", userName: "siliconeidolon" },
    { id: uuidv4(), name: "Ben", userName: "benisphere" },
  ];

  const initialFormState = { id: null, name: "", userName: "" };

  // Setting state
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setEditing(false);
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      userName: user.userName,
    });
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <>
              <h2>Edit user</h2>
              <EditUserForm
								key={uuidv4()}
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </>
          ) : (
            <>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable
						users={users}
						editRow={editRow}
						deleteUser={deleteUser}
					/>
        </div>
      </div>
    </div>
  );
};

export default App;
