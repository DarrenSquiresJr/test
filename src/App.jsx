import {useState} from 'react'
import './App.css'
import MyComponent from "./MyComponent.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <MyComponent text="hello" count={0} buttonText="bye"/>
            <MyComponent text="chat" count={13} buttonText="hi"/>
            <MyComponent text="fred" count={0}/>
            <MyComponent text="john" count={0}/>

        </>
    )
}

export default App
