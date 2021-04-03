import React from 'react'

const divStyle = {
        backgroundColor : "#CAE0DD",
        margin: "50px",
        padding:  "30px",
        borderRadius: "15px",
}



const cards = ({question,  answers, correctAnswer, isCorrect}) => {
        {console.log("Putito", correctAnswer)};
        const allAnswer  =  [...answers].concat(correctAnswer);

        const CheckAnswer = (selectedAnswer) =>{
                if(selectedAnswer === correctAnswer){
                        isCorrect(true);
                        return true;
                }else{
                        isCorrect(false);
                        return false;
                };
        }
        return (
                <React.Fragment>
                        <div style={divStyle}>
                                <p>{question}</p>
                                
                                {allAnswer.map((answer, index) => {
                                        // return <p key={index} onClick  =  {isCorrect(answer===correctAnswer) }> {answer} </p>
                                        return <p key={index} onClick  =  {()=>  {CheckAnswer(answer) } }> {answer} </p>
                                })}
                        </div>
                </React.Fragment>
        )
}
export default cards
