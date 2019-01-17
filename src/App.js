import React, { Component } from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { faCheck, faAngleLeft, faAngleRight, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Clients from './Components/Clients/Clients';
import Landing from './Landing';
import Actions from './Components/Actions/Actions';
import Analytics from './Components/Analytics/Analytics';
import Data from '../src/data.json'
// import Tabs from './Tabs';
library.add(faCheck, faAngleRight, faAngleLeft, faTimesCircle)

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: Data
    }
  }


  render() {
    return (
      <Router>
        <div className="app">
          <div className="navBar">
            {<Link to="/clients"><span>Clients </span></Link>}
            {<Link to="/actions"><span >Actions </span></Link>}
            {<Link to="/analytics"><span>Analytics</span></Link>}
          </div>
          <div className="App">
            <Route path="/" exact component={Landing} />
            <Route path="/clients" render={() => <Clients clientData={this.state.data} />} />
            <Route path="/actions" render={() => <Actions />} />
            <Route path="/analytics" render={() => <Analytics />} />
            {/* <Route path="/catalog" render={() => <Catalog />} />
          <Route path="/movies/:id" exact render={({ match }) => <MovideDeats match={match} movies={state.movies} />} /> */}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
