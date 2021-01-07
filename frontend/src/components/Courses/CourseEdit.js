import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  required,
  ReferenceInput,
  SelectInput,
} from "react-admin";

const CourseEdit = (props) => {
  return (
    <Edit title="Edit Course" {...props}>
      <SimpleForm>
        <ReferenceInput
          label="Tagged Program"
          source="tags"
          reference="programs"
          validate={required()}
        >
          <SelectInput optionText="title" validate={required()} />
        </ReferenceInput>
        <TextInput label="Course Id" source="course_id" validate={required()} />
        <TextInput source="title" validate={required()} />
        <TextInput source="description" validate={required()} />
      </SimpleForm>
    </Edit>
  );
};

export default CourseEdit;
