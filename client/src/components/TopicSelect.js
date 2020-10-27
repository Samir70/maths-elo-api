import React from 'react';
import { connect } from 'react-redux';
import { ButtonGroup, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { QTypes } from '../NewQs/QTypes';
import { ToggleTopic, AllTopics, ChangeActiveScreen } from '../Reducers/actions';

const TopicSelect = ({ selectedTopics, ToggleTopic, AllTopics, ChangeActiveScreen }) => {
    const qTypeList = QTypes.map(q =>
        <DropdownButton title={q.topic}
            variant={selectedTopics.includes(q.topic) ? "success" : "secondary"}
            key={q.topic}
            className="topicButton"
        >
            <Dropdown.Item onClick={() => ToggleTopic(q.topic)}>all</Dropdown.Item>
            {q.subTopics.map(st =>
                <Dropdown.Item
                    onClick={() => ToggleTopic(q.topic + '-' + st)}
                    key={st}>{st}
                </Dropdown.Item>
            )}
        </DropdownButton>
    );

    const furtherInstructions = selectedTopics.length > 0 ?
        <p>When ready: <Button variant="link"
            onClick={() => ChangeActiveScreen("classRoom-General")}>Go to the classroom</Button>
        </p> :
        <p>You need to select at least one topic</p>

    return (
        <div>
            <h2>Select Topics</h2>
            <p>Topics highlighted in green are active. Click a topic to toggle its status</p>
            <ButtonGroup>
                <Button onClick={() => AllTopics('all')} >Select all</Button>
                <Button onClick={() => AllTopics('none')} >Clear all</Button>
            </ButtonGroup>
            {furtherInstructions}
            <p>Currently selected are {selectedTopics.join(', ')} </p>
            <div id="topic-list"  >{qTypeList}</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedTopics: state.selectedTopics
    }
}

export default connect(mapStateToProps, { ToggleTopic, AllTopics, ChangeActiveScreen })(TopicSelect);