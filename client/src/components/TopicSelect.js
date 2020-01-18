import React from 'react';
import { connect } from 'react-redux';
import { ListGroup, Button } from 'react-bootstrap';
import { QTypes } from '../NewQs/QTypes';
import { ToggleTopic, ChangeActiveScreen } from '../Reducers/actions';

const TopicSelect = ({ selectedTopics, ToggleTopic, ChangeActiveScreen }) => {
    const qTypeList = QTypes.map(q =>
        <ListGroup.Item
            action
            onClick={() => ToggleTopic(q)}
            variant={selectedTopics.includes(q) ? "success" : "secondary"}
            key={q}>{q}
        </ListGroup.Item>
    )
    return (
        <div>
            <h2>Select Topics</h2>
            <p>Topics highlighted in green are active. Click a topic to toggle its status</p>
            <p>When ready: <Button variant="link"
                onClick={() => ChangeActiveScreen("classRoom-General")}>Go to the classroom</Button>
            </p>
            <ListGroup id="topicList">{qTypeList}</ListGroup>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedTopics: state.selectedTopics
    }
}

export default connect(mapStateToProps, { ToggleTopic, ChangeActiveScreen })(TopicSelect);