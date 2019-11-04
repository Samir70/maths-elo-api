export const UPDATE_USER_ANSWER = 'UPDATE_USER_ANSWER';
export const SET_NEW_Q = 'SET_NEW_Q';
export const USER_IS_WRONG = 'USER_IS_WRONG';
export const USER_RATING_CHANGES = 'USER_RATING_CHANGES';
export const TOGGLE_CLASS = 'TOGGLE_CLASS';
export const NEED_NEW_RATED_Q = 'NEED_NEW_RATED_Q';

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

export const ToggleClass = () => {
    return {type:TOGGLE_CLASS}
}

export const NeedNewRatedQ = () => {
    return {type: NEED_NEW_RATED_Q}
}
