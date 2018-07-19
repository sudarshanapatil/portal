import React, { Component } from "react";
import "../index.css"
import jioLogo from "../images/jio.jpg"
import axios from "axios";
class MyNavComp extends Component {
    constructor() {
        super()
        this.state = {
            searchData: []
        }
    }
    componentDidMount() {
        console.log("in CDM")

    }
    handleSearch(searchTerm) {
        console.log(searchTerm, "hahahahaha")
        let data = ["a", "b", "c"]
        axios.get(`http://api.myjson.com/bins/egw6e`)
            .then(res => {
                this.setState({
                    apiData: res.data,
                    beginCount: res.data.begin_count,
                    endCount: res.data.end_count,
                    sessions: res.data.sessions
                })
            })
            .catch(err => {console.log("error in getting API data: " ,err)})
        //    this.state.searchData=data.map((item) => {
        //           return <div key={item} className="searchDiv">{item}</div>
        //    })

    }
    render() {

        return (
            <div className="myNav">
                <div className="navElements">
                    <a href="#"><h5 className="navFont"> Home</h5></a>
                    <input type="text" placeholder="Search.." className="searchInput" onChange={(e) => this.handleSearch(e.target.value)}></input>
                    <div className="searchItems">
                        <ul className="searchUL">
                            <li className="searchDiv"> yeda</li>
                            <li className="searchDiv">  pagal </li>
                           
                        </ul>
                    </div>
                    <img src={jioLogo} width="5%" height="40px" align="middle" />
                    <div className="filterDate" >
                        <button className="filterItem"> Today</button>
                        <button className="filterItem"> 1-week</button>
                        <button className="filterItem"> 1-month</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyNavComp;