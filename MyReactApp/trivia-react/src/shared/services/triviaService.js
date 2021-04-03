const REQUEST_URL ="https://opentdb.com/api.php?amount=8&category=12&difficulty=easy&type=multiple";

const fetchQuestions = async ()=> {
        return fetch(REQUEST_URL)
        .then( (response) =>  response.json() )
        .then((data) => data['results']  )
        .catch(function  (){
                console.log("ERROR");
        })
};
export default fetchQuestions