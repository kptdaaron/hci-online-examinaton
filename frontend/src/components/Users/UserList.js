import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  EmailField,
  ReferenceField,
  ChipField,
  TopToolbar,
} from "react-admin";
import { ImportButton } from "react-admin-import-csv";
import { CreateButton, ExportButton } from "ra-ui-materialui";




const UserList = (props) => {
  
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
        <TextField label="Id" source="user_id" />
        <EmailField source="email" />
        <TextField source="firstName" />
        <TextField source="lastName" />
        <ReferenceField source="role" reference="role">
          <ChipField source="name" />
        </ReferenceField>
        <EditButton basePath="/users" />
        <DeleteButton basePath="/users" />
      </Datagrid>
    </List>
  );
};

export default UserList;
