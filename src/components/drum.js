import React from 'react'

export const Drum = (props) => {
    const playSound = () => {
        document.getElementById(props.keyTrigger).play()
        document.getElementById("display").innerHTML = props.pad.description
    }
    console.log(props.pad.keyTrigger)
    document.addEventListener("keypress", (e) => {
        if (e.key.toUpperCase() == props.keyTrigger) {
            playSound()
        }
    })
    return (
        <button onClick={playSound} className='drum-pad'>
            <audio src={props.pad.url} id={props.pad.keyTrigger} className='clip'></audio>
            {props.pad.keyTrigger}
        </button>
    )
}
