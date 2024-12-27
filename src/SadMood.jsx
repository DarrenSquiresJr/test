import picture from './assets/sad.webp'
import crazyPicture from './assets/sadcrazy.jpg'
function SadMood(props) {

    return (
        <>
            <div>
                <h1> SAD </h1>
                {props.crazy ? (<img src={crazyPicture} alt="very sad" width="250" height="250"/>) :
                    (<img src={picture} alt="sad" width="250" height="250"/>) }
            </div>
        </>
    )
}

export default SadMood