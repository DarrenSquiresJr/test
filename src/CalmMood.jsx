import picture from "./assets/calm.webp";
import crazyPicture from "./assets/calmcrazy.jpg";

function CalmMood(props) {

    return (
        <>
            <div>
                <h1> CALM </h1>
                {props.crazy ? (<img src={crazyPicture} alt="very calm" width="250" height="250"/>) :
                    (<img src={picture} alt="calm" width="250" height="250"/>) }
            </div>
        </>
    )
}

export default CalmMood