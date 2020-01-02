import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { ToggleLogin } from '../Reducers/actions';

const LoginForm = ({ userLoggedIn, userID, ToggleLogin }) => {
    return (
        <div>
            <div>
                <Button variant="link" onClick={ToggleLogin}>
                    If you are not a member, you can register for free
                </Button>
            </div>
            <Button variant="secondary" onClick={ToggleLogin} >Cancel</Button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userLoggedIn: state.userLoggedIn,
        userID: state.userID
    }
}

export default connect(mapStateToProps, { ToggleLogin })(LoginForm);