import React, { Component } from 'react';
import './App.css'

class Tabs extends Component {
    constructor() {
        super()
        this.state = {
            data:[
                {route: "/clients", name: "Clients"},
                {route: "/actions", name: "Actions"},
                {route: "/analytics", name: "Analutics"}
            ]
        }
    }
  render() {
      let backgroundColor = this.state.data.map(m=> m.name)
    return (
        <div></div>
    );
  }
}

export default Tabs;