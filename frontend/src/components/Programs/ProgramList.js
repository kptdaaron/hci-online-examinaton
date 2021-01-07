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
  ReferenceArrayField,
  SingleFieldList,
} from "react-admin";

const ProgramList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField label="Program Name" source="title" />
        <TextField label="Description" source="description" />
        <ReferenceArrayField source="tags" reference="courses">
          <SingleFieldList>
            <ChipField source="course_id" />
          </SingleFieldList>
        </ReferenceArrayField>
        <EditButton basePath="/programs" />
        <DeleteButton basePath="/programs" />
      </Datagrid>
    </List>
  );
};

export default ProgramList;
