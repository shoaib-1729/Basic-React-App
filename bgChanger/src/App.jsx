import React, {useState} from "react";
import ReactDOM from 'react-dom'



// create react element
const AppLayout = () => {

const [color, setColor] = useState('black')
// const [buttonColor, setButtonColor] = useState('white')
document.body.style.backgroundColor = color;

const buttons = document.querySelectorAll('button')
for(let btn of buttons){
    console.log(btn)
    // buttons[i].style.backgroundColor = buttonColor;
}


function changeBgColor(e){
    const newColor = e.target.innerText;
    setColor(newColor)

    // set button color
    // setButtonColor(newColor);
}
    return(
    <div>
            {/* red button */}
            <button onClick={changeBgColor}>
                Red
            </button>
            {/* green button */}
            <button onClick={changeBgColor}>
                Green
            </button>
            {/* blue button */}
            <button onClick={changeBgColor}>
                Blue
            </button>

    </div>
    
)
    }

// create react root
const root = ReactDOM.createRoot(document.getElementById('root'))

// render react element inside root
root.render(<AppLayout />);