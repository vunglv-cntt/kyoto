// withUserApiData.js
import React, { Component } from "react";
import { authStorage } from "helpers/locale-storage";
function withUserApiData(WrappedComponent) {
  return class extends Component {
    state = {
      userData: null,
      loading: true,
      error: null,
    };

    componentDidMount() {
      const authenToken = authStorage.get("auth");
      fetch("https://kyoto-api-dev.tasvietnam.com/api/user/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authenToken}`,
        },
      })
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
