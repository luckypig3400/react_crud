import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { GlobalContext } from '../context/GlobalState';

function UserList() {
  const { users } = useContext(GlobalContext);
  console.log(users);
  // console.log("users:" + JSON.stringify(users));

  return (
    <ListGroup className='mt-4'>
      {
        users.map((user) => (
          <ListGroupItem className='d-flex' key={user.id}>
            <strong>{user.name}</strong>
            <div style={{ marginLeft: "auto" }}>
              <Link className='btn btn-warning' to={`/edit/${user.id}`}>
                Edit
              </Link>
              <Button color='danger' style={{ marginLeft: "10px" }}>
                Delete
              </Button>
            </div>
          </ListGroupItem>
        ))
      }
    </ListGroup>
  )
}

export default UserList
