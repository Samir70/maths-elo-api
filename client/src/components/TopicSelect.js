import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { QTypes } from '../NewQs/QTypes'

const TopicSelect = () => {
    const selectedTopics = ['Ratio'];
    const qTypeList = QTypes.map(q =>
        <ListGroup.Item
            action
            variant={ selectedTopics.includes(q) ? "success" : "secondary" }
            key={q}>{q}
        </ListGroup.Item>
    )
    return (
        <div>
            <h2>Select Topics</h2>
            <p>Topics highlighted in green are active. Click to toggle</p>
            <ListGroup id="topicList">{qTypeList}</ListGroup>
        </div>
    )
}

export default TopicSelect;