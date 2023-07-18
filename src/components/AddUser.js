import React, { useContext, useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from '../context/GlobalState';
import { v4 as uuid } from "uuid";

function AddUser() {
  const { addUser } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const onSubmitFunc = () => {
    const newUser = {
      id: uuid(),
      name: name,
    };
    addUser(newUser);
    navigate("/");
  };
  const onChangeFunc = (e) => {
    setName(e.target.value);
  }

  return (
    <Form onSubmit={onSubmitFunc}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          value={name}
          onChange={onChangeFunc}
          placeholder="Enter name"
        />
      </FormGroup>
      <Button type='submit'>Submit</Button>
      <Link to="/" className='btn btn-danger ml-2'>
        Cancel
      </Link>
    </Form >
  )
}

export default AddUser
