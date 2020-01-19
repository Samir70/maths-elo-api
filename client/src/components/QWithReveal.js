import React from 'react';

class QWithReveal extends React.Component {
    state = {showAnswer: false, localQ:this.props.freshQ() }
    quandaClass = Number(this.props.rowType) % 2 ? "quandaBlock-odd" : "quandaBlock-even";
    
    
    handleClick = () => {
        this.setState({showAnswer:!this.state.showAnswer})
    }
    refreshQ = () => {
        this.setState({localQ:this.props.freshQ(), showAnswer:false})
    }

    
    render() {
        const RevealButton = <button className="revealBtn" onClick={this.handleClick}>Show answer</button>
        const Answer = <h2 className="aBlock" onClick={this.handleClick} >{this.state.localQ.a}</h2>; 
        return (
            <div className={this.quandaClass}>
                <h2 className="qBlock" onClick={this.refreshQ} >{this.state.localQ.q}</h2>
                {this.state.showAnswer ? Answer : RevealButton}
            </div>
        )
    }
}

export default QWithReveal;