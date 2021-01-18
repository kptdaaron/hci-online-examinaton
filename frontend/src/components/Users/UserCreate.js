import React from "react";
import {
  SelectInput,
  Create,
  SimpleForm,
  TextInput,
  PasswordInput,
  required,
  ReferenceInput,
} from "react-admin";

const UserCreate = (props) => {
  return (
    <Create title="Create User" {...props}>
      <SimpleForm>
        <TextInput
          label="Id"
          source="user_id"
          validate={required()}
          fullWidth
        />
        <TextInput source="email" validate={required()} fullWidth />
        <PasswordInput source="password" validate={required()} fullWidth />
        <TextInput source="firstName" validate={required()} fullWidth />
        <TextInput source="lastName" validate={required()} fullWidth />
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;
