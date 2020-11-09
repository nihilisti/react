import React, { useEffect } from 'react';
import { useState } from 'react';

function ChildList (props) {
    return (
        <div>
            {props.childList.map((alkio, childIndex) =>
                <div key={childIndex}>
                    <input onChange={(e) => { props.childNameChanged(e, props.parentIndex, childIndex) }}
                        value={alkio.childName}></input>
                </div>)}
        </div>
    );
}

export default ChildList;