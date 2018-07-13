import React from 'react'
import "../index.css"
import { Panel } from 'react-bootstrap'


const BeginCount = (props) => {
    return(
    <div>
       
  <Panel>
    <Panel.Body>End Count</Panel.Body>
    <Panel.Body>{props.count}</Panel.Body>
  </Panel>

    </div>
    )
}

export default BeginCount;