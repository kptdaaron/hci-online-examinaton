import React from "react";
import {
  SelectInput,
  Edit,
  SimpleForm,
  TextInput,
  required,
  PasswordInput,
  ReferenceInput,
} from "react-admin";

const AdminEdit = (props) => {
  return (
    <Edit title="Edit Admin" {...props}>
      <SimpleForm>
        <TextInput label="Id" source="admin_id" validate={required()} />
        <TextInput source="email" validate={required()} />
        <PasswordInput source="password" validate={required()} />
        <TextInput source="firstName" validate={required()} />
        <TextInput source="lastName" validate={required()} />
      </SimpleForm>
    </Edit>
  );
};

export default AdminEdit;
