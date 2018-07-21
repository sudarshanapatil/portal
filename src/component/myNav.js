import React, { Component } from "react";
import "../index.css"
import jioLogo from "../images/jio1.png"
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
                    searchData: ["a", "v", "d","sfsf"]
                })
            })
            .catch(err => { console.log("error in getting API data: ", err) })


    }
    render() {
        let searchList;
        if (this.state.searchData.length < 1) {
            searchList = "loading"
        }
        else {

            let data = this.state.searchData.map((item) => {
                return <li className="searchDiv">{item}<hr/></li>
            })
            searchList = <ul className="searchUL">{data}</ul>
            console.log("searchList : ", searchList)
        }

        return (
            <div className="myNav">
                <div className="navElements">
                    <input type="text" placeholder="Search.." className="searchInput" onChange={(e) => this.handleSearch(e.target.value)}></input>
                    <div className="searchItems">
                        {searchList}
                    </div>
                    <img src={jioLogo} width="100px" height="100px" align="middle" />
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