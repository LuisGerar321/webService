import React from 'react';
import Card from "../organims/cards"


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

        return (
                <React.Fragment>
                        <div style = { boardStyle} >

                        <p style = {counterStyle}>Counter: 0/10</p>
                        <Card></Card>
                        <div style = { buttonsStyle}> 
                                <button style = {{margin:"10px", borderRadius: "1rem",  width:"100px", height: "40px", }}>Previus</button>
                                <button style = {{margin:"10px", borderRadius: "1rem",  width:"100px", height: "40px", }}>Answer</button>
                                <button style = {{margin:"10px", borderRadius: "1rem",  width:"100px", height: "40px", }}>Next</button>                        
                        </div>


                        </div>

                </React.Fragment>
        );

}

export default Trivia;