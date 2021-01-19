import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ReferenceField,
  ChipField,
  DateField,
} from "react-admin";

const ExamList = (props) => {
  return (
    <List undoable={false} {...props}>
      <Datagrid>
        <ReferenceField source="program" reference="programs">
          <ChipField source="title" />
        </ReferenceField>
        <ReferenceField source="course" reference="courses">
          <ChipField source="course_id" />
        </ReferenceField>

        <TextField label="Exam Title" source="title" />
        <DateField label="Start" source="examDate.start" />
        <DateField label="End" source="examDate.end" />
        <TextField label="Duration" source="duration" />
        <TextField label="Marks" source="marks" />
        <EditButton basePath="/exams" />
        <DeleteButton basePath="/exams" />
      </Datagrid>
    </List>
  );
};

export default ExamList;
