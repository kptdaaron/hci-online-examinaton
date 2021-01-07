import React, { useState } from "react";
import {
  Create,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  DateInput,
  FormWithRedirect,
  TextInput,
  NumberInput,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";

const ExamCreate = (props) => {
  return (
    <Create title="Create Exam" {...props}>
      <SimpleForm>
        <ReferenceInput
          label="Tag Program"
          source="program"
          reference="programs"
        >
          <SelectInput optionText="title" />
        </ReferenceInput>
        <ReferenceInput label="Tag Course" source="course" reference="courses">
          <SelectInput optionText="title" />
        </ReferenceInput>
        <DateInput
          source="examDate.start"
          label="Start date"
          options={{ format: "DD/MM/YYYY" }}
        />
        <DateInput
          source="examDate.end"
          label="End date"
          options={{ format: "DD/MM/YYYY" }}
        />
        <NumberInput source="duration" />
        <NumberInput source="marks" />
        <TextInput source="title" />
        <ArrayInput source="questions">
          <SimpleFormIterator>
            <TextInput label="Question" source="body" />
            <TextInput label="Correct Answer" source="choices.a.text" />
            <TextInput label="Other Choice" source="choices.b.text" />
            <TextInput label="Other Choice" source="choices.c.text" />
            <TextInput label="Other Choice" source="choices.d.text" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
};
export default ExamCreate;
