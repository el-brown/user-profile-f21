import React from "react";
import { Segment, Table } from "semantic-ui-react";
import styled from "styled-components";
import User from "./User";
import UserForm from "./UserForm";

const UserProfile = () => (
    <Table compact>
      <Table.Row compact>
        <Table.Cell compact>
        <User />
        </Table.Cell>
        <Table.Cell compact>
        <UserForm />
        </Table.Cell>
      </Table.Row>
    </Table>

)

export default UserProfile;

const MyTable = styled(Table)`

`

const FlexDiv = styled.div`
  display:flex;
  padding: 20px;
  vertical-align: top;
  `
