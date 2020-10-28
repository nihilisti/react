import React from 'react';
import { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

function Objection() {

    const [data, setData] = useState([
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42,
            children: [{ childName: "Joffrey",
                childNames: [{ firstName: "Joffrey", middleName: "Idk" }] },
            { childName: "Tommen" }]
        },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    ]);

    const buttonPressed = () => {
        // let newData = [...data]
        let newData = JSON.parse(JSON.stringify(data))
        let finalData = data.concat(newData)
        setData(finalData)
    }

    const showChildren = (item) => {
        if (item.children !== undefined) {
            return item.children.map(alkio => <div>{alkio.childName}</div>)
        }
    }

    return (
        <div>
            {data.map(item => <div>{item.lastName} {item.firstName} {item.age}
            {showChildren(item)}</div>)}
            <button onClick={buttonPressed}>Press me</button>
        </div>
    );
}

export default Objection;