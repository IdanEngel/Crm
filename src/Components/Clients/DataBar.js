import React, { Component } from 'react';
import './Clients.css'

class DataBar extends Component {
  render() {
    return (
        <div className="dataBar">
            <div>Name</div>
            <div>Surname</div>
            <div>Country</div>
            <div>First Contact</div>
            <div>Email</div>
            <div>Sold</div>
            <div>Owner</div>
        </div>
    );
  }
}

export default DataBar;