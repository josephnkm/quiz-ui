import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AppBar, Link, Toolbar, Typography, Breadcrumbs, Container, Button } from '@mui/material';
import { GET_ALL_QUIZ_URL, UPDATE_QUIZ_URL, SAVE_ALL_QUIZ_URL, PARSE_TEXT_TO_QUIZ_MCQ_URL } from "../Utils/endpoints.js";
// import '../App/QuizApiService';
import '../Assets/Styles/QuizPage.css'; // Importing a CSS file for additional styles


const QuizPage = () => {
    const [questions, setQuestions] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    // Fetch saved MCQs when the component mounts
    useEffect(() => {
        axios.get(GET_ALL_QUIZ_URL)
            .then((response) => {
                setQuestions(response.data.questions);
            })
            .catch((error) => {
                console.error('Failed to load MCQs', error);
            });
    }, []);

    // Handle answer selection
    const handleOptionChange = (qIndex, optionIndex) => {
        setSelectedAnswers(prev => {
            const newAnswers = { ...prev };
            // console.log('New answers:', JSON.stringify(newAnswers));

            // Initialize array for the question if it doesn't exist
            if (questions[qIndex].multipleAnswers) {
                if (!newAnswers[qIndex]) newAnswers[qIndex] = [];
                
                // Check if the option is already selected
                if (newAnswers[qIndex].includes(optionIndex)) {
                    // If already selected, remove it
                    newAnswers[qIndex] = newAnswers[qIndex].filter(opt => opt !== optionIndex);
                } else {
                    // If not selected, add it
                    newAnswers[qIndex].push(optionIndex);
                }
            } else {
                // For single answers, replace the answer
                newAnswers[qIndex] = [optionIndex];
            }
    
            // console.log('Updated answers:', JSON.stringify(newAnswers));
            return newAnswers;
        });
    };
    

    // Handle quiz submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowResults(true);
    };

    // Helper function to check if an option is correct
    const isCorrectAnswer = (qIndex, optionIndex) => {
        // console.log(qIndex, optionIndex)
        if (qIndex == null || optionIndex == null) {
            return false;
        }
        // console.log(questions[qIndex].options[optionIndex].isCorrect)
        return questions[qIndex].options[optionIndex].isCorrect;
    };

    // Helper function to check if an option is selected
    const isSelectedAnswer = (qIndex, optionIndex) => {
        return selectedAnswers[qIndex]?.includes(optionIndex);
    };

    // Helper function to get the result for multiple answers
    // Helper function to get the result for multiple answers
    const getMultipleAnswersResult = (qIndex) => {
        const selected = selectedAnswers[qIndex] || [];
        const correctCount = selected.filter(oIndex => isCorrectAnswer(qIndex, oIndex)).length;
        const totalCorrect = questions[qIndex].options.filter(option => option.isCorrect).length;
        // if(qIndex == 1) {
        //     console.log('selected type of',JSON.stringify(selected))
        //     console.log('selected',selected)
        // }
        // console.log(`Question ${qIndex + 1}: ${correctCount} correct out of ${totalCorrect}`);
        
        return { correctCount, totalCorrect };
    };

    const checkMultipleAnswersResult = (qIndex) => {
        const selected = selectedAnswers[qIndex] || [];
        const correctAnswers = questions[qIndex].options
            .map((option, index) => (option.isCorrect ? index : null))
            .filter(index => index !== null); // Get indexes of correct answers
    
        const hasIncorrectAnswers = selected.some(oIndex => !isCorrectAnswer(qIndex, oIndex)); // Check for any incorrect selections
    
        const isExactMatch = selected.length === correctAnswers.length && correctAnswers.every(correctIndex => selected.includes(correctIndex));
    
        console.log(`Question ${qIndex + 1}: Selected: ${selected}, Correct: ${correctAnswers}, Has Incorrect: ${hasIncorrectAnswers}, Exact Match: ${isExactMatch}`);
    
        return !hasIncorrectAnswers && isExactMatch; // Return true only if no incorrect answers and exact match
    };
    


    const isArrayNullOrEmpty = (arr) => {
        // console.log('arr', arr);
        return !arr || arr.length === 0;
    }

    return (
        <Container>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Quiz
                    </Typography>
                </Toolbar>
            </AppBar>

            <Breadcrumbs aria-label="breadcrumb" style={{ margin: '20px 0' }}>
                <Link color="inherit" href="/">
                    Home
                </Link>
                <Typography color="textPrimary">Take Quiz</Typography>
            </Breadcrumbs>

            <Typography variant="h4" gutterBottom>Take Quiz</Typography>

            <div className="quiz-container">
                {questions.length > 0 ? (
                    <form onSubmit={handleSubmit} className="quiz-form">
                        {questions.map((question, qIndex) => (
                            <div key={qIndex} className="question-block">
                                <h4 className="question-text">{qIndex + 1}. {question.question}</h4>
                                {question.options.map((option, oIndex) => (
                                    <div key={oIndex} className="option-block">
                                        <label
                                            className={`option-label ${showResults ? isCorrectAnswer(qIndex, oIndex) ? 'correct-answer' : isSelectedAnswer(qIndex, oIndex) ? 'incorrect-answer' : '' : ''}`}
                                        >
                                            <input
                                                type={question.multipleAnswers ? 'checkbox' : 'radio'}
                                                name={`question-${qIndex}`}
                                                value={option.text}
                                                disabled={showResults}
                                                onChange={() => handleOptionChange(qIndex, oIndex)}
                                            />
                                            {option.text}
                                        </label>
                                        {showResults && (
                                            <div className="rationale">
                                                <strong>Rationale:</strong> {option.rationale}
                                            </div>
                                        )}
                                    </div>
                                ))}
                                {showResults && !isArrayNullOrEmpty(selectedAnswers) && (
                                    <div className="result-block">
                                        {question.multipleAnswers ? (
                                            (() => {
                                                // const { correctCount, totalCorrect } = getMultipleAnswersResult(qIndex);
                                                // const resultText = correctCount === totalCorrect ? `Right ${correctCount}/${totalCorrect}` : `Wrong ${correctCount}/${totalCorrect}`;
                                                const isMultipleAnswersCorrect = checkMultipleAnswersResult(qIndex);
                                                const resultText = isMultipleAnswersCorrect ? `Right` : `Wrong`;

                                                return (
                                                    <Button
                                                        variant="contained"
                                                        style={{ backgroundColor: isMultipleAnswersCorrect ? 'green' : 'red', color: 'white', marginTop: '10px' }}
                                                    >
                                                        Answer: {resultText}
                                                    </Button>
                                                );
                                            })()
                                        ) : (
                                            <Button
                                                variant="contained"
                                                style={{
                                                    backgroundColor: isCorrectAnswer(qIndex, selectedAnswers[qIndex]?.[0]) ? 'green' : 'red',
                                                    color: 'white',
                                                    marginTop: '10px'
                                                }}
                                            >
                                                Answer: {isCorrectAnswer(qIndex, selectedAnswers[qIndex]?.[0]) ? 'Right' : 'Wrong'}
                                            </Button>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                        {!showResults && <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>Submit Answers</Button>}
                    </form>
                ) : (
                    <p>Loading questions...</p>
                )}
            </div>
        </Container>
    );
};

export default QuizPage;
