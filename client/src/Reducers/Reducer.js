import { UPDATE_USER_ANSWER, USER_IS_CORRECT, USER_IS_WRONG, TOGGLE_CLASS } from './actions';

const newQ = { 
    q: "How many mathematicians does it take to change a light bulb?", 
    a: "1", QType:'giveDefault' };

const initialState = {
    userRating: 1500,
    quAndA: newQ,
    needNewRatedQ: true,
    userAnswer: '',
    wrongAnswers: [], 
    showClassRoom: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_IS_CORRECT : return {
            ...state, 
            quAndA:action.quAndA, 
            needNewRatedQ: false,
            userRating:action.userRating,
            userAnswer:'', wrongAnswers:[]}
        case USER_IS_WRONG : return {
            ...state,
            userRating: action.userRating,
            wrongAnswers:[...state.wrongAnswers, action.wrongAnswer],
            userAnswer: '',
            quAndA: {...state.quAndA, QRating: action.newQuAndARating}
        }
        case UPDATE_USER_ANSWER : return {...state, userAnswer:action.payload}
        case TOGGLE_CLASS : return {...state, showClassRoom:!state.showClassRoom}
        default : return state;
    } 
}

export default reducer;
