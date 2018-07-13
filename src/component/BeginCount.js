import React from 'react'
import "../index.css"
import { Panel } from 'react-bootstrap'


const BeginCount = (props) => {
  console.log(props,"====props==========")
    return(
    <div>
       
  <Panel>
    <Panel.Body>Begin Count</Panel.Body>
    <Panel.Body>{props.count}</Panel.Body>
  </Panel>

    </div>
    )
}

export default BeginCount;