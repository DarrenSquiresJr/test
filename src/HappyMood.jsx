import picture from './assets/happy.webp'
import crazyPicture from './assets/happycrazy.png'
function HappyMood(props) {

    return (
        <>
        <div>
            <h1> HAPPY </h1>
            {props.crazy ? (<img src={crazyPicture} alt="very happy" width="250" height="250"/>) :
                (<img src={picture} alt="happy" width="250" height="250"/>) }
        </div>
        </>
    )
}

export default HappyMood