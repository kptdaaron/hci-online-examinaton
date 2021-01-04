import React from 'react'
import { Edit, SimpleForm, TextInput, required } from 'react-admin'

const ProgramEdit = (props) => {
    return (
        <Edit title='Edit Program' {...props}>
            <SimpleForm>
                <TextInput disabled source='program_id' />
                <TextInput source='title' validate={required()}/>
                <TextInput source='description' validate={required()}/>
            </SimpleForm>
        </Edit>
    )
}

export default ProgramEdit;