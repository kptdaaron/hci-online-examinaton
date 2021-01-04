import React, { useState } from 'react'
import { Create, ReferenceInput, SelectInput, SimpleForm, TextInput, DateInput, NumberInput, required, DateField} from 'react-admin';

const ExamCreate = (props) => {
    return (
        <Create title='Create User' {...props}>
            <SimpleForm>
            <ReferenceInput label='Tag Subject' source='subjectTag' reference='subjects' optionValue='subjectName' validate={required()}>
                <SelectInput optionText='subjectName' optionValue='subjectName' validate={required()}/>
            </ReferenceInput>
                <TextInput label='Exam Title' source='examTitle' />
                <DateInput label='Date' source='examDate' />
                <DateField label='Duration' source='examDuration' />
                <NumberInput min='1' max='5' label='Marks Per Right Answer' source='marksPerRightAnswer' />
                <NumberInput min='1' max='5' label='Marks Per Wrong Answer' source='marksPerWrongtAnswer' />
            </SimpleForm>
        </Create>
    )
        };
export default ExamCreate;