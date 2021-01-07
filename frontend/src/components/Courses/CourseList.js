import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ReferenceManyField,
  ReferenceField,
  SingleFieldList,
  ChipField,
} from "react-admin";

const CourseList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="course_id" />
        <TextField source="title" />
        <TextField source="description" />
        <ReferenceField source="tags" reference="programs">
          <ChipField source="title" />
        </ReferenceField>
        <EditButton basePath="/courses" />
        <DeleteButton basePath="/courses" />
      </Datagrid>
    </List>
  );
};

export default CourseList;
