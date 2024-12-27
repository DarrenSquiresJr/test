import picture from "./assets/angry.png";
import crazyPicture from "./assets/angrycrazy.png";

function AngryMood(props) {

    return (
        <>
            <div>
                <h1> ANGRY </h1>
                {props.crazy ? (<img src={crazyPicture} alt="very angry" width="250" height="250"/>) :
                    (<img src={picture} alt="angry" width="250" height="250"/>) }
            </div>
        </>
    )
}

export default AngryMood