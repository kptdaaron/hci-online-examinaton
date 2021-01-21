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

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    inlineBlock: { display: 'inline-flex', margin: '2px' },
});


const ExamCreate = (props) => {
  const classes = useStyles();
  return (
    <Create undoable={false} title="Create Exam" {...props}>
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
                      <DateInput
                        source="examDate.start"
                        label="Date Start"
                        fullWidth
                      />
                    </Box>
                    <Box flex={1} mr="0.5em">
                      <DateInput
                        source="examDate.end"
                        label="Date End"
                        fullWidth
                      />
                    </Box>
                    <Box flex={1} ml="0.5em">
                      <NumberInput
                        source="duration"
                        label="Duration (in minutes)"
                        fullWidth
                      />
                    </Box>
                    <Box flex={1} ml="0.5em">
                      <NumberInput
                        source="marks"
                        label="Marks (per answer)"
                        fullWidth
                      />
                    </Box>
                  </Box>
                  <TextInput source="title" resource="exams" fullWidth />
                  <Typography variant="h6" gutterBottom>
                    Question Details
                  </Typography>
                </Box>
              </Box>
              <ArrayInput source="questions">
                <SimpleFormIterator>
                  <TextInput label="Question body" source="body" fullWidth />
                  <TextInput
                    label="Correct Answer"
                    source="choices.a.text"
                    formClassName={classes.inlineBlock}
                    fullWidth
                  />
                  <TextInput
                    label="Option B"
                    source="choices.b.text"
                    formClassName={classes.inlineBlock}
                    fullWidth
                  />
                  <TextInput
                    label="Option C"
                    source="choices.c.text"
                    formClassName={classes.inlineBlock}
                    fullWidth
                  />
                  <TextInput
                    label="Option D"
                    source="choices.d.text"
                    formClassName={classes.inlineBlock}
                    fullWidth
                  />
                </SimpleFormIterator>
              </ArrayInput>
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
