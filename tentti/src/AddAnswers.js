import React from 'react';
// import { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';

function AddAnswers(props) {

    // const [checked, setChecked] = React.useState(true);

    const handleChange = (answerIndex, event) => {
        props.answerPicked(props.examIndex, props.questionIndex, answerIndex, event)
    };

    const handleTextChange = (answerIndex, event) => {
        props.itemEdited(props.examIndex, props.questionIndex, answerIndex, event)
    };

    const handleDelete = (answerIndex, event) => {
        props.deleteItem(props.examIndex, props.questionIndex, answerIndex, event)
    };

    return (
        <div>
            {props.answers.map((alkio, answerIndex) =>
                <div key={answerIndex} className="questionRow">
                    <Checkbox
                        checked={alkio.picked}
                        onChange={(event) => handleChange(answerIndex, event)}
                        color="primary"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    <input onChange={(event) => handleTextChange(answerIndex, event)}
                        className="input"
                        value={alkio.answer}>
                    </input>
                    <div className="icon">
                        <DeleteIcon className="color" onClick={(event) => handleDelete(answerIndex, event)} />
                    </div>
                </div>)}
        </div>
    );
}

export default AddAnswers;