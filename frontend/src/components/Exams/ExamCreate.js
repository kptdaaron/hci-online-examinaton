import React, { useState } from "react";
import {
  Create,
  ReferenceInput,
  SelectInput,
  SaveButton, DeleteButton,
  DateInput,
  FormWithRedirect,
  TextInput,
  NumberInput,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";
import { Typography, Box, Toolbar } from "@material-ui/core";


const ExamCreate = (props) => {
  return (
    <Create title="Create Exam" {...props}>
<FormWithRedirect
    {...props}
    render={(formProps) => (
      // here starts the custom form layout
      <form>
        <Box p="1em">
          <Box display="flex">
            <Box flex={2} mr="1em">
              <Typography variant="h6" gutterBottom>
                Exam Details
              </Typography>

              <Box display="flex">
                <Box flex={1} mr="0.5em">
                  <ReferenceInput
                    label="Tag Program"
                    source="program"
                    reference="programs"
                  >
                    <SelectInput optionText="title" fullWidth />
                  </ReferenceInput>
                </Box>
                <Box flex={1} ml="0.5em">
                  <ReferenceInput
                    label="Tag Course"
                    source="course"
                    reference="courses"
                  >
                    <SelectInput optionText="course_id" fullWidth />
                  </ReferenceInput>
                </Box>
              </Box>
              <Box display="flex">
                <Box flex={1} mr="0.5em">
                  <DateInput source="examDate.start" label="Date Start" fullWidth />
                </Box>
                <Box flex={1} mr="0.5em">
                  <DateInput source="examDate.end" label="Date End" fullWidth />
                </Box>
                <Box flex={1} ml="0.5em">
                  <NumberInput source="duration" label="Duration (in minutes)" fullWidth />
                </Box>
                <Box flex={1} ml="0.5em">
                  <NumberInput source="marks" label="Marks (per answer)" fullWidth />
                </Box>
              </Box>
              <TextInput source="title" resource="exams" fullWidth />
              <Typography variant="h6" gutterBottom>
                Question Details
              </Typography>
              <ArrayInput source="questions">
                <SimpleFormIterator>
                  <TextInput label="Question" source="body" fullWidth />
                  <TextInput
                    label="Correct Answer"
                    source="choices.a.text"
                    fullWidth
                  />
                  <TextInput
                    label="Other Choice"
                    source="choices.b.text"
                    fullWidth
                  />
                  <TextInput
                    label="Other Choice"
                    source="choices.c.text"
                    fullWidth
                  />
                  <TextInput
                    label="Other Choice"
                    source="choices.d.text"
                    fullWidth
                  />
                </SimpleFormIterator>
              </ArrayInput>
            </Box>
          </Box>
        </Box>

        <Toolbar>
          <Box display="flex" justifyContent="space-between" width="100%">
            <SaveButton
              saving={formProps.saving}
              handleSubmitWithRedirect={formProps.handleSubmitWithRedirect}
            />
            <DeleteButton record={formProps.record} />
          </Box>
        </Toolbar>
      </form>
    )}
  />
    </Create>
  );
};
export default ExamCreate;
