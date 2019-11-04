import { UPDATE_USER_ANSWER, SET_NEW_Q, 
    USER_IS_WRONG, USER_RATING_CHANGES, 
    TOGGLE_CLASS, NEED_NEW_RATED_Q } from './actions';

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
    console.log('handling the action of type', action.type)
    switch (action.type) {
        case NEED_NEW_RATED_Q : return {...state, needNewRatedQ:true}
        // split update of rating and quandA
        case USER_RATING_CHANGES: return {...state, userRating:action.userRating}
        case SET_NEW_Q : return {
            ...state, 
            quAndA:action.quAndA, 
            needNewRatedQ: false,
            userAnswer:'', wrongAnswers:[]}
        case USER_IS_WRONG : return {
            ...state,
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
