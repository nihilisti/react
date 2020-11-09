import React from 'react';
// import { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';

function AddAnswers(props) {

    // const [checked, setChecked] = React.useState(true);

    const handleChange = (answerIndex, event) => {
        props.answerPicked(props.parentIndex, props.index, answerIndex, event)
    };

    const handleTextChange = (answerIndex, event) => {
        props.itemEdited(props.parentIndex, props.index, answerIndex, event)
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
                </div>)}
        </div>
    );
}

export default AddAnswers;