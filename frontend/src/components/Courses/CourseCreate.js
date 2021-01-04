import React from 'react'
import { Create, TextInput, SimpleForm, required, ReferenceInput, SelectInput } from 'react-admin';

const CourseCreate = (props) => {
    return (
        <Create title='Create Course' {...props}>
            <SimpleForm title='Add Course'>
                <ReferenceInput label='Tagged Program' source='tags' reference='programs' validate={required()}>
                    <SelectInput optionText='title' validate={required()}/>
                </ReferenceInput>
                <TextInput label='Course Id' source='course_id' validate={required()}/>
                <TextInput label='Course Title' source='title' validate={required()}/>
                <TextInput label='Course Desription' source='description' validate={required()}/>
            </SimpleForm>
        </Create>
    )


}

export default CourseCreate;