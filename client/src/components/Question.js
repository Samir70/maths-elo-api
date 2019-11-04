import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { UpdateUserAnswer, UserIsCorrect, UserIsWrong } from '../Reducers/actions';
import GetNewQ from '../NewQs/GetNewQ';
import NewRatings from '../Ratings/Ratings';

const Question = ({
    quAndA, userAnswer, userRating, wrongAnswers, needNewRatedQ,
    UpdateUserAnswer, UserIsCorrect, UserIsWrong }) => {
    const changeHandler = (e) => {
        UpdateUserAnswer(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        // allow answer like 1.70 when the required answer is 1.7
        // converting to Number will do this
        // but take care if questions types are included that need a string as an answer
        switch (quAndA.answerFormat) {
            case 'string': {
                var userIsCorrect = userAnswer.toLowerCase() === quAndA.a.toLowerCase();
                break
            }
            default: userIsCorrect = Number(userAnswer) === Number(quAndA.a)
        }
        if (userIsCorrect) {
            var [newUserRating, newQuAndARating] = NewRatings(userRating, quAndA.QRating || 1500, 1, 1);
            //need reducer to set needNewRatedQ to true
            GetNewQ('', '')
                .then(promiseMessage => {
                    console.log('GetNewQ\'s promise:', promiseMessage);
                    //newQ.QRating = res.data.rating;
                    UserIsCorrect(newUserRating, promiseMessage);
                })
                .catch(err => {
                    console.log('GetNewQ\'s error is:', err);
                });
        } else {
            [newUserRating, newQuAndARating] = NewRatings(userRating, quAndA.QRating || 1500, 0, 1);
            //console.log('QType, QRating, old, new:', quAndA.QType, quAndA.QRating, newQuAndARating);
            UserIsWrong(newUserRating, userAnswer, newQuAndARating)
        }
        if (quAndA.QType !== 'giveDefault') {
            const toPost = {
                category: quAndA.QType,
                ratingValue: newQuAndARating
            }
            axios.post('/qratings/new-data', toPost)
                .then(res => console.log('Success while posting rating of Q', res))
                .catch(err => console.log('Error while posting rating of Q', err));
        } else { console.log('Did not post about default Q') }
    }

    const wrongAnswerList = wrongAnswers.map((x, i) =>
        <p key={i}>{x} was wrong</p>)

    useEffect(() => {
        if (needNewRatedQ || quAndA.QType === 'giveDefault') {
            GetNewQ('', '')
                .then(promiseMessage => {
                    console.log('GetNewQ in useEffect has promise:', promiseMessage);
                    //newQ.QRating = res.data.rating;
                    UserIsCorrect(userRating, promiseMessage);
                })
                .catch(err => {
                    console.log('GetNewQ in useEffect has error:', err);
                });
        }
    })


    return (
        <div>
            <h2>{quAndA.q}</h2>
            <form onSubmit={submitHandler}>
                <input className="answerbox"
                    type="text"
                    name="answerbox"
                    value={userAnswer}
                    onChange={changeHandler} />
            </form>
            {wrongAnswerList}
            {needNewRatedQ ? 
              <p>Fetching the rating for a new question....</p> :
              <p>the question has a rating of {quAndA.QRating || '????'}</p>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        quAndA: state.quAndA,
        needNewRatedQ: state.needNewRatedQ,
        wrongAnswers: state.wrongAnswers,
        userAnswer: state.userAnswer,
        userRating: state.userRating
    }
}

export default connect(mapStateToProps, { UpdateUserAnswer, UserIsCorrect, UserIsWrong })(Question);