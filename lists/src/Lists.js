import React from 'react';
import { useState } from 'react';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';

function Lists() {
    const [selected, setSelected] = useState([false, false, false, false, false]);
    
    const selectItem = (index) => {
        let kopio = [...selected]
        if (kopio[index] === true) {
            kopio[index] = false;
        } else {
            kopio[index] = true;
        }
        if (kopio[index] === true) {
            document.getElementById("name" + index).className = "selectedItem";
        } else {
            document.getElementById("name" + index).className = "liStyle";
        }
        setSelected(kopio);
    }

    const [names, setNames] = useState([
        "Eric",
        "Bill",
        "Sookie",
        "Jason",
        "Pam",
    ]);

    const listNames = names.map((name, index) =>
        <li id={"name" + index} onClick={() => selectItem(index)} className="liStyle">{name}</li>
    );

    const selectItem2 = (index) => {
        let kopio2 = [...selected]
        if (kopio2[index] === true) {
            kopio2[index] = false;
        } else {
            kopio2[index] = true;
        }
        if (kopio2[index] === true) {
            document.getElementById("name2" + index).className = "selectedItem";
        } else {
            document.getElementById("name2" + index).className = "liStyle";
        }
        setSelected(kopio2);
    }

    const [names2, setNames2] = useState([
        "Jessica",
        "Lafayette",
        "Tara",
        "Sam",
        "Alcide",
    ]);

    const listNames2 = names2.map((name2, index) =>
        <li id={"name2" + index} onClick={() => selectItem2(index)} className="liStyle">{name2}</li>
    );

    const moveItemLeft = () => {
        let newList = names2.filter((item, index) => selected[index] === true)
        let newListRemoved = names2.filter((item, index) => selected[index] === false)
        let rightList = [...names]
        setNames(rightList.concat(newList))
        setNames2(newListRemoved)
    }

    const moveItemRight = () => {
        let newList = names.filter((item, index) => selected[index] === true)
        let newListRemoved = names.filter((item, index) => selected[index] === false)
        let rightList = [...names2]
        setNames2(rightList.concat(newList))
        setNames(newListRemoved)
    }

    const clearLists = () => {
        setNames([]);
        setNames2([]);
    }

    const listEmpty = () => {
        if (names.length === 0) {
            return "This list has no items";
        }
        if (names2.length === 0) {
            return "This list has no items";
        }
    }

    return (
        <div className="container">
            <h1>Lists</h1>
            <div className="listContainer">
                <table className="table">
                    <tbody>
                        <tr>
                            <th>{listNames}</th>
                            <th>{listEmpty()}</th>
                        </tr>
                    </tbody>
                </table>
                <div className="arrowContainer">
                    <ArrowBackIosOutlinedIcon onClick={moveItemLeft}></ArrowBackIosOutlinedIcon><p></p>
                    <ArrowForwardIosOutlinedIcon onClick={moveItemRight}></ArrowForwardIosOutlinedIcon>
                </div>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>{listNames2}</th>
                            <th>{listEmpty()}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <button onClick={clearLists}>Press me ;)</button>
            </div>
        </div>
    );
}

export default Lists;