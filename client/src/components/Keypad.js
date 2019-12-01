import React from 'react';
import { connect } from 'react-redux';

import { Keypad_number, Keypad_delete } from '../Reducers/actions';

const Keypad = ({ extraKeys, Keypad_number, Keypad_delete }) => {
    const buttons1_9 = [...'123456789'].map(x => <button
        onClick={() => Keypad_number(x)}
        className="keypadButton"
        key={'keypad-button' + x}>{x}</button>);
    const button0 = <button
        onClick={() => Keypad_number('0')}
        className="keypadButton"
        key='keypad-button0'>0</button>;
    const buttonDP = <button
        onClick={() => Keypad_number('.')}
        className="keypadButton"
        key='keypad-buttonDP'>.</button>
    const buttonDEL = <button
        onClick={() => Keypad_delete()}
        className="keypadButton"
        key='keypad-buttonDEL'>DEL</button>
    const extraButtons = extraKeys.slice(0, 3).map(x => <button
        onClick={() => Keypad_number(x)}
        className="keypadButton"
        key={'extra-keypad-button'+x}>{x}
        </button>)
    return (
        <div className="keypad">
            <div>{buttons1_9.slice(0, 3)}</div>
            <div>{buttons1_9.slice(3, 6)}</div>
            <div>{buttons1_9.slice(6)}</div>
            <div>{button0}{buttonDP}{buttonDEL}</div>
            {extraKeys.length > 0 ? extraButtons : ''}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {extraKeys : state.extraKeys4Pad}
}
export default connect(mapStateToProps, { Keypad_number, Keypad_delete })(Keypad);