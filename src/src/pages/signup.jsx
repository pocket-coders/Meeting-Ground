/*SignUpPage.jsx*/
import React, { Component } from "react";
//You have to use the link component to link between you pages
//import gql from "graphql-tag";
import { Query, graphql } from "react-apollo";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

//npm install apollo-boost react-apollo graphql --save
import { Link } from "react-router-dom";
// yarn add apollo-client

import HostList from "../graphql/server/hostlist";

// apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

class SignUpPage extends Component {
  render() {
    const id = this.props.match.params.id;
    return (
      <ApolloProvider client={client}>
        <div>
          <h1>Host List</h1>
          <HostList />
        </div>
      </ApolloProvider>
      //   <Query query={query} variables={{ id }}>
      //     {({ loading, err, data }) => {
      //       if (loading) return <div>loading</div>;
      //       return <div>{data.links.email}</div>;
      //     }}
      //   </Query>
    );
  }
}

// const query = gql`
//   query LinkInfo($id: string) {
//     links(link: $id) {
//       email
//     }
//   }
// `;

//   return (
//     <div>
//       <h3> Sign up page!</h3>
//       {/* <Link to="/">Main Page</Link> */}

//     </div>
//   );
// };
export default SignUpPage;
