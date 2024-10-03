import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import MCQCreator from './Components/MCQCreator';
import QuizPage from './Components/QuizPage';
import ViewEditMCQs from './Components/ViewEditMCQs';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function App() {
  return (
    <Router>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <Container component="main" style={{ flex: '1', padding: '20px' }}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/create-mcqs" element={<MCQCreator />} />
                    <Route path="/take-quiz" element={<QuizPage />} />
                    <Route path="/edit-mcqs" element={<ViewEditMCQs />} />
                    <Route path="*" element={<HomePage />} /> {/* Fallback route */}
                </Routes>
            </Container>
            <Footer />
        </div>
    </Router>
  );
}

const HomePage = () => {
  return (
    <Box textAlign="center">
      <Typography variant="h4" gutterBottom>
        Welcome to the father of Archers and UWorld: NCLEX MCQ App
      </Typography>
      <Typography variant="body1" gutterBottom>
        Choose an option to get started:
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Link to="/create-mcqs" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">
            Create MCQs
          </Button>
        </Link>
        <Link to="/take-quiz" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="secondary">
            Take Quiz
          </Button>
        </Link>
        <Link to="/edit-mcqs" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="success">
            View/Edit MCQs
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default App;
