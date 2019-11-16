import React from 'react';
import { connect } from 'react-redux';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Question from './components/Question';
import ClassRoom from './components/ClassRoom';
import { ToggleClass } from './Reducers/actions';
import './App.css';

const App = ({ userRating, currentQ, showClassRoom, ToggleClass }) => {
  const giveme5Option = <Dropdown.Item onClick={ToggleClass}>5 in the Classroom</Dropdown.Item>;
  const rateMymathsOption = <Dropdown.Item onClick={ToggleClass}>Rate My Maths</Dropdown.Item>;

  return (
    <div className="App">
      <div className="header" >
        <DropdownButton id="dropdown-variants-info" title="Maths ELO" className="appTitle" size="lg">
          {showClassRoom ? rateMymathsOption : giveme5Option}
        </DropdownButton>
        <p>Rate and review your maths</p>
        <p className="userVSquestion" >Guest User ({userRating}) VS {currentQ.QType} ({currentQ.QRating}) </p>
      </div>
      {showClassRoom ? <ClassRoom QType={currentQ.QType} /> : <Question />}
    </div>
  );
}
// used before dropdown menu implemented
// {showClassRoom ? giveMeTestsbtn : giveme5btn }

const mapStateToProps = (state) => {
  return {
    userRating: state.userRating,
    currentQ: state.quAndA,
    showClassRoom: state.showClassRoom
  }
}


export default connect(mapStateToProps, { ToggleClass })(App);
