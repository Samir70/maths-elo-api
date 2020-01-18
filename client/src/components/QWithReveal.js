import React from 'react';

class QWithReveal extends React.Component {
    state = {showAnswer: false, question:'dummy classroom Q', answer:'42'}
    quandaClass = Number(this.props.rowType) % 2 ? "quandaBlock-odd" : "quandaBlock-even";
    
    
    handleClick = () => {
        this.setState({showAnswer:!this.state.showAnswer})
    }
    refreshQ = () => {
        const newQ = this.props.freshQ();
        this.setState({question:newQ.q, answer:newQ.a, showAnswer:false})
    }

    
    render() {
        if (this.state.question==='dummy classroom Q') {this.refreshQ()}
        const RevealButton = <button className="revealBtn" onClick={this.handleClick}>Show answer</button>
        const Answer = <h2 className="aBlock" onClick={this.handleClick} >{this.state.answer}</h2>; 
        return (
            <div className={this.quandaClass}>
                <h2 className="qBlock" onClick={this.refreshQ} >{this.state.question}</h2>
                {this.state.showAnswer ? Answer : RevealButton}
            </div>
        )
    }
}

export default QWithReveal;