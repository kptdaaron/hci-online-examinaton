import * as React from "react";
import {
  FormWithRedirect,
  DateInput,
  SelectArrayInput,
  TextInput,
  SaveButton,
  DeleteButton,
  NullableBooleanInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";
import { Typography, Box, Toolbar } from "@material-ui/core";

const ExamForm = (props) => (
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
                  <DateInput source="examDate.start" fullWidth />
                </Box>
                <Box flex={1} mr="0.5em">
                  <DateInput source="examDate.end" fullWidth />
                </Box>
                <Box flex={1} ml="0.5em">
                  <NumberInput source="duration" fullWidth />
                </Box>
                <Box flex={1} ml="0.5em">
                  <NumberInput source="marks" fullWidth />
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
);

export default ExamForm;
