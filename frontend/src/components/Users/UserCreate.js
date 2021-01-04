import React from 'react'
import { SelectInput, Create, SimpleForm, TextInput,PasswordInput, required, ReferenceInput} from 'react-admin'

const UserCreate = (props) => {
    return (
        <Create title='Create User' {...props}>
            <SimpleForm>
                <TextInput label='Id' source='user_id' validate={required()} />
                <TextInput source='email' validate={required()}/>
                <PasswordInput source='password' validate={required()} />
                <TextInput source='firstName' validate={required()}/>
                <TextInput source='lastName' validate={required()}/>
                <ReferenceInput label='Select Role' source='roles' reference='roles' validate={required()}>
                    <SelectInput optionText='name' validate={required()}/>
                </ReferenceInput>
            </SimpleForm>
        </Create>
    )
}

export default UserCreate;