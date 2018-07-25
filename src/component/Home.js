import React, { Component } from 'react';
import userPic from "../images/ranu.JPG"
import axios from "axios"
import ProgressBar from "./ProgressBar"
import DropDownComp from "./DropDown"
import MyNavComp from "./myNav"
import BeginCount from "./BeginCount"
import EndCount from "./EndCount"
import Session from "./Session"
import SessionDetail from "./SessionDetail"
import ModalComp from "./Modal"
import "../index.css"
import { Navbar, NavItem, MenuItem, NavDropdown, Image, Grid, Row, Col, DropdownButton } from 'react-bootstrap';
import ScrollArea from "react-scrollbar"

class App extends Component {
    constructor() {
        super()
        this.state = {
            apiData: "",
            beginCount: 0,
            endCount: 0,
            sessions: []
        }
    }
    componentDidMount() {
        console.log("im in CDM")
        axios.get(`http://api.myjson.com/bins/egw6e`)
            .then(res => {
                this.setState({
                    apiData: res.data,
                    beginCount: res.data.begin_count,
                    endCount: res.data.end_count,
                    sessions: res.data.sessions
                })
            })
            .catch(err => { console.log("error in getting API data: ", err) })
    }

    render() {
        let data = ""
        if (this.state.apiData == "") {
            data = <ModalComp />
        }
        else {
            data = <div>
            <div className="outerDiv">
                <div className="leftDiv">
                    <div className="imgContainer">
                        <img className="userPic" src={userPic}  ></img>
                        <div className="imageCaption">
                            <p>Sudu Patil</p>
                        </div>
                    </div>
                    <ProgressBar />
                </div>
                <div className="rightDiv">
        <div className="wrapperCount">
            <div className="BeginCount">
                <BeginCount count={this.state.beginCount} />
            </div>
            <div className="EndCount">
                <EndCount count={this.state.endCount} />
            </div>
        </div >
        <div className="session">
            <Session data={this.state.sessions} />
        </div>
        <div className="sessionDetail">
            <SessionDetail />
        </div>
    </div>
            </div>
        </div>
        }

        return (
            <div>
                <MyNavComp />
               {data}
            </div>
        )
    }
}

export default App  
