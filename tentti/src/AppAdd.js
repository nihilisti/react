import { useState } from 'react';
import React, { useEffect } from 'react';
import './App.css';
import Nav from './TenttiNav';
// import AnswerList from './AnswerList';
import AddAnswers from './AddAnswers';

function App() {

    const [data, setData] = useState([
        {
            bugs: "Hyönteiset", questions: [
                {
                    question: 'Mikä on Vespula vulgaris?',
                    answers: [
                        { answer: "Piha-ampiainen", correct: true, picked: false },
                        { answer: "Isopihtihäntä", correct: false, picked: false },
                        { answer: "Suursukeltaja", correct: false, picked: false },
                        { answer: "Sarvikuonokas", correct: false, picked: false },
                    ]
                },
                {
                    question: 'Mikä on Hymenopus coronatus?',
                    answers: [
                        { answer: "Ritariperhonen", correct: false, picked: false },
                        { answer: "Orkidearukoilijasirkka", correct: true, picked: false },
                        { answer: "Kultaheinäsirkka", correct: false, picked: false },
                        { answer: "Täpläpaarma", correct: false, picked: false },
                    ]
                },
            ]
        },
        {
            bugs: "Hämähäkkieläimet", questions: [
                {
                    question: 'Mikä on Mitopus morio?',
                    answers: [
                        { answer: "Täplälukki", correct: false, picked: false },
                        { answer: "Seinälukki", correct: false, picked: false },
                        { answer: "Keisarilukki", correct: false, picked: false },
                        { answer: "Metsälukki", correct: true, picked: false },
                    ]
                },
                {
                    question: 'Mikä on Pandinus imperator?',
                    answers: [
                        { answer: "Keisariskorpioni", correct: true, picked: false },
                        { answer: "Kenttäskorpioni", correct: false, picked: false },
                        { answer: "Brontoscorpio (ukkosskorpioni)", correct: false, picked: false },
                    ]
                }
            ]
        }
    ])

    const [palautus, setPalautus] = useState(false)
    const [activeTest, setActiveTest] = useState(0)
    const [showExam, setShowExam] = useState(0)

    useEffect(() => {
        let jemma = window.localStorage;
        let newData = jemma.getItem("data")
        if (!newData) {
            jemma.setItem("data", JSON.stringify(data))
            newData = data
        } else {
            setData(JSON.parse(newData));
        }
    }, [])

    const buttonPressed = () => {
        let newData = JSON.parse(JSON.stringify(data))
        let finalData = data.concat(newData)
        setData(finalData)
    }

    const answerPicked = (mainIndex, parentIndex, answerIndex, event) => {
        let deepCopy = JSON.parse(JSON.stringify(data))
        deepCopy[mainIndex].questions[parentIndex].answers[answerIndex].picked = event.target.checked;
        setData(deepCopy)
    }

    // const showAnswers = (item) => {
    //     setPalautus(true)
    // }

    const changeQuestions = (index) => {
        setActiveTest(index)
    }

    const addItem = (mainIndex, parentIndex) => {
        let deepCopy = JSON.parse(JSON.stringify(data))
        deepCopy[mainIndex].questions[parentIndex].answers.push({ answer: "", correct: false, picked: false })
        setData(deepCopy)
    }

    // props.itemEdited(props.parentIndex, props.index, answerIndex, event)

    const itemEdited = (mainIndex, parentIndex, answerIndex, event) => {
        let deepCopy = JSON.parse(JSON.stringify(data))
        deepCopy[mainIndex].questions[parentIndex].answers[answerIndex].answer = event.target.value;
        setData(deepCopy)
    }

    return (
        <div>
            <Nav />
            <div className="main">
                <div className="mainContainer">
                    <div className="buttonContainer">
                        {data.map((bugs, index) => <button
                            key={index}
                            className="button2"
                            onClick={() => changeQuestions(index)}>{bugs.bugs}</button>)
                        }
                    </div>
                    {palautus === false && data[activeTest].questions.map((item, index) =>
                        <div className="questions">
                            <input className="input" value={item.question}></input>
                            {item.answers && <AddAnswers index={index}
                                parentIndex={activeTest}
                                answers={item.answers}
                                answerPicked={answerPicked}
                                itemEdited={itemEdited} />}
                            <div className="buttonContainer">
                                <button className="button3" onClick={() => addItem(activeTest, index)}>+</button>
                            </div>
                        </div>)}
                </div>
            </div>
        </div>
    );
}

export default App;
