import React from 'react';
import { useState } from 'react';

function ObjectTehtava() {

    const days = [
        { "ma": 44 },
        { "pe": 100 },
        { "ke": 21 },
        { "ti": 66 },
        { "la": 22 },
    ];

    // tehtävä 2.9
    days.sort((a, b) => Object.values(a) - Object.values(b))
    console.log("days sorted by value", days);

    // tehtävä 2.10

    const days2 = [
        { "ma": 44 },
        { "pe": 100 },
        { "ke": 21 },
        { "ti": 66 },
        { "la": 22 },
    ];

    const order = ["ma", "ti", "ke", "to", "pe", "la", "su"]
    days2.sort((a, b) => {
        if (order.indexOf(Object.keys(a)[0]) < order.indexOf(Object.keys(b)[0])) {
            return -1
        }
        if (order.indexOf(Object.keys(a)[0]) > order.indexOf(Object.keys(b)[0])) {
            return 1
        }
        return 0
    })

    console.log("days in order", days2);

    // tehtävä 2.11

    const days3 = [
        { day: "ma", value: 44 },
        { day: "pe", value: 100 },
        { day: "ke", value: 21 },
        { day: "ti", value: 66 },
        { day: "la", value: 22 },
    ];

    const getEvenNumbers = (item) => {
        if (item.value % 2 === 0) {
            console.log("even numbers", item.value)
        }
    }

    days3.forEach(getEvenNumbers);


    return (
        <div>
        </div>
    );
}

export default ObjectTehtava;