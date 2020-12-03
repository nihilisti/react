import { useState, useReducer } from 'react';
import React, { useEffect } from 'react';
import './App.css';
import Nav from './TenttiNav';
import AnswerList from './AnswerList';
import uuid from 'react-uuid';
import axios from 'axios';

// const initialData =
//   [
//     {
//       bugs: "Hyönteiset", questions: [
//         {
//           question: 'Mikä on Vespula vulgaris?',
//           answers: [
//             { uid: uuid(), answer: "Piha-ampiainen", correct: true, picked: false },
//             { uid: uuid(), answer: "Isopihtihäntä", correct: false, picked: false },
//             { uid: uuid(), answer: "Suursukeltaja", correct: false, picked: false },
//             { uid: uuid(), answer: "Sarvikuonokas", correct: false, picked: false },
//           ]
//         },
//         {
//           question: 'Mikä on Hymenopus coronatus?',
//           answers: [
//             { uid: uuid(), answer: "Ritariperhonen", correct: false, picked: false },
//             { uid: uuid(), answer: "Orkidearukoilijasirkka", correct: true, picked: false },
//             { uid: uuid(), answer: "Kultaheinäsirkka", correct: false, picked: false },
//             { uid: uuid(), answer: "Täpläpaarma", correct: false, picked: false },
//           ]
//         },
//       ]
//     },
//     {
//       bugs: "Hämähäkkieläimet", questions: [
//         {
//           question: 'Mikä on Mitopus morio?',
//           answers: [
//             { answer: "Täplälukki", correct: false, picked: false },
//             { answer: "Seinälukki", correct: false, picked: false },
//             { answer: "Keisarilukki", correct: false, picked: false },
//             { answer: "Metsälukki", correct: true, picked: false },
//           ]
//         },
//         {
//           question: 'Mikä on Pandinus imperator?',
//           answers: [
//             { answer: "Keisariskorpioni", correct: true, picked: false },
//             { answer: "Kenttäskorpioni", correct: false, picked: false },
//             { answer: "Brontoscorpio (ukkosskorpioni)", correct: false, picked: false },
//           ]
//         }
//       ]
//     }
//   ]

function reducer(state, action) {
  let deepCopy = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };

    case "ANSWER_CHANGED":
      deepCopy[action.data.answerIndex].answer = action.data.newText;
      return deepCopy

    // case 'IHMISEN_LISAYS':
    //   let uusiHenkilö = { uid: uuid(), etunimi: "", sukunimi: "", ikä: 0 }
    //   syväKopio.push(uusiHenkilö)
    //   return syväKopio

    // case 'IHMISEN_POISTO':
    //   syväKopio.splice(action.data, 1)
    //   return syväKopio

    case "INIT_DATA":
      return action.data

    default:
      throw new Error();
  }
}

function App() {

  const [palautus, setPalautus] = useState(false)
  const [dataAlustettu, setDataAlustettu] = useState(false)
  const [activeQuestions, setActiveQuestions] = useState(0)
  const [showExam, setShowExam] = useState(0)
  const [state, dispatch] = useReducer(reducer, []);

  useEffect(() => {

    // const createData = async () => {

    //   try {

    //     let result = await axios.post("http://localhost:3005/bugs", initialData)
    //     dispatch({ type: "INIT_DATA", data: initialData })
    //     // setData(initialData)
    //     setDataAlustettu(true)

    //   } catch (exception) {
    //     alert("Tietokannan alustaminen epäonnistui")
    //   }
    // }

    const fetchData = async () => {
      try {
        let result = await axios.get("http://localhost:5000/tentit")
        if (result.data.length > 0) {
          
          dispatch({ type: "INIT_DATA", data: result.data })
          //          setData(result.data);
          setDataAlustettu(true)
        } else {
          throw ("Nyt pitää data kyllä alustaa!")
        }
      }
      catch (exception) {
        // createData();
        console.log(exception)
      }
    }
    fetchData();
  }, [])

  //SEH -> Structured Exception Handling
  // useEffect(() => {

  //   const updateData = async () => {
  //     try {
  //       let result = await axios.put("http://localhost:3005/bugs", state)
  //     } catch (exception) {
  //       console.log("Datan päivitys ei onnistunut")
  //     }
  //     finally {

  //     }
  //   }

  //   if (dataAlustettu) {
  //     updateData();
  //   }
  // }, [state])

  // useEffect(() => {
  //   let jemma = window.localStorage;
  //   let newData = jemma.getItem("data")
  //   if (!newData) {
  //     jemma.setItem("data", JSON.stringify(data))
  //     newData = data
  //   } else {
  //     setData(JSON.parse(newData));
  //   }
  // }, [])

  // const buttonPressed = () => {
  //   let newData = JSON.parse(JSON.stringify(data))
  //   let finalData = data.concat(newData)
  //   setData(finalData)
  // }

  // const answerPicked = (mainIndex, parentIndex, answerIndex, event) => {
  //   let deepCopy = JSON.parse(JSON.stringify(data))
  //   deepCopy[mainIndex].questions[parentIndex].answers[answerIndex].picked = event.target.checked;
  //   setData(deepCopy)
  // }

  // const showAnswers = (item) => {
  //   setPalautus(true)
  // }

  // const changeQuestions = (index) => {
  //   setActiveQuestions(index)
  // }

  const changeExam = (index) => {
    setShowExam(index)
  }
  
  return (
    <div>
      <Nav />
      <div className="main">
        <div className="mainContainer">
          <div className="buttonContainer">
            {state.map((tentit, index) => <button
              key={index}
              className="button2"
              onClick={() => changeExam(index)}>{tentit.nimi}</button>)
            }
          </div>
          {/* {palautus === false && state[activeQuestions] && state[activeQuestions].questions.map((item, index) =>
            <div className="questions">
              <div className="questionTitle" >
                {item.question}
              </div>
              {item.answers && <AnswerList index={index} parentIndex={activeQuestions} answers={item.answers} />}
            </div>)} */}
        </div>
      </div>
      <button className="button">Näytä vastaukset</button>
    </div>
  );
}

export default App;