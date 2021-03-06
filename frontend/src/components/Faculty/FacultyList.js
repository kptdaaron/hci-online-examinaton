import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  EmailField,
  ReferenceField,
  ReferenceArrayField, SingleFieldList,
  ChipField,
  TopToolbar,
} from "react-admin";
import { ImportButton } from "react-admin-import-csv";
import { CreateButton, ExportButton } from "ra-ui-materialui";

const FacultyList = (props) => {
  const ListActions = (props) => {
    const {
      className,
      basePath,
      total,
      resource,
      currentSort,
      filterValues,
      exporter,
    } = props;
    return (
      <TopToolbar className={className}>
        <CreateButton basePath={basePath} />
        <ExportButton
          disabled={total === 0}
          resource={resource}
          sort={currentSort}
          filter={filterValues}
          exporter={exporter}
        />
        <ImportButton {...props} />
      </TopToolbar>
    );
  };

  return (
    <List {...props} actions={<ListActions />}>
      <Datagrid>
        <TextField label="Id" source="faculty_id" />
        <EmailField source="email" />
        <TextField source="firstName" />
        <TextField source="lastName" />
        {/* <ReferenceArrayField source="exams" reference="faculty">
          <SingleFieldList>
            <ChipField source="name" />
          </SingleFieldList>
        </ReferenceArrayField> */}
        <EditButton basePath="/faculty" />
        <DeleteButton basePath="/faculty" />
      </Datagrid>
    </List>
  );
};

export default FacultyList;
