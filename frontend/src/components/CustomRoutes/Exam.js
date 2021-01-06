// import * as React from "react";
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import { Title } from 'react-admin';

// const Exam = () => (
//     <Card>
//         <Title title="Exam Page" />
//         <CardContent>
//             <Card>
//                 <h1>This is the Examination Page</h1>
//             </Card>
//         </CardContent>
//     </Card>
// );

// export default Exam;

import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import { v4 as uuidv4 } from "uuid";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function Exam() {
  const classes = useStyles();
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), question: "", lastName: "" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { id: uuidv4(), question: "", lastName: "" },
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

  return (
    <Container>
      <h1>Questions</h1>
      <form className={classes.root} onSubmit={handleSubmit}>
        {inputFields.map((inputField) => (
          <div key={inputField.id}>
            <TextField
              id="standard-full-width"
              name="question"
              label="Question"
              variant="filled"
              fullWidth
              value={inputField.question}
              onChange={(event) => handleChangeInput(inputField.id, event)}
            />
            <TextField
              name="correctAnswer"
              label="Correct Answer"
              variant="filled"
              value={inputField.lastName}
              onChange={(event) => handleChangeInput(inputField.id, event)}
            />
            <TextField
              name="lastName"
              label="Filler"
              variant="filled"
              value={inputField.lastName}
              onChange={(event) => handleChangeInput(inputField.id, event)}
            />
            <TextField
              name="lastName"
              label="Filler"
              variant="filled"
              value={inputField.lastName}
              onChange={(event) => handleChangeInput(inputField.id, event)}
            />
            <TextField
              name="lastName"
              label="Filler"
              variant="filled"
              value={inputField.lastName}
              onChange={(event) => handleChangeInput(inputField.id, event)}
            />
            <IconButton
              disabled={inputFields.length === 1}
              onClick={() => handleRemoveFields(inputField.id)}
            >
              <RemoveIcon />
            </IconButton>
            <IconButton onClick={handleAddFields}>
              <AddIcon />
            </IconButton>
          </div>
        ))}
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          //   endIcon={<Icon>send</Icon>}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default Exam;
