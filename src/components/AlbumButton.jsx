import '../App.css';

function AlbumButton(props) {
    const handleClick = () => {
        props.increment(props.isCorrect)
    }
    return (
        <button onClick={handleClick} disabled={props.isAnswered} className="album-button">
            <div className="image-container">
                <img src={props.albumImage} alt={props.albumName} className="blurred-img" />
                <div className="text-overlay">
                    <p>{props.albumName}</p>
                    <p>{props.artist}</p>
                </div>
            </div>
        </button>
    )
}

export default AlbumButton;