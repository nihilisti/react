import { useState, useReducer } from 'react';
import React, { useEffect } from 'react';
import './App.css';
import Nav from './TenttiNav';
import AnswerList from './AnswerList';
import uuid from 'react-uuid';
import axios from 'axios';

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
  const [activeQuestions, setActiveQuestions] = useState([])
  const [showExam, setShowExam] = useState(0)
  const [state, dispatch] = useReducer(reducer, []);

  const [data2, setData2] = useState([])
  const [dataAlustettu2, setDataAlustettu2] = useState(false)

  useEffect(() => {

    // const createData = async () => {

    //   try {

    //     let result = await axios.post("http://localhost:3005/tentit", initialData)
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
          for (var i = 0; i < result.data.length; i++) {
            result.data[i].kysymykset = []
            let kysymykset = await axios.get("http://localhost:5000/tenttikysymykset/" + result.data[i].id)
            result.data[i].kysymykset = kysymykset.data
            console.log('kysymykset.data', kysymykset.data)

            // if (result.data[i].kysely.length > 0){
            //   for (var j = 0; j < result.data[i].kysely.length; j++){
            //     result.data[i].kysely[j].vastaukset = []
            //     let vaihtoehdot  = await axios.get("http://localhost:5000/vaihtoehdot/" + result.data[i].kysely[j].kysymys_id)
            //     result.data[i].kysely[j].vaihtoehdot = vaihtoehdot.data
            //   }
            // }
          }

          setData2(result.data);
          setDataAlustettu2(true);

          dispatch({ type: "INIT_DATA", data: result.data })
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

  console.log('data2', data2)

  if (data2.length < 1)
    return <>loading...</>

  return (
    <div>
      <Nav />
      <div className="main">
        <div className="mainContainer">
          <div className="buttonContainer">
            {data2.map((tentit, index) => <button
              key={index}
              className="button2"
              onClick={() => changeExam(index)}>{tentit.nimi}</button>)
            }
          </div>
          {palautus === false && state[activeQuestions] && state[activeQuestions].kysymykset.map((kysymykset, index) =>
            <div className="questions">
              <div className="questionTitle" key={index}>
                {kysymykset.nimi}
              </div>
              {/* {vaihtoehdot.nimi && <AnswerList index={index} parentIndex={activeQuestions} answers={vaihtoehdot.nimi} />} */}
            </div>)}
        </div>
      </div>
      <button className="button">Näytä vastaukset</button>
    </div>
  );
}

export default App;