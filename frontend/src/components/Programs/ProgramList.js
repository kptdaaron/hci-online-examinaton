import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DeleteButton,
  EditButton,
  NumberField,
  ReferenceField,
  ArrayField,
  ChipField,
} from "react-admin";

const ProgramList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField label="Program Name" source="title" />
        <TextField label="Description" source="description" />
        <ArrayField source="tags" reference="courses">
          <ChipField source="course_id" />
        </ArrayField>
        <EditButton basePath="/programs" />
      </Datagrid>
    </List>
  );
};

export default ProgramList;
