import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik, Field, FieldArray, Form } from 'formik';
import * as Yup from 'yup';
import {
    AppBar,
    Link,
    Toolbar,
    Typography,
    Breadcrumbs,
    Container,
    Button
} from '@mui/material';
import { GET_ALL_QUIZ_URL, UPDATE_QUIZ_URL, SAVE_ALL_QUIZ_URL, PARSE_TEXT_TO_QUIZ_MCQ_URL } from "../Utils/endpoints.js";


const ViewEditMCQs = () => {
    const [mcqs, setMcqs] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(GET_ALL_QUIZ_URL)
            .then((response) => {
                setMcqs(response.data.questions);
            })
            .catch((error) => {
                setError('Failed to load MCQs.');
            });
    }, []);

    // Validation schema using Yup
    const validationSchema = Yup.object().shape({
        questions: Yup.array().of(
            Yup.object().shape({
                question: Yup.string().required('Question is required'),
                options: Yup.array().of(
                    Yup.object().shape({
                        text: Yup.string().required('Option text is required'),
                        rationale: Yup.string().required('Rationale is required')
                    })
                ),
                multipleAnswers: Yup.boolean().required('Please specify if multiple answers are allowed')
            })
        )
    });

    // Handle saving all edited MCQs
    const handleSave = (values) => {
        axios.post(SAVE_ALL_QUIZ_URL, { questions: values.questions })
            .then((response) => {
                alert('Saved successfully');
            })
            .catch((error) => {
                setError('Failed to save MCQs.');
            });
    };

    // Handle updating a single question
    const handleUpdateQuestion = (index, question) => {
        
        // axios.put(`http://192.168.1.65:8080/api/update-mcq/${question.id}`, question)
        axios.put(UPDATE_QUIZ_URL.replace('{questionId}', question.id), question)
            .then((response) => {
                alert(`Question ${index + 1} updated successfully`);
            })
            .catch((error) => {
                setError(`Failed to update Question ${index + 1}.`);
            });
    };

    return (
        <Container>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        MCQ Editor
                    </Typography>
                </Toolbar>
            </AppBar>

            <Breadcrumbs aria-label="breadcrumb" style={{ margin: '20px 0' }}>
                <Link color="inherit" href="/">
                    Home
                </Link>
                <Typography color="textPrimary">View and Edit MCQs</Typography>
            </Breadcrumbs>

            <Typography variant="h4" gutterBottom>View and Edit MCQs</Typography>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {mcqs.length > 0 ? (
                <Formik
                    initialValues={{ questions: mcqs }}
                    validationSchema={validationSchema}
                    onSubmit={handleSave}
                >
                    {({ values, errors, touched, setFieldValue }) => (
                        <Form>
                            <FieldArray name="questions">
                                {({ push, remove }) => (
                                    <div>
                                        {values.questions.map((mcq, qIndex) => (
                                            <div key={qIndex} style={{ marginBottom: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
                                                <h4>Question {qIndex + 1}:</h4>
                                                <Field
                                                    name={`questions[${qIndex}].question`}
                                                    style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                                                    placeholder="Enter question"
                                                />
                                                {errors.questions?.[qIndex]?.question && touched.questions?.[qIndex]?.question && (
                                                    <p style={{ color: 'red' }}>{errors.questions[qIndex].question}</p>
                                                )}

                                                <FieldArray name={`questions[${qIndex}].options`}>
                                                    {({ push, remove }) => (
                                                        <div>
                                                            <h5>Options:</h5>
                                                            {mcq.options.map((option, oIndex) => (
                                                                <div key={oIndex} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                                    <Field
                                                                        name={`questions[${qIndex}].options[${oIndex}].text`}
                                                                        style={{ width: '40%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginRight: '10px' }}
                                                                        placeholder="Enter option"
                                                                    />
                                                                    <Field
                                                                        name={`questions[${qIndex}].options[${oIndex}].rationale`}
                                                                        style={{ width: '40%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginRight: '10px' }}
                                                                        placeholder="Enter rationale"
                                                                    />
                                                                    <Field
                                                                        type="checkbox"
                                                                        name={`questions[${qIndex}].options[${oIndex}].isCorrect`}
                                                                        style={{ marginRight: '10px' }}
                                                                    />
                                                                    <label>Correct</label>
                                                                    <Button
                                                                        variant="contained"
                                                                        color="secondary"
                                                                        onClick={() => remove(oIndex)}
                                                                        style={{ marginLeft: '10px' }}
                                                                    >
                                                                        Remove
                                                                    </Button>
                                                                </div>
                                                            ))}
                                                            <Button
                                                                variant="contained"
                                                                color="primary"
                                                                onClick={() => push({ text: '', rationale: '', isCorrect: false })}
                                                                style={{ marginTop: '10px' }}
                                                            >
                                                                Add Option
                                                            </Button>
                                                        </div>
                                                    )}
                                                </FieldArray>

                                                <h5>Allow Multiple Answers:</h5>
                                                <label>
                                                    <Field
                                                        type="radio"
                                                        name={`questions[${qIndex}].multipleAnswers`}
                                                        value="true"
                                                        checked={mcq.multipleAnswers === true}
                                                        onChange={() => setFieldValue(`questions[${qIndex}].multipleAnswers`, true)}
                                                        style={{ marginRight: '10px' }}
                                                    />
                                                    Yes
                                                </label>
                                                <label>
                                                    <Field
                                                        type="radio"
                                                        name={`questions[${qIndex}].multipleAnswers`}
                                                        value="false"
                                                        checked={mcq.multipleAnswers === false}
                                                        onChange={() => setFieldValue(`questions[${qIndex}].multipleAnswers`, false)}
                                                        style={{ marginRight: '10px' }}
                                                    />
                                                    No
                                                </label>
                                                {errors.questions?.[qIndex]?.multipleAnswers && touched.questions?.[qIndex]?.multipleAnswers && (
                                                    <p style={{ color: 'red' }}>{errors.questions[qIndex].multipleAnswers}</p>
                                                )}

                                                <Button
                                                    variant="contained"
                                                    color="secondary"
                                                    onClick={() => remove(qIndex)}
                                                    style={{ marginTop: '10px' }}
                                                >
                                                    Remove Question
                                                </Button>

                                                <Button
                                                    variant="contained"
                                                    color="success"
                                                    onClick={() => handleUpdateQuestion(qIndex, mcq)}
                                                    style={{ marginTop: '10px', marginLeft: '10px' }}
                                                >
                                                    Update
                                                </Button>
                                            </div>
                                        ))}
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => push({ question: '', options: [{ text: '', rationale: '', isCorrect: false }], multipleAnswers: false })}
                                            style={{ marginTop: '20px' }}
                                        >
                                            Add Question
                                        </Button>
                                    </div>
                                )}
                            </FieldArray>
                            <Button type="submit" variant="contained" color="warning" style={{ marginTop: '20px' }}>
                                Save MCQs
                            </Button>
                        </Form>
                    )}
                </Formik>
            ) : (
                <p>Loading MCQs...</p>
            )}
        </Container>
    );
};

export default ViewEditMCQs;
