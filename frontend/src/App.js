import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import DataProvider from './DataProvider';
// Imports for  Users
import UserList from './components/Users/UserList';
import UserEdit from './components/Users/UserEdit';
import UserCreate from './components/Users/UserCreate'
// Imports for Courses
import CourseList from './components/Courses/CourseList';
import CourseCreate from './components/Courses/CourseCreate';
import CourseEdit from './components/Courses/CourseEdit';
// Imports for Subjects
import ProgramList from './components/Programs/ProgramList';
import ProgramCreate from './components/Programs/ProgramCreate';
import ProgramEdit from './components/Programs/ProgramEdit';
import { createMuiTheme } from '@material-ui/core/styles';
// Imports for Exams
import ExamCreate from './components/Exams/ExamCreate';
import ExamEdit from './components/Exams/ExamEdit';
import ExamList from './components/Exams/ExamList';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/People';
import BallotIcon from '@material-ui/icons/Ballot';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import Dashboard from './Dashboard';

const theme = createMuiTheme({
  palette: {
    type: 'dark', 
  }
});

const dataProvider = restProvider('http://localhost:3000/api');

function App() {
    return (
        <Admin dashboard={Dashboard} theme={theme} dataProvider={DataProvider}>
            <Resource icon={UserIcon} name='users' options={{ label: 'Manage Users' }} list={UserList} create={UserCreate} edit={UserEdit} />
            <Resource icon={DeveloperBoardIcon}  name='programs' list={ProgramList} create={ProgramCreate} edit={ProgramEdit} />
            <Resource icon={PostIcon} name='courses' list={CourseList} create={CourseCreate} edit={CourseEdit} />
            {/* <Resource icon={PostIcon} name='subjects' list={SubjectList} create={SubjectCreate} edit={SubjectEdit} /> */}
            <Resource icon={BallotIcon} name='exams' list={ExamList} create={ExamCreate} edit={ExamEdit} />
            <Resource name='roles' />
        </Admin>
    );
}

export default App;