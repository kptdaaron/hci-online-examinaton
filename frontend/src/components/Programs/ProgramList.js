import React from 'react'
import { List, Datagrid, TextField, DeleteButton, NumberField } from 'react-admin'

const ProgramList = (props) => {
    return <List {...props}>
            <Datagrid rowClick='edit'>
                <TextField label='Program Name' source='title' />
                <TextField label='Description' source='description' />
                <DeleteButton basePath='/programs' />
            </Datagrid>
        </List>
    
};

export default ProgramList;