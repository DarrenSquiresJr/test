import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import TrafficLight from "./TrafficLight.jsx";
import MoodRing from "./MoodRing.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/*<App />*/}
        {/*<TrafficLight color= "yellow" />*/}
        <MoodRing mood={0}/>
    </StrictMode>,
)
