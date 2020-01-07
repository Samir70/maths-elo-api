import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { ToggleLogin, LoginUser } from '../Reducers/actions';

const LoginForm = ({ ToggleLogin, LoginUser }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const toPost = {
            userName : event.target.UserName.value,
            password: event.target.password.value
        }
        console.log('toPost is ', toPost);
        axios.put('/users/login', toPost)
            .then(res => {
                console.log('axios posted login, got result with status', res.status);
                console.log('need to set new user with name, rating', res.data.userName, res.data.userRating)
                LoginUser(res.data.userName, res.data.userRating)
            })
            .catch(err => console.log('axios posted login got error', err));
      }
    return (
        <div id="loginForm">
            <div>
                <Button variant="link" onClick={ToggleLogin}>
                    If you are not a member, you can register for free
                </Button>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group >
                    <Form.Label>User name</Form.Label>
                    <Form.Control type="text" name="UserName" placeholder="User name" required />
                    <Form.Text className="text-muted" >
                        This will be your public name, to be used on the leaderboard
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
            <Button variant="secondary" onClick={ToggleLogin} >Cancel</Button>
            <Button variant="success" type="submit">Login</Button>
            </Form>
        </div>
    )
}

export default connect(null, { ToggleLogin, LoginUser })(LoginForm);