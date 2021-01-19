import React from "react";
import { Edit } from "react-admin";
import ExamForm from "./ExamForm";

const ExamEdit = (props) => {
  return(
  
  <Edit  undoable={true} {...props}>
    <ExamForm />
  </Edit>
);}

export default ExamEdit;
