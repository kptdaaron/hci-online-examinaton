import React from 'react'
import { SelectInput, Edit, SimpleForm, TextInput, required, PasswordInput, ReferenceInput } from 'react-admin'

const UserEdit = (props) => {
    return (
        <Edit title='Edit User' {...props}>
            <SimpleForm>
                <TextInput label='Id' source='user_id' validate={required()} />
                <TextInput source='email' validate={required()} />
                <PasswordInput source='password' validate={required()} />
                <TextInput source='firstName' validate={required()} />
                <TextInput source='lastName' validate={required()} />
                <ReferenceInput label='Select Role' source='name' reference='role' validate={required()}>
                    <SelectInput optionText='name' validate={required()} fullWidth />
                </ReferenceInput>
            </SimpleForm>
        </Edit>
    )
}

export default UserEdit;