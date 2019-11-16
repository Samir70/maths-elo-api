import React from 'react';
import { connect } from 'react-redux';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Question from './components/Question';
import ClassRoom from './components/ClassRoom';
import { ToggleClass } from './Reducers/actions';
import './App.css';

const App = ({userRating, currentQType, showClassRoom, ToggleClass}) => {
  const giveme5Option = <Dropdown.Item onClick={ToggleClass}>5 in the Classroom</Dropdown.Item>;
  const rateMymathsOption = <Dropdown.Item onClick={ToggleClass}>Rate My Maths</Dropdown.Item>;

  return (
    <div className="App">
      <div className="header" >
        <DropdownButton id="dropdown-variants-info" title="Menu" >
          {showClassRoom ? rateMymathsOption : giveme5Option}
        </DropdownButton>
        <h1>Maths R&R -- rate and review your maths</h1>
        <p className="user-rating" >User Rating:<br /> {userRating}</p>
      </div>
      {showClassRoom ? <ClassRoom QType={currentQType} /> : <Question  />}
    </div>
  );
}
// used before dropdown menu implemented
// {showClassRoom ? giveMeTestsbtn : giveme5btn }

const mapStateToProps = (state) => {
  return {
    userRating: state.userRating,
    currentQType: state.quAndA.QType,
    showClassRoom: state.showClassRoom
  }
}


export default connect(mapStateToProps, {ToggleClass})(App);
