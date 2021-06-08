import React, { useState } from 'react';
import './App.css';
import Questions from './Questions'



function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < Questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div>
		<div className='app'>
			{showScore ? (
				
				<div className='score-section'>
					
          <div class='container'>
  <div class='hoverme'>
    <h1>
    You scored {score} out of {Questions.length}
    </h1>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
  </div>
</div>
				</div>):(
					
		<div>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{Questions.length}
						</div>
						<div className='question-text'>{Questions[currentQuestion].questionText}</div>
					</div>


					<div className='answer-section'>
					
						{Questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{<img src={answerOption.answerText} style={{width:"100px", height:"100px"}} alt='logo'/> }</button>
						))}
					</div>
					</div>
				
				)}
		</div>
		</div>
	);
}

export default App;
