export const UPDATE_USER_ANSWER = 'UPDATE_USER_ANSWER';
export const SET_NEW_Q = 'SET_NEW_Q';
export const USER_IS_WRONG = 'USER_IS_WRONG';
export const USER_RATING_CHANGES = 'USER_RATING_CHANGES';
export const LOGIN_USER = 'LOGIN_USER';
export const CHANGE_ACTIVE_SCREEN = 'CHANGE_ACTIVE_SCREEN';
export const NEED_NEW_RATED_Q = 'NEED_NEW_RATED_Q';
export const KEYPAD_NUMBER = 'KEYPAD_NUMBER';
export const KEYPAD_DELETE = 'KEYPAD_DELETE';

export const UpdateUserAnswer = (newAnswer) => {
    return { type: UPDATE_USER_ANSWER, payload: newAnswer}
}

export const SetNewQ = (newQuAndA) => {
    return { type:SET_NEW_Q, quAndA: newQuAndA }
}

export const UserIsWrong = (userAnswer, newQuAndARating) => {
    return { type:USER_IS_WRONG, wrongAnswer:userAnswer, newQuAndARating:newQuAndARating }
}

export const UserRatingChanges = (newUserRating) => {
    return { type: USER_RATING_CHANGES, userRating: newUserRating}
}

export const LoginUser = (name, rating) => {
    return { type: LOGIN_USER, userName: name, userRating:rating }
}

export const ChangeActiveScreen = (newScreen) => {
    return { type: CHANGE_ACTIVE_SCREEN, newScreen:newScreen }
}

export const NeedNewRatedQ = () => {
    return {type: NEED_NEW_RATED_Q}
}

export const Keypad_number = (n) => {
    return {type:KEYPAD_NUMBER, payload:n}
}

export const Keypad_delete = () => {
    return {type:KEYPAD_DELETE}
}