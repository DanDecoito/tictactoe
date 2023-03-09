import React, {useState} from "react"


export default function Square (props) {

    const [color, setColor] = useState(getRandomColor('#cb9d9d'));

    const {value, onSquareClick, style} = props

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    return (
        <div>
            <button 
            className={`square ${value ? 'selected' : ''}`}
     
          onClick={onSquareClick}
          style={{...style, background: color
        }}
          >{value}</button>
        </div>
    )
}