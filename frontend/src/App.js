import React from "react";
import { Admin, Resource, Layout,ShowGuesser } from "react-admin";
import TreeMenu from "@bb-tech/ra-treemenu";
// import restProvider from 'ra-data-simple-rest';
import DataProvider from "./DataProvider";
// Imports for  Users
import UserList from "./components/Users/UserList";
import UserEdit from "./components/Users/UserEdit";
import UserCreate from "./components/Users/UserCreate";
//import for Faculty
import FacultyList from "./components/Faculty/FacultyList"
import FacultyCreate from "./components/Faculty/FacultyCreate"
import FacultyEdit from "./components/Faculty/FacultyEdit"
// Imports for Courses
import CourseList from "./components/Courses/CourseList";
import CourseCreate from "./components/Courses/CourseCreate";
import CourseEdit from "./components/Courses/CourseEdit";
// Imports for Admin
import AdminList from "./components/Admin/AdminList"
import AdminCreate from "./components/Admin/AdminCreate"
import AdminEdit from "./components/Admin/AdminEdit"
// Imports for Exams
import ProgramList from "./components/Programs/ProgramList";
import ProgramCreate from "./components/Programs/ProgramCreate";
import ProgramEdit from "./components/Programs/ProgramEdit";
import { createMuiTheme } from "@material-ui/core/styles";
// Imports for Exams
import ExamCreate from "./components/Exams/ExamCreate";
import ExamEdit from "./components/Exams/ExamEdit";
import ExamList from "./components/Exams/ExamList";

// Import for Icons
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/People";
import BallotIcon from "@material-ui/icons/Ballot";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
import Dashboard from "./Dashboard";
<<<<<<< HEAD
=======


// import for auth
import authProvider from "./authProvider"
import MyLoginPage from "./MyLoginPage"
>>>>>>> b8ed6ebb9c920a600957d8fe3a7f3501af9c31b2

const theme = createMuiTheme({
  palette: {
    type: "light",
  },
});

function App() {
  return (
    <Admin
      layout={(props) => <Layout {...props} menu={TreeMenu} />}
      disableTelemetry
      authProvider={authProvider} 
      // loginPage={MyLoginPage}
      dashboard={Dashboard}
      dataProvider={DataProvider}
    >
      <Resource
        name="manage-users"
        options={{ label: "Manage Users", isMenuParent: true }}
      />
      <Resource
        icon={SupervisedUserCircleIcon}
        name="admin"
        options={{ label: "Admin", menuParent: "manage-users" }}
        list={AdminList}
        create={AdminCreate}
        edit={AdminEdit}
      />
      <Resource
        icon={AssignmentIndIcon}
        name="faculty"
        options={{ label: "Faculty", menuParent: "manage-users" }}
        list={FacultyList}
        create={FacultyCreate}
        edit={FacultyEdit}
      />
      <Resource
        icon={UserIcon}
        name="users"
        options={{ label: "Students", menuParent: "manage-users" }}
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />

      <Resource
        icon={DeveloperBoardIcon}
        options={{ label: "Programs" }}
        name="programs"
        list={ProgramList}
        create={ProgramCreate}
        edit={ProgramEdit}
      />
      <Resource
        icon={PostIcon}
        options={{ label: "Courses" }}
        name="courses"
        list={CourseList}
        create={CourseCreate}
        edit={CourseEdit}
      />
      <Resource
        icon={BallotIcon}
        options={{ label: "Exams" }}
        name="exams"
        list={ExamList}
        create={ExamCreate}
        edit={ExamEdit}
      />
    </Admin>
  );
}

export default App;
