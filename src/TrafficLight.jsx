import './App.css'
import RedLight from "./RedLight.jsx";
import YellowLight from "./YellowLight.jsx";
import GreenLight from "./GreenLight.jsx";

function TrafficLight(props) {

    return (
        <>
            {
                props.color === "red" || props.color === "Red" ? (<RedLight/>) : ""
            }
            {
                props.color === "yellow" || props.color === "Yellow" ? (<YellowLight/>) : ""
            }
            {
                props.color === "green" || props.color === "Green" ? (<GreenLight/>) : ""
            }

        </>
    )
}

export default TrafficLight