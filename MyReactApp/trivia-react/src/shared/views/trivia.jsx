import React, { useEffect, useState } from 'react';
import Card from "../organims/cards"

import fetchQuestions from "../services/triviaService";


const counterStyle = {
        backgroundColor : "#CAE0DD",
        margin: "50px",
        padding:  "30px",
        borderRadius: "15px",
        width: "30%"
}
const buttonsStyle = {
        backgroundColor : "#CAE0DD",
        margin: "50px",
        padding:  "30px",
        borderRadius: "15px",
        width: "30%",
        display: "flex",
        justifyContent: "center",
        alignSelf: "center",
}

const boardStyle =  {
        backgroundColor : "#D4D4D4",
        margin: "50px",
        padding:  "30px",
        borderRadius: "15px",
        width: "80%",
        margin: "5% auto",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0px 8px 8px rgba(168, 173, 173, 0.322)",
        
}

const Trivia =  () =>{
        const [question, updateQuestions] = useState();
        const [isLoading , updateLoading] =  useState(true);
        const  [questionNo, updateQuestionNo]= useState(0);
        const  [score, updateScore ] = useState(0);

        useEffect(()=>{
                const  receiveQuestions = async  () =>  {
                        updateQuestions(await fetchQuestions());
                        updateLoading(false );
                };
                receiveQuestions();
        }

        , [])



        console.log(question);

        const HandleButtonChange = (step)=>{
                if(step === "down"){
                        if(questionNo>0){
                                updateQuestionNo(questionNo - 1);
                        }
                          
                }else if(step === "up"){
                        if(questionNo<7 ){
                                updateQuestionNo(questionNo +1);
                        }
                }      
        };

        const isCorrectCallback  = (Correct) => {
                // if(str ===  question[questionNo].correctAnswer){
                if(Correct){
                        updateScore(score + 1);
                };
        }

        if(isLoading){
                return <p>Loading...</p>;
        };
        console.log(question[0])
        if(!isLoading){
                return (
                        <React.Fragment>
                                <div style = { boardStyle} >
        
                                <p style = {counterStyle}>Counter: {score}/10</p>
                                <Card question = {question[questionNo].question} answers = {question[questionNo].incorrect_answers} correctAnswer = {question[questionNo].correct_answer} isCorrect = {isCorrectCallback}  ></Card>
                                <div style = { buttonsStyle}> 
                                        <button onClick = {() => HandleButtonChange("down")} style = {{margin:"10px", borderRadius: "1rem",  width:"100px", height: "40px", }}>Previus</button>
                                        <button onClick = { () => HandleButtonChange("up") } style = {{margin:"10px", borderRadius: "1rem",  width:"100px", height: "40px", }}>Next</button>                        
                                </div>
        
        
                                </div>
        
                        </React.Fragment>
                );
        }



}

export default Trivia;