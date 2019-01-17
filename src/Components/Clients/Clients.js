import React, { Component } from 'react';
import './Clients.css'
import DataBar from './DataBar';
import Moment from 'react-moment'
import Popup from './ShowPopup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';


class Clients extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            low: 0,
            high: 20,
            showPopup: false
        }
    }

    updatePopup = () => {
        this.setState({
            showPopup: !this.state.showPopup
        })
    }

    plusTwenty = async () => {
        let newLow = this.state.low + 20
        let newHigh = this.state.high + 20
        let data = await this.getUsers()
        if (this.state.high <= data.data.length) {
            this.setState({
                low: newLow,
                high: newHigh
            })
        }
    }
    minusTwenty = () => {
        let newLow = this.state.low - 20
        let newHigh = this.state.high - 20
        if (this.state.low > 0) {
            this.setState({
                low: newLow,
                high: newHigh
            })
        }
    }

    getUsers = async () => {
        return await axios.get('http://localhost:8000/clients')
    }

    async componentDidMount() {
        const users = await this.getUsers()
        console.log(users)
        this.setState({
            data: users.data
        })
    }

    render() {
        const filteredItems = this.state.data.filter((item, index) => {
            return (index >= this.state.low && index <= this.state.high)
        })
        return (
            <div className="allClients">
                <div className="searchData"><input type="text" placeholder="Search" />
                    <select className="dropDown">
                        <option value="Name">Name</option>
                        <option value="Surname">Surname</option>
                        <option value="Country">Country</option>
                        <option value="FirstContact">First Contact</option>
                        <option value="Email">Email</option>
                        <option value="Sold">Sold</option>
                        <option value="Owner">Owner</option>
                    </select>
                    <div>
                        <span className="arrow" onClick={this.minusTwenty}><FontAwesomeIcon icon="angle-left" /></span>
                        <span> {this.state.low} - {this.state.high} </span>
                        <span className="arrow" onClick={this.plusTwenty}><FontAwesomeIcon icon="angle-right" /></span>
                    </div>
                </div>
                <DataBar />
                {filteredItems.map(m => {
                    return (
                        <div className="client" onClick={this.updatePopup}>
                        <Popup showPopup={this.state.showPopup} updatePopup={this.updatePopup} id={m._id}   />
                            <div key={m.id} className="firstName" onClick={this.default}>
                                {m.name.split(' ')[0]}
                            </div>
                            <div className="lastName">
                                {m.name.split(' ')[1]}
                            </div>
                            <div className="lastName">
                                {m.country}
                            </div>
                            <div className="lastName">
                                <Moment format="DD/MM/YYYY">
                                    {m.firstContact}
                                </Moment>
                            </div>
                            <div className="lastName">
                                {m.emailType !== null ? m.emailType : " - "}
                            </div>
                            <div className="lastName">
                                {m.sold ? <FontAwesomeIcon icon="check" /> :
                                    " - "}
                            </div>
                            <div className="lastName">
                                {m.owner}
                            </div>
                        </div>
                    )
                }

                )}
            </div>
        );
    }
}

export default Clients;
