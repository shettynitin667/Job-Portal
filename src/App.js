import React, { Component } from "react";
import "./App.css";
import Candidates from "./Components/Candidates";
import Header from "./Components/Header";
import Accepted from "./Components/Accepted";
import Rejected from "./Components/Rejected";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CandidateDetail from "./Components/CandidateDetail";
import { connect } from "react-redux";
import { loadUsers } from "./Components/actions";

class App extends Component {
  componentDidMount() {
    this.fetchCandidates();
  }

  addToRejected = (user) => {};

  addToAccepted = (user) => {};

  async fetchCandidates() {
    const data = await axios.get(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
    );
    this.props.loadUsers(data.data);
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Router>
          <Switch>
            <Route path="/" exact>
              <Candidates list={this.props.candidates} />
            </Route>
            {/* Accepted candidates route */}
            <Route path="/accepted" exact>
              <Accepted list={this.props.accepted} />
            </Route>
            {/* Rejected candidates route */}
            <Route path="/rejected" exact>
              <Rejected list={this.props.rejected} />
            </Route>
            <Route path="/:id" component={CandidateDetail} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = ({ candidates, accepted, rejected }) => {
  return {
    candidates,
    accepted,
    rejected,
  };
};
export default connect(mapStateToProps, { loadUsers })(App);
