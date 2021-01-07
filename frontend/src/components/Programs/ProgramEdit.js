import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  required,
  ReferenceInput,
  SelectInput,
} from "react-admin";

const ProgramEdit = (props) => {
  return (
    <Edit title="Edit Program" {...props}>
      <SimpleForm>
        <TextInput source="program_id" />
        <ReferenceInput source="tags" reference="courses">
          <SelectInput optionText="course_id" />
        </ReferenceInput>
        <TextInput source="title" validate={required()} />
        <TextInput source="description" validate={required()} />
      </SimpleForm>
    </Edit>
  );
};

export default ProgramEdit;
