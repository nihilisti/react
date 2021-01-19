import React from 'react'
import Timestamp from 'react-timestamp'

export default ({ name, message }) =>
    <div className="msgItem">
        {/* <Timestamp options={{ includeDay: false, twentyFourHour: true }} className="date" />
        <br></br> */}
        <div className="name">{name}</div>
        <div className="message">
            <div className="msgContent">{message}</div>
        </div>
    </div>