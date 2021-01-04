import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin'

const ExamList = (props) => {
    return <List {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField label='Tagged Subject' source='subjectTag' />
                <TextField label='Exam Title' source='examTitle' />
                <TextField label='Schedule' source='examDate' />
                <TextField label='Duration' source='examDuration' />
                <TextField label='Created' source='publishedAt' />
                <TextField label='Marks Per Right' source='marksPerRightAnswer' fullWidth='true' />
                <TextField label='Marks Per Wrong' source='marksPerRightAnswer' />
                <TextField label='Status' source='status' />
                <EditButton basePath='/subjects' />
                <DeleteButton basePath='/subjects' />
            </Datagrid>
        </List>
    
};

export default ExamList;