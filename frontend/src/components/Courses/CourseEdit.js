import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  required,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
} from "react-admin";

const CourseEdit = (props) => {
  return (
    <Edit title="Edit Course" {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          label="Tag Programs"
          source="tags"
          reference="programs"
          validate={required()}
        >
          <SelectArrayInput optionText="title" validate={required()} />
        </ReferenceArrayInput>
        <TextInput label="Course Id" source="course_id" validate={required()} />
        <TextInput source="title" validate={required()} />
        <TextInput source="description" validate={required()} />
      </SimpleForm>
    </Edit>
  );
};

export default CourseEdit;
