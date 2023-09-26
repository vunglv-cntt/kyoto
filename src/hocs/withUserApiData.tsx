// withUserApiData.js
import React, { Component } from "react";

function withUserApiData(WrappedComponent) {
  return class extends Component {
    state = {
      userData: null,
      loading: true,
      error: null,
    };

    componentDidMount() {
      fetch("https://kyoto-api-dev.tasvietnam.com/api/user/me")
        .then((response) => {
          if (!response.ok) {
            localStorage.removeItem("auth");
            throw new Error("API Error");
          }
          return response.json();
        })
        .then((userData) => {
          this.setState({
            userData,
            loading: false,
          });
        })
        .catch((error) => {
          this.setState({
            error,
            loading: false,
          });
        });
    }

    render() {
      const { userData, loading, error } = this.state;

      return (
        <WrappedComponent
          userData={userData}
          loading={loading}
          error={error}
          {...this.props}
        />
      );
    }
  };
}

export default withUserApiData;
