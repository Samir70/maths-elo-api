import React from 'react';
import QWithReveal from './QWithReveal';
import {GetNewQ} from '../NewQs/GetNewQ';
import { elementsFrom } from '../NewQs/RandomFuncs'

const ClassRoom = (props) => {
    var qList = [];
    const typesToShow = elementsFrom(5, props.typeList);
    
    typesToShow.forEach((t, i) =>  {
        var QTypeSplit = t.split('-');
        var newQ = GetNewQ(QTypeSplit[0], QTypeSplit[1]);
        qList.push(
            <QWithReveal q={newQ.q} a={newQ.a} rowType={'' + i} key={i} />
        )
    });

    return (
        <div>
            <h2>This is the class room</h2>
            <h3>Where you simply click to see the answers</h3>
            {qList}
        </div>
    )
}

export default ClassRoom;