import { UPDATE_USER_ANSWER, TOGGLE_TOPIC,
    KEYPAD_NUMBER, KEYPAD_DELETE,
    SET_NEW_Q, 
    USER_IS_WRONG, USER_RATING_CHANGES, LOGIN_USER,
    CHANGE_ACTIVE_SCREEN, 
    NEED_NEW_RATED_Q } from './actions';

import { QTypes } from '../NewQs/QTypes';

const newQ = { 
    q: "How many mathematicians does it take to change a light bulb?", 
    a: "1", QType:'giveDefault' };
const defaultExtraKeys = ['--', '--', '--'];

const initialState = {
    userRating: 1500,
    userID: '',
    userLoggedIn: false,
    quAndA: newQ,
    needNewRatedQ: true,
    userAnswer: '',
    selectedTopics: [...QTypes],
    wrongAnswers: [], 
    extraKeys4Pad: defaultExtraKeys,
    activeScreen: 'testRoom'
}

const addOrDrop = (arr, el) => {
    return arr.includes(el) ? arr.filter(e => e !== el) : [...arr, el]
}

const reducer = (state = initialState, action) => {
    console.log('handling the action ', action)
    switch (action.type) {
        case UPDATE_USER_ANSWER : return {...state, userAnswer:action.payload}
        case TOGGLE_TOPIC : return {...state, selectedTopics:addOrDrop(state.selectedTopics, action.topic)}
        case NEED_NEW_RATED_Q : return {...state, needNewRatedQ:true}
        case USER_RATING_CHANGES: return {...state, userRating:action.userRating}
        case SET_NEW_Q : return {
            ...state, 
            quAndA:action.quAndA, 
            needNewRatedQ: false,
            extraKeys4Pad: action.quAndA.extraKeys || defaultExtraKeys,
            userAnswer:'', wrongAnswers:[]}
        case USER_IS_WRONG : return {
            ...state,
            wrongAnswers:[...state.wrongAnswers, action.wrongAnswer],
            userAnswer: '',
            quAndA: {...state.quAndA, QRating: action.newQuAndARating}
        }
        case LOGIN_USER : return {
            ...state, 
            userID:action.userName, userRating:action.userRating, 
            activeScreen:'testRoom', userLoggedIn:true
        }
        case KEYPAD_NUMBER : return {...state, userAnswer:state.userAnswer+action.payload}
        case KEYPAD_DELETE : return {...state, userAnswer:state.userAnswer.slice(0, -1)}
        case CHANGE_ACTIVE_SCREEN : return {...state, activeScreen:action.newScreen}
        default : return state;
    } 
}

export default reducer;
