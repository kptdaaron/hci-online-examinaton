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

const FacultyEdit = (props) => {
  return (
    <Edit title="Edit Faculty" {...props}>
      <SimpleForm redirect="list">
        <TextInput label="Id" source="faculty_id" validate={required()} />
        <TextInput source="email" validate={required()} />
        <PasswordInput source="password" validate={required()} />
        <TextInput source="firstName" validate={required()} />
        <TextInput source="lastName" validate={required()} />
      </SimpleForm>
    </Edit>
  );
};

export default FacultyEdit;
