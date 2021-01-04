import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton, EmailField, Show, TabbedShowLayout, Tab } from 'react-admin'

const UserList = (props) => {
    return <List {...props}>
            <Datagrid rowClick="edit">
                <TextField label='Id' source='user_id' />
                <EmailField source='email' />
                <TextField source='firstName' />
                <TextField source='lastName' />
                <EditButton basePath='/users' />
                <DeleteButton basePath='/users' />
            </Datagrid>
        </List>
};

export default UserList;