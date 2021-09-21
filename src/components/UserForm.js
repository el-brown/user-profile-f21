import React, { useContext, useState } from "react";
import { Form, Segment, } from "semantic-ui-react";
import styled from "styled-components";
import { UserContext } from "../provider/UserProvider";

const UserForm = (props) => {
  const {email, firstName, lastName, avatar, updateUser} = useContext(UserContext);
  const [formdata, setFormdata] = useState({
    email: email,
    firstName: firstName,
    lastName: lastName, 
    avatar:avatar});
  
  const handleChange = (e, { name, value }) =>{

    setFormdata({...formdata, [name]: value})
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formdata)
  };
  

    return (
      <Segment inverted color="grey" compact>
      <Form inverted onSubmit={handleSubmit}>
        <Form.Input 
          label="New Email"
          type="text"
          name="email"
          value={formdata.email}
          onChange={handleChange}
        />
        <Form.Input
          label="New First Name"
          type="text"
          name="firstName"
          value={formdata.firstName}
          onChange={handleChange}
        />
        <Form.Input
          label="New Last Name"
          type="text"
          name="lastName"
          value={formdata.lastName}
          onChange={handleChange}
        />
        <Form.Button>Save</Form.Button>
      </Form>
    </Segment>
    )
  }



export default UserForm;

