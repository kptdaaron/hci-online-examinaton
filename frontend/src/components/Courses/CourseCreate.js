import React from "react";
import {
  Create,
  TextInput,
  SimpleForm,
  required,
  ReferenceInput,
  ReferenceArrayInput,
  SelectInput,
  SelectArrayInput,
} from "react-admin";

const CourseCreate = (props) => {
  return (
    <Create title="Create Course" {...props}>
      <SimpleForm title="Add Course">
        <ReferenceArrayInput
          label="Tag Programs"
          source="tags"
          reference="programs"
          validate={required()}
        >
          <SelectArrayInput optionText="title" validate={required()} />
        </ReferenceArrayInput>
        <TextInput label="Course Id" source="course_id" validate={required()} />
        <TextInput label="Course Title" source="title" validate={required()} />
        <TextInput
          label="Course Desription"
          source="description"
          validate={required()}
        />
      </SimpleForm>
    </Create>
  );
};

export default CourseCreate;
