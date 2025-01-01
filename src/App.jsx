import { useRef, useState } from 'react';
import './App.css';
import AlbumButton from "./components/AlbumButton.jsx";
import data from './data.json';



function App() {
    const [shuffledData, setShuffledData] = useState(() => shuffleArray(data));

    const [count, setCount] = useState(0);
    const [isAnswered, setIsAnswered] = useState(false);
    const [answeredCorrectly, setAnsweredCorrectly] = useState(false);
    const [albumOne, setAlbumOne] = useState(shuffledData[0]);
    const [albumTwo, setAlbumTwo] = useState(shuffledData[1]);
    const [gameOver, setGameOver] = useState(false);

    let index = useRef(0);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setCount(count + 1);
        }
        setAnsweredCorrectly(isCorrect);
        setIsAnswered(true);
    };

    const removeDisplay = () => {
        setIsAnswered(false);
        setAnsweredCorrectly(false);

        index.current += 2;
        if (index.current >= shuffledData.length) {
            setGameOver(true);
            return;
        }

        setAlbumOne(shuffledData[index.current]);
        setAlbumTwo(shuffledData[index.current + 1]);
    };

    function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }
    const replayGame = () => {
        // shuffle again on replay if you want fresh order each time
        setShuffledData(shuffleArray(data));
        index.current = 0;
        setCount(0);
        setIsAnswered(false);
        setAnsweredCorrectly(false);
        setGameOver(false);
        setAlbumOne(shuffledData[0]);
        setAlbumTwo(shuffledData[1]);
    };

    if (gameOver) {
        return (
            <div>
                <h2>Game Over</h2>
                <p>Your final score is: {count}/10</p>
                <button onClick={replayGame}>Play Again</button>
            </div>
        );
    }

    return (
        <>
            <header>
                <h1 className="header-text">WhichCameFirst</h1>
                <h2 className="header-text">Which album came out first?</h2>
            </header>
            <main>
                <p id="score">Score: {count}/10 </p>
                <div id="main-without-score">
                    <AlbumButton
                        increment={handleAnswer}
                        isAnswered={isAnswered}
                        isCorrect={Date.parse(albumOne.releaseDate) < Date.parse(albumTwo.releaseDate)}
                        albumName={albumOne.albumName}
                        artist={albumOne.artist}
                        albumImage={albumOne.albumImage}
                    />

                    {isAnswered ? (
                        <div id="answer-chosen">
                            <p className="date-shown">
                                {new Date(albumOne.releaseDate).toLocaleString('default', { month: 'long' })}, {new Date(albumOne.releaseDate).getFullYear()}
                            </p>
                            {answeredCorrectly ? (
                                <p id="correct-answer">
                                    Correct!!
                                </p>
                            ) : (
                                <p id="wrong-answer">
                                    Incorrect!!
                                </p>
                            )}
                            <div id="bottom-of-answer-chosen">
                                <p className="date-shown">
                                    {new Date(albumTwo.releaseDate).toLocaleString('default', { month: 'long' })}, {new Date(albumTwo.releaseDate).getFullYear()}
                                </p>
                                <button onClick={removeDisplay} id="next-button">next</button>
                            </div>
                        </div>
                    ) : ""}

                    <AlbumButton
                        increment={handleAnswer}
                        isAnswered={isAnswered}
                        isCorrect={Date.parse(albumOne.releaseDate) > Date.parse(albumTwo.releaseDate)}
                        albumName={albumTwo.albumName}
                        artist={albumTwo.artist}
                        albumImage={albumTwo.albumImage}
                    />
                </div>
            </main>
        </>
    );
}

export default App;
