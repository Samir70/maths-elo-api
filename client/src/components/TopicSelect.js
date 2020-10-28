import React from 'react';
import { connect } from 'react-redux';
import { ButtonGroup, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { QTypes } from '../NewQs/QTypes';
import { ToggleTopic, AllTopics, ChangeActiveScreen } from '../Reducers/actions';

const TopicSelect = ({ selectedTopics, ToggleTopic, AllTopics, ChangeActiveScreen }) => {
    const qTypeList = QTypes.map(q =>
        <DropdownButton title={q.topic}
            variant={selectedTopics.includes(q.topic) ? "success" : 
                    selectedTopics.findIndex(t => t.startsWith(q.topic)) > -1 ? "warning" : "secondary"}
            key={q.topic}
            className="topicButton"
        >
            <Dropdown.Item onClick={() => ToggleTopic(q.topic)}>all</Dropdown.Item>
            {q.subTopics.map(st =>
                <Dropdown.Item
                    onClick={() => ToggleTopic(q.topic + '-' + st)}
                    key={st}
                    active={selectedTopics.includes(q.topic+'-'+st)}>{st}
                </Dropdown.Item>
            )}
        </DropdownButton>
    );

    const furtherInstructions = selectedTopics.length > 0 ?
        <p>When ready: <Button variant="link"
            onClick={() => ChangeActiveScreen("classRoom-General")}>Go to the classroom</Button> <br />
            (If you select more than five topics, I will pick five of them at random)
        </p> :
        <p>You need to select at least one topic.</p>

    return (
        <div>
            <h2>Select Topics</h2>
            <p>Click a topic to toggle its status. Select subtopics from the dropdown.<br />
            Topics highlighted in green are entirely active, those in orange have subtopics selected. </p>
            <ButtonGroup>
                <Button onClick={() => AllTopics('all')} >Select all</Button>
                <Button onClick={() => AllTopics('none')} >Clear all</Button>
            </ButtonGroup>
            {furtherInstructions}
            <p>Currently selected are: {selectedTopics.join(', ')} </p>
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