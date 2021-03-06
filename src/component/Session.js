import React from 'react'
import "../index.css"
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap'

function showAlert(sid) {
    alert(`sessionId ${sid}`)
}
const Session = (props) => {
    let sessionList = props.data.map((item) => {
        return (<div onClick={() => showAlert(item.sid)}>{item.uid + "    " + item.model + "   " + item.pf + "   " + item.nwk + "   " + item.date}
            <hr /></div>)
    })
    return (
        <div>
            <p>Session List</p>
            {sessionList}
        </div>
    )
}

export default Session;