import React, { useState } from 'react';
import './App.css';
import Questions from './Questions'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
//import  notify from 'react-notify-toast';
import SendIcon from '@material-ui/icons/Send';
import { ToastContainer, toast }  from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
  
  
	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score+1);
      toast.success('Correct', {position: toast.POSITION.TOP_CENTER, autoClose: 1000})
		}else{
      toast.error('wrong', {position: toast.POSITION.TOP_CENTER, autoClose: 1000})
    }

		
	};

 
  
   


  

  const nextBtn=()=>{
    const nextQuestion = currentQuestion + 1;
		if (nextQuestion < Questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
  }

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(0),
    },
  }));

  const classes = useStyles();



  //let myColor = { background: '#0E1717', text: "#FFFFFF" };



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
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{<img src={answerOption.answerText} style={{width:"200px", height:"200px"}} alt='logo'/> }</button>
						))}
					</div>

          <div>
            
          <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={()=> nextBtn()}
      >
        <span className='nextBtntxt'>Next </span><SendIcon/>
      </Button>
          </div>
          <div>
        
        <ToastContainer />
      </div>
					</div>
          
				
				)}
		</div>
		</div>
	);
}

export default App;
