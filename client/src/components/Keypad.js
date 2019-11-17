import React from 'react';
import { connect } from 'react-redux';

import { Keypad_number, Keypad_delete } from '../Reducers/actions';

const Keypad = ({ Keypad_number, Keypad_delete }) => {
    const buttons1_9 = [...'123456789'].map(x => <button
        onClick={() => Keypad_number(x)}
        accessKey={x}
        className="keypadButton"
        key={'keypad-button' + x}>{x}</button>);
    const button0 = <button
        onClick={() => Keypad_number('0')}
        accessKey='0'
        className="keypadButton"
        key='keypad-button0'>0</button>;
    const buttonDP = <button
        onClick={() => Keypad_number('.')}
        accessKey='.'
        className="keypadButton"
        key='keypad-buttonDP'>.</button>
    const buttonDEL = <button
        onClick={() => Keypad_delete()}
        accessKey='-'
        className="keypadButton"
        key='keypad-buttonDEL'>DEL</button>
    return (
        <div>
            <div>{buttons1_9.slice(0, 3)}</div>
            <div>{buttons1_9.slice(3, 6)}</div>
            <div>{buttons1_9.slice(6)}</div>
            <div>{button0}{buttonDP}{buttonDEL}</div>
        </div>
    )
}

export default connect(null, { Keypad_number, Keypad_delete })(Keypad);