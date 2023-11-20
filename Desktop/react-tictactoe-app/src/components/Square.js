import React from 'react'
import "./Square.css"


// export default class Square extends React.Component {
const Square = ({onClick, value}) => {

    return (
      // Square 클래스 안에있는 value 즉 상속받은 value값들을 표시한다.
      // onClick실행시에 Board에 있는 onclick을 의미하고 이는 다시 handclick을 의미한다
      <button className="square"
        onClick = {onClick}>
        {value}
      </button>
    )

}

export default Square;


