import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
import "./candidates.css";

class Candidates extends Component {
  state = {
    searchTerm: "",
  };

  onSearchInput = (e) => {
    this.setState({ searchTerm: e.target.value.toLowerCase() });
  };

  renderList() {
    if (this.props.list.length === 0) return <div>No candidates</div>;
    let arr = this.props.list.filter((e) =>
      e.name.toLowerCase().includes(this.state.searchTerm)
    );
    return arr.map((candidate) => (
      <Link key={candidate.id} to={`/${candidate.id}`}>
        <Card candidate={candidate} />
      </Link>
    ));
  }
  render() {
    return (
      <div className="user-container">
        <div className="input">
          <input
            placeholder="Search Candidate"
            value={this.state.searchTerm}
            onChange={this.onSearchInput}
          />
        </div>
        <div className="buttons">
          <Link to="/accepted">
            <button className="accepted">Shortlisted</button>{" "}
          </Link>
          <Link to="/rejected">
            <button className="rejected">Rejected</button>
          </Link>
          <Link to="/">
            <button>Registered</button>
          </Link>
        </div>
        <div className="candidate-list">{this.renderList()}</div>
      </div>
    );
  }
}

export default Candidates;
