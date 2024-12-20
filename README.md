# Quiz App

A simple quiz application where users can answer multiple-choice questions and receive feedback on whether their answers are correct or not.

## Features

- **Random Questions**: A set of questions with multiple-choice options.
- **Answer Feedback**: Users receive immediate feedback after answering a question, indicating if their answer is correct or not.
- **Next Question**: After answering, the next question is loaded automatically.
- **End of Quiz**: After the last question, users are alerted that the quiz is finished.

## How It Works

1. The app loads a series of questions from a predefined array (`quizData`).
2. For each question, the user selects an answer from the radio buttons.
3. After clicking **Click Me**, the app checks if the answer is correct and moves to the next question.
4. When the last question is answered, the user is notified that the quiz is finished.

## Setup Instructions

1. Clone or download the repository.
2. Open the `index.html` file in a web browser to start the quiz.
3. Answer the questions by selecting one of the options and click the **Click Me** button to check your answer.

## File Structure

```plaintext
├── index.html         # HTML file containing the structure of the quiz
├── style.css          # CSS file for styling the quiz app
└── script.js           # JavaScript file that manages quiz functionality
