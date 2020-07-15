import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getHostQuery = gql`
  {
    hosts {
      email
    }
  }
`;

class HostList extends Component {
  render() {
    return (
      <div>
        <ul id="host-list">
          <li>Host email</li>
        </ul>
      </div>
    );
  }
}

export default graphql(getHostQuery)(HostList);
