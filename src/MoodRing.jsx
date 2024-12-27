import {useState} from 'react'
import HappyMood from "./HappyMood.jsx";
import SadMood from "./SadMood.jsx";
import AngryMood from "./AngryMood.jsx";
import CalmMood from "./CalmMood.jsx";
import './App.css'

function MoodRing(props) {
    const [mood, setMood] = useState(props.mood)
    const handleClick = () => {
        setMood(mood + 1);
    }
    const [crazy, setCrazy] = useState(false)
    const handleCrazyButton = () => {
        setCrazy(!crazy)
    }
    return (
        <>
            <button onClick={handleClick}>
                {mood % 4 === 0 ? <HappyMood crazy={crazy}/> : ""}
                {mood % 4 === 1 ? <SadMood crazy={crazy}/> : ""}
                {mood % 4 === 2 ? <AngryMood crazy={crazy}/> : ""}
                {mood % 4 === 3 ? <CalmMood crazy={crazy}/> : ""}
            </button>


            <button onClick={handleCrazyButton}>
                {crazy === false ? "CRAZY MODE!!!" : "Normal Mode"}
            </button>
        </>
    )
}

export default MoodRing