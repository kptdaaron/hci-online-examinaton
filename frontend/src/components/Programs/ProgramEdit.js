import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  required,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

const ProgramEdit = (props) => {
  return (
    <Edit title="Edit Program" {...props}>
      <SimpleForm>
        <TextInput source="program_id" />
        <ReferenceArrayInput
          label="Tag Courses"
          source="tags"
          reference="courses"
          validate={required()}
        >
          <SelectArrayInput optionText="course_id" validate={required()} />
        </ReferenceArrayInput>
        <TextInput source="title" validate={required()} />
        <TextInput source="description" validate={required()} />
      </SimpleForm>
    </Edit>
  );
};

export default ProgramEdit;
