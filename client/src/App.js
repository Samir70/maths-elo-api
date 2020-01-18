import React from 'react';
import { connect } from 'react-redux';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Question from './components/Question';
import ClassRoom from './components/ClassRoom';
import TopicSelect from './components/TopicSelect';
import LoginForm from './components/LoginForm';
import { ChangeActiveScreen } from './Reducers/actions';
import './App.css';

const App = ({ userName, userRating, currentQ, activeScreen, ChangeActiveScreen }) => {
  const giveme5Option = <Dropdown.Item onClick={()=>ChangeActiveScreen('classRoom')}>5 in the Classroom</Dropdown.Item>;
  const rateMymathsOption = <Dropdown.Item onClick={()=>ChangeActiveScreen('testRoom')}>Rate My Maths</Dropdown.Item>;
  const selectTopicsOption = <Dropdown.Item onClick={()=>ChangeActiveScreen('topicSelect')} >Select Topics</Dropdown.Item>
  const loginOption = <Dropdown.Item onClick={()=>ChangeActiveScreen('login')}>Login or Register</Dropdown.Item>;

  const userLabel = userName === '' ? 'Guest user' : userName;

  const mainScreen = () => {
    switch (activeScreen) {
      case "testRoom" : return <Question />;
      case "classRoom" : return <ClassRoom QType={currentQ.QType} />;
      case "topicSelect" : return <TopicSelect />
      case "login" : return <LoginForm />;
      default : return <Question />
    }
  }

  return (
    <div className="App">
      <div className="header" >
        <DropdownButton id="dropdown-variants-info" 
          title="Maths ELO" className="appTitle" size="lg">
          {activeScreen === 'testRoom' ? giveme5Option : rateMymathsOption}
          {selectTopicsOption}
          {/* {loginOption} */}
        </DropdownButton>
        <p>Rate and review your maths</p>
        <p className="userVSquestion" >{userLabel} ({userRating}) VS {currentQ.QType} ({currentQ.QRating||'????'}) </p>
      </div>
      { mainScreen() }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userName: state.userID,
    userRating: state.userRating,
    currentQ: state.quAndA,
    activeScreen: state.activeScreen
  }
}


export default connect(mapStateToProps, { ChangeActiveScreen })(App);
