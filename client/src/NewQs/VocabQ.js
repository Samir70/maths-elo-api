import { Vocab } from './QTypes';

const circleVocab = [
    {q:'What do you call a line that goes from the edge of a circle, through the centre, to the other side?', 
     a:'diameter'},
    {q:'What do you call a line from the centre of a circle to the edge of the circle?', a:'radius'},
    {q:'What do you call a line that just touches the outside of a circle?', a:'tangent'},
    {q:'What do you call a line that cuts across a circle, but not necessarily through the centre?', a:'chord'},
    {q:'A chord cuts a circle into two ...?', a:'segments'},
    {q:'Two radii (radiuses) cut out a piece like a slice of pie, called a ...?', a:'sector'}
];

const triangleVocab = [
    {q:'A triangle with all sides equal is described as ...?', a:'equilateral'},
    {q:'A triangle with exactly two sides equal is described as ...?', a:'isosceles'},
    {q:'A triangle with all sides of different length is described as ...?', a:'scalene'},
    {q:'The long side of a right-angled triangle is called the ...?', a:'hypotenuse'}
];

const angleVocab = [
    {q:'An angle which is less than 90 degrees is described as ...?', a:'acute'},
    {q:'An angle which is exactly 90 degrees is described as ...?', a:'right'},
    {q:'An angle which is more than 90 degrees is described as ...?', a:'obtuse'},
    {q:'An angle which is more than 180 degrees is described as ...?', a:'reflex'},
    {q:'Two angles which add up to 180 degress are described as ...?', a:'supplementary'},
    {q:'Two angles which add up to 90 degress are described as ...?', a:'complementary'},
    {q:'Lines which point in the same direction and never meet are described as ...?', a:'parallel'}
]

const VocabQList = [...circleVocab, ...triangleVocab, ...angleVocab];

const VocabQ = () => {
    var question = Math.floor(Math.random()*VocabQList.length);
    return {...VocabQList[question], answerFormat:'string', QType:Vocab}
}

export default VocabQ;
