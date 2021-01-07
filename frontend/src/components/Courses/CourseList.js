import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ReferenceManyField,
  ReferenceArrayField,
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
        <ReferenceArrayField source="tags" reference="programs">
          <SingleFieldList>
            <ChipField source="title" />
          </SingleFieldList>
        </ReferenceArrayField>
        <EditButton basePath="/courses" />
        <DeleteButton basePath="/courses" />
      </Datagrid>
    </List>
  );
};

export default CourseList;
