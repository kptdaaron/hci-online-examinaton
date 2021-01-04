import React from 'react'
import { SelectInput, Edit, SimpleForm, TextInput, required, PasswordInput } from 'react-admin'

const UserEdit = (props) => {
    return (
        <Edit title='Edit User' {...props}>
            <SimpleForm>
                <TextInput label='Id' source='user_id' validate={required()} />
                <TextInput source='email' validate={required()}/>
                <PasswordInput source='password' validate={required()} />
                <TextInput source='firstName' validate={required()}/>
                <TextInput source='lastName' validate={required()}/>
                <SelectInput source='role' validate={required()} choices={[
                    {id: 'Admin', name: 'Admin'},
                    {id: 'Faculty', name: 'Faculty'},
                    {id: 'Student', name: 'Student'},
                ]} />
            </SimpleForm>
        </Edit>
    )
}

export default UserEdit;