import React from 'react';
import QWithReveal from './QWithReveal';
import {GetNewQ} from '../NewQs/GetNewQ';
import { elementsFrom } from '../NewQs/RandomFuncs'

const ClassRoom = (props) => {
    var qList = [];
    const typesToShow = elementsFrom(5, props.typeList);
    
    typesToShow.forEach((t, i) =>  {
        var QTypeSplit = t.split('-');
        console.log('classroom is looking for qType', t, QTypeSplit);
        qList.push(
            <QWithReveal 
                freshQ = {() => GetNewQ(QTypeSplit[0], QTypeSplit[1])}
                rowType={'' + i} 
                key={i} />
        )
    });

    return (
        <div>
            <h2>This is the class room</h2>
            <h3>Where you simply click to see the answers</h3>
            <p>(Click on a question to get another of the same type)</p>
            {qList}
        </div>
    )
}

export default ClassRoom;