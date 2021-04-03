import React from 'react'

const divStyle = {
        backgroundColor : "#CAE0DD",
        margin: "50px",
        padding:  "30px",
        borderRadius: "15px",
}




const cards = ({question,  answers, correctAnswer, isCorrect}) => {

        const arrMix =  (arr) => {
                const newArr =  [];
                let idx = 0; 
                while(newArr.length<arr.length){
                        do{
                                idx = Math.floor(Math.random()*arr.length);
                        }while( newArr.includes(  arr[idx] ))
                        newArr.push(   arr[idx] );
                };
                return newArr;
        }

        const allAnswer  =  arrMix( [...answers].concat(correctAnswer)    );

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
