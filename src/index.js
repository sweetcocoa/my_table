import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    constructor(props){
        super(props); // 서브클래스의 생성자를 정의할 때 super(); 메소드를 명시적으로 호출해야 한다.
        this.state = {
            value: "공강",
        };
    }

    render() {
      return (
        <button className="square" onClick={() => {
            if (this.state.value == "수업"){
                this.setState({value : "공강"}); // this.setState가 호출될 때마다 컴포넌트가 업데이트되고, 이러한 state가 react에 의해 병합되어 하위 컴포넌트와 함께 다시 렌더링한다.
            }
            else{
                this.setState({value : "수업"});
            }
            }}>
          {this.state.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }

    renderSquare(i) {
      return <Square value={this.state.squares[i]} />;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  