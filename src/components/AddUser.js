import React, { useContext } from 'react'
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from '../context/GlobalState';

function AddUser() {
  const { addUser } = useContext(GlobalContext);
  const navigate = useNavigate();
  const onSubmitFunc = () => {
    const newUser = {
      id: 4,
      name: "User Four",
    };
    addUser(newUser);
    navigate("/");
  };

  return (
    <Form onSubmit={onSubmitFunc}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" placeholder="Enter name" />
      </FormGroup>
      <Button type='submit'>Submit</Button>
      <Link to="/" className='btn btn-danger ml-2'>
        Cancel
      </Link>
    </Form >
  )
}

export default AddUser
