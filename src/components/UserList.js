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
      <ListGroupItem className='d-flex'>
        <strong>User One</strong>
        <div style={{ marginLeft: "auto" }}>
          <Link className='btn btn-warning' to="/edit/1">
            Edit
          </Link>
          <Button color='danger' style={{ marginLeft: "10px" }}>
            Delete
          </Button>
        </div>
      </ListGroupItem>

      <ListGroupItem className='d-flex'>
        <strong>User Two</strong>
        <div style={{ marginLeft: "auto" }}>
          <Link className='btn btn-warning' to="/edit/1">
            Edit
          </Link>
          <Button color='danger' style={{ marginLeft: "10px" }}>
            Delete
          </Button>
        </div>
      </ListGroupItem>
    </ListGroup>
  )
}

export default UserList
