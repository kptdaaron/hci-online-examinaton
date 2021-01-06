import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin'

const CourseList = (props) => {
    return <List {...props}>
        <Datagrid rowClick='edit'>
            <TextField source='course_id' />
            <TextField source='title' />
            <TextField source='description' />
            <TextField source='tags' />
            <EditButton basePath='/courses' />
            <DeleteButton basePath='/courses' />
        </Datagrid>
    </List>

};

export default CourseList;