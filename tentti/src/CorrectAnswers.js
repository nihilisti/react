import React from 'react';
import { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';

function CorrectAnswers(props) {

    // const [checked, setChecked] = React.useState(true);

    const handleChange = (answerIndex, event) => {
        props.optionChanged(props.parentIndex, answerIndex, event)
    };

    return (
        <div>
            {props.answerList.map((alkio, answerIndex) =>
                <div key={answerIndex} className="questionRow">
                    <Checkbox
                        checked={alkio.picked}
                        onChange={(event) => handleChange(answerIndex, event)}
                        color="primary"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    <p className="answerTitle">{alkio.answer}</p>
                </div>)}
        </div>
    );
}

export default CorrectAnswers;