import React from "react";
import { Edit } from "react-admin";
import ExamForm from "./ExamForm";

const ExamEdit = (props) => (
  <Edit {...props}>
    <ExamForm />
  </Edit>
);

export default ExamEdit;
