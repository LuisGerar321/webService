import React from 'react'

const divStyle = {
        backgroundColor : "#CAE0DD",
        margin: "50px",
        padding:  "30px",
        borderRadius: "15px",
}



const cards = () => {

        return (
                <React.Fragment>
                        <div style={divStyle}>
                                <p>QUESTION</p>
                                <p>ANSWER</p>
                                <p>ANSWER</p>
                                <p>ANSWER</p>
                                <p>ANSWER</p>
                        </div>
                </React.Fragment>
        )
}
export default cards
