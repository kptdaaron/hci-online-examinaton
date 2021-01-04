import React from 'react'
import { Create, TextInput, SimpleForm , required } from 'react-admin'

const ProgramCreate = (props) => {
    return ( 
    <Create {...props}>
        <SimpleForm>
            <TextInput label='Program Id' source='program_id' validate={required()}/>
            <TextInput source='title' validate={required()}/>
            <TextInput source='description' validate={required()}/>
        </SimpleForm>

    </Create>

    )
}

export default ProgramCreate;