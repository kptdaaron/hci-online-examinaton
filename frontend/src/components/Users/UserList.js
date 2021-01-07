import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  EmailField,
  Show,
  TabbedShowLayout,
  Tab,
  ReferenceField,
  ChipField,
} from "react-admin";

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField label="Id" source="user_id" />
        <EmailField source="email" />
        <TextField source="firstName" />
        <TextField source="lastName" />
        <ReferenceField source="role" reference="role">
          <ChipField source="name" />
        </ReferenceField>
        <EditButton basePath="/users" />
        <DeleteButton basePath="/users" />
      </Datagrid>
    </List>
  );
};

export default UserList;
