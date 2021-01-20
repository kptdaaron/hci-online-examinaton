import React from "react";
import {
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
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
        <ReferenceArrayInput
          label="Tag Exams"
          source="author"
          reference="exams"
          validate={required()}
        >
          <SelectArrayInput optionText="title" validate={required()} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          label="Tag Programs"
          source="tags"
          reference="programs"
          validate={required()}
        >
          <SelectArrayInput optionText="title" validate={required()} />
        </ReferenceArrayInput>
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
