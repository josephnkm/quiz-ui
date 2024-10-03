import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Field, FieldArray, Form } from 'formik';
import * as Yup from 'yup';
import { Breadcrumbs, Link, Typography, AppBar, Toolbar, Container } from '@mui/material';
import { GET_ALL_QUIZ_URL, UPDATE_QUIZ_URL, SAVE_ALL_QUIZ_URL, PARSE_TEXT_TO_QUIZ_MCQ_URL } from "../Utils/endpoints.js";

// import QuizApiService from '../App/QuizApiService.ts'

// Validation schema using Yup
const validationSchema = Yup.object().shape({
    questions: Yup.array().of(
        Yup.object().shape({
            question: Yup.string().required('Question is required'),
            options: Yup.array().of(
                Yup.object().shape({
                    text: Yup.string().required('Option text is required'),
                    rationale: Yup.string().required('Rationale is required'),
                    isCorrect: Yup.boolean().required('Please mark as correct or incorrect')
                })
            ),
            multipleAnswers: Yup.boolean().required('Please specify if multiple answers are allowed')
        })
    )
});

const MCQCreator = () => {
    const [inputText, setInputText] = useState('');
    const [mcqs, setMcqs] = useState(null);
    const [error, setError] = useState('');
    // const { parseTextToQuizMCQ, saveAllQuiz } = QuizApiService();

    // Handle text input change
    const handleTextChange = (event) => {
        setInputText(event.target.value);
    };

    // Handle parsing the text into JSON
    const handleParse = (event) => {
        event.preventDefault();
        axios.post(PARSE_TEXT_TO_QUIZ_MCQ_URL, { text: inputText })
            .then((response) => {
                setMcqs(response.data.questions);
                setError('');
            })
            .catch((error) => {
                setError('Failed to parse text.');
            });
    };

    // Handle saving the edited MCQs
    const handleSave = (values) => {
        
        axios.post(SAVE_ALL_QUIZ_URL, { questions: values.questions })
            .then(() => {
                alert('Saved successfully');
            })
            .catch(() => {
                setError('Failed to save MCQs.');
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
                <Typography color="textPrimary">Create MCQs</Typography>
            </Breadcrumbs>

            <Typography variant="h4" gutterBottom>Create MCQs</Typography>

            <form onSubmit={handleParse}>
                <textarea
                    rows="10"
                    cols="50"
                    placeholder="Enter your text here..."
                    value={inputText}
                    onChange={handleTextChange}
                    style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
                />
                <br />
                <button type="submit" style={{ padding: '10px 20px' }}>Parse Text</button>
            </form>

            {error && <Typography color="error" style={{ marginTop: '20px' }}>{error}</Typography>}

            {mcqs && (
                <Formik
                    initialValues={{ questions: mcqs }}
                    validationSchema={validationSchema}
                    onSubmit={handleSave}
                >
                    {({ values, errors, touched, handleChange, setFieldValue }) => (
                        <Form>
                            <FieldArray name="questions">
                                {({ push, remove }) => (
                                    <div>
                                        {values.questions.map((mcq, qIndex) => (
                                            <div key={qIndex} style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
                                                <Typography variant="h6">Question {qIndex + 1}:</Typography>
                                                <Field
                                                    name={`questions[${qIndex}].question`}
                                                    style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                                                    placeholder="Enter question"
                                                />
                                                {errors.questions?.[qIndex]?.question && touched.questions?.[qIndex]?.question && (
                                                    <Typography color="error">{errors.questions[qIndex].question}</Typography>
                                                )}

                                                <FieldArray name={`questions[${qIndex}].options`}>
                                                    {({ push, remove }) => (
                                                        <div>
                                                            <Typography variant="subtitle1" style={{ margin: '10px 0' }}>Options:</Typography>
                                                            {mcq.options.map((option, oIndex) => (
                                                                <div key={oIndex} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                                    <Field
                                                                        name={`questions[${qIndex}].options[${oIndex}].text`}
                                                                        style={{ width: '60%', padding: '10px' }}
                                                                        placeholder="Enter option"
                                                                    />
                                                                    <Field
                                                                        name={`questions[${qIndex}].options[${oIndex}].rationale`}
                                                                        style={{ width: '30%', padding: '10px', marginLeft: '10px' }}
                                                                        placeholder="Enter rationale"
                                                                    />
                                                                    <label style={{ marginLeft: '10px' }}>
                                                                        <Field
                                                                            type="checkbox"
                                                                            name={`questions[${qIndex}].options[${oIndex}].isCorrect`}
                                                                        />
                                                                        Correct
                                                                    </label>
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => remove(oIndex)}
                                                                        style={{ marginLeft: '10px', padding: '5px 10px' }}
                                                                    >
                                                                        Remove
                                                                    </button>
                                                                </div>
                                                            ))}
                                                            <button
                                                                type="button"
                                                                onClick={() => push({ text: '', rationale: '', isCorrect: false })}
                                                                style={{ padding: '5px 10px' }}
                                                            >
                                                                Add Option
                                                            </button>
                                                        </div>
                                                    )}
                                                </FieldArray>

                                                <div style={{ marginTop: '10px' }}>
                                                    <Typography variant="subtitle1">Allow Multiple Answers:</Typography>
                                                    <label>
                                                        <Field
                                                            type="radio"
                                                            name={`questions[${qIndex}].multipleAnswers`}
                                                            value="true"
                                                            checked={mcq.multipleAnswers === true}
                                                            onChange={() => setFieldValue(`questions[${qIndex}].multipleAnswers`, true)}
                                                        />
                                                        Yes
                                                    </label>
                                                    <label style={{ marginLeft: '20px' }}>
                                                        <Field
                                                            type="radio"
                                                            name={`questions[${qIndex}].multipleAnswers`}
                                                            value="false"
                                                            checked={mcq.multipleAnswers === false}
                                                            onChange={() => setFieldValue(`questions[${qIndex}].multipleAnswers`, false)}
                                                        />
                                                        No
                                                    </label>
                                                    {errors.questions?.[qIndex]?.multipleAnswers && touched.questions?.[qIndex]?.multipleAnswers && (
                                                        <Typography color="error">{errors.questions[qIndex].multipleAnswers}</Typography>
                                                    )}
                                                </div>

                                                <button
                                                    type="button"
                                                    onClick={() => remove(qIndex)}
                                                    style={{ marginTop: '20px', padding: '5px 10px' }}
                                                >
                                                    Remove Question
                                                </button>
                                            </div>
                                        ))}
                                        <button
                                            type="button"
                                            onClick={() => push({ question: '', options: [{ text: '', rationale: '', isCorrect: false }], multipleAnswers: false })}
                                            style={{ padding: '10px 20px', marginTop: '20px' }}
                                        >
                                            Add Question
                                        </button>
                                    </div>
                                )}
                            </FieldArray>
                            <button type="submit" style={{ padding: '10px 20px', marginTop: '20px' }}>Save MCQs</button>
                        </Form>
                    )}
                </Formik>
            )}
        </Container>
    );
};

export default MCQCreator;
