import React from 'react'
import Square from './Square'
import "./Board.css"
//Square안에 괄호 없이 import하면 export default로 되어있는 부분을 가져온다.
// 예를들어 Square경로에 함수가 여러개 있어도 default가 되어있는 클래스만 가져온다.
// 원하는 클래스를 가져올 경우에 {Name}과 같은 형식으로 가져와야 한다.

// export default class Board extends Component {

const Board = ({squares, onClick}) => {


  // Square렌더링 해서 중복사용
  const renderSquare = (i) => {
    return<Square value={squares[i]}
      onClick={() => onClick(i)}/>//함수렌더링 해서 리턴
  }

    return (
      // JSX는 부모요소로 감싸주어야 한다 
      // this.renderSquare에서 this=Board class를 의미하고 .rednerSquare는 Board class안에 있는 renderSquare를 의미한다
      <div className = 'board-wrapper'>
        <div className='board-row'>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className='board-row'>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className='board-row'>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    )
}


export default Board