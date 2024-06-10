import React, { useState, useEffect } from 'react'
import AddUserForm from './crud/forms/AddUserForm'
import EditUserForm from './crud/forms/EditUserForm'
import UserTable from './crud/tables/UserTable'
import { v4 as uuidv4 } from 'uuid'
import { useParams } from 'react-router-dom'

const Crud = () => {
  // Accede al id de la URL
  const { id } = useParams()
  id && console.log(id)

  // Setting state
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const [editing, setEditing] = useState(false)

  /* Se llama después del renderizado del componente */
  useEffect(() => {
    const usersData = [
      { id: uuidv4(), name: 'Tania', userName: 'floppydiskette' },
      { id: uuidv4(), name: 'Craig', userName: 'siliconeidolon' },
      { id: uuidv4(), name: 'Ben', userName: 'benisphere' },
    ]
    const initialFormState = { id: null, name: '', userName: '' }

    setUsers(usersData)
    setCurrentUser(initialFormState)
  }, [])

  // CRUD operations
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    setEditing(false)
    setUsers(users.filter((user) => user.id !== id))
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }

  const editRow = (user) => {
    setEditing(true)
    setCurrentUser({
      id: user.id,
      name: user.name,
      userName: user.userName,
    })
  }

  return (
    <>
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
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </>
  )
}

export default Crud
