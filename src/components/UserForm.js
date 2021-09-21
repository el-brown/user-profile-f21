import React from "react";
import { Form, } from "semantic-ui-react";

class UserForm extends React.Component {
  state = { email: "", firstName: "", lastName: "", avatar:""};
  
  handleChange = (e, { name, value }) => this.setState({ [name]: value, });
  
  handleSubmit = (e) => {
    e.preventDefault();
  }
  
  render() {
    const { email, firstName, lastName, avatar } = this.state;
    return (
      <div>
        <h1>Here's something</h1>
      </div>
      // <Form onSubmit={this.handleSubmit}>
      //   <Form.Input
      //     label="New Username"
      //     type="text"
      //     name="username"
      //     value={username}
      //     onChange={this.handleChange}
      //   />
      //   <Form.Select
      //     label="Membership Level"
      //     name="membershipLevel"
      //     value={membershipLevel}
      //     onChange={this.handleChange}
      //     options={membershipOptions}
      //   />
      //   <Form.Button color="blue">Save</Form.Button>
      // </Form>
    )
  }
}


export default UserForm;