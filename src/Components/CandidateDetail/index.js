import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toAccept, toReject } from "../actions";
import "./candidStyle.css";

class CandidateDetail extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  fetchCandidates = () => {
    const { id } = this.props.match.params;
    let data = this.props.candidates.filter((e) => e.id === id)[0] || {};
    console.log(data);
    return data;
  };

  onAccept = () => {
    this.props.toAccept(this.props.candidates, this.props.match.params.id);
  };

  onReject = () => {
    this.props.toReject(this.props.candidates, this.props.match.params.id);
  };
  render() {
    let data = this.fetchCandidates();
    return (
      <div className="candid-detail">
        <div className="candid-left">
          <img src={data.Image} />
          {data.name}
        </div>
        <div className="candid-right">
          <p>
            <h2>Details:</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            curabitur gravida arcu ac tortor dignissim convallis. Condimentum
            vitae sapien pellentesque habitant morbi tristique. In mollis nunc
            sed id semper risus in hendrerit gravida.
          </p>
          <div>
            <Link to="/" onClick={this.onAccept}>
              <button className="accept-button">Accept</button>
            </Link>
            <Link to="/" onClick={this.onReject}>
              <button>Reject</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ candidates }) => {
  return {
    candidates,
  };
};
export default connect(mapStateToProps, { toAccept, toReject })(
  CandidateDetail
);
