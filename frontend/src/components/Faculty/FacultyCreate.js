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

const FacultyCreate = (props) => {
  return (
    <Create title="Add Faculty Member" {...props}>
      <SimpleForm>
        <TextInput
          label="Id"
          source="faculty_id"
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

export default FacultyCreate;
