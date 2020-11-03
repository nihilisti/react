import React, { useEffect } from 'react';
import { useState } from 'react';
import ChildList from './ChildList'
// import './App.css';

function Objection() {

    const [data, setData] = useState([])
    // const [lastName, setLastName] = useState("")

    const initialData = [
        { lastName: 'Snow', firstName: 'Jon', age: 35 },
        {
            lastName: 'Lannister', firstName: 'Cersei', age: 42,
            children: [{
                childName: "Joffrey",
                childNames: [{ firstName: "Joffrey", middleName: "Idk" }]
            },
            { childName: "Tommen" }]
        },
        { lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    ];

    useEffect(() => {

        let jemma = window.localStorage;
        let tempData = JSON.parse(jemma.getItem("data"))
        if (tempData == null) {
            jemma.setItem("data", JSON.stringify(initialData))
            tempData = initialData
        } else {
            if (tempData.length == 0) {
                jemma.setItem("data", JSON.stringify(initialData))
                tempData = initialData
            }
        }
        setData(tempData);

    },
        [])

    useEffect(() => {

        window.localStorage.setItem("data", JSON.stringify(data))

    },
        [data])

    const buttonPressed = () => {
        // let newData = [...data]
        let newData = JSON.parse(JSON.stringify(data))
        let finalData = data.concat(newData)
        setData(finalData)
    }

    const showChildren = (index) => {
        if (data[index].children !== undefined) {
            return data[index].children.map((alkio, childIndex) => <div key={childIndex}><input onChange={(e) => { childNameChanged(e, index, childIndex) }} value={alkio.childName}></input></div>)
        }
    }

    const childNameChanged = (event, parentIndex, childIndex) => {
        let deepCopy = JSON.parse(JSON.stringify(data))
        deepCopy[parentIndex].children[childIndex].childName = event.target.value;
        setData(deepCopy)
    }

    const lastNameChanged = (event, index) => {
        let deepCopy = JSON.parse(JSON.stringify(data))
        deepCopy[index].lastName = event.target.value;
        setData(deepCopy)
    }

    return (
        <div>
            {data.map((item, index) => <div key={index}>
                <input onChange={(event) => lastNameChanged(event, index)} value={item.lastName}></input>
                {item.firstName}
                {item.age}
                {item.children ? <ChildList childNameChanged={childNameChanged} parentIndex={index} childList={item.children} /> : ""}
                <ChildList parentIndex={index} childList={item.children} />
            </div>)}
            <button onClick={buttonPressed}>Press me</button>
        </div>
    );
}

export default Objection;