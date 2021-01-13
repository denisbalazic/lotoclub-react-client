import React, { Component } from "react";
import UserCombinations from "../components/UserCombinations";
import { apiService } from "../service/api";

export default class CombinationsPage extends Component {
  state = {
    userCombinations: [],
  };
  componentDidMount = async () => {
    const data = await apiService.getUserCombinations();
    this.setState({ userCombinations: data });
  };
  render() {
    const { userCombinations } = this.state;
    return (
      <main>
        <div className="container">
          {userCombinations.length > 0 &&
            userCombinations.map((u, index) => (
              <UserCombinations key={index} username={u.username} combinations={u.combinations} />
            ))}
        </div>
      </main>
    );
  }
}
