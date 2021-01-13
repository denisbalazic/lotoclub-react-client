import React, { Component } from "react";
import UserCombinations from "../components/UserCombinations";

export default class CombinationsPage extends Component {
  state = {
    userCombinations: [
      {
        username: "Denis",
        combinations: [
          {
            mainNums: [1, 2, 3, 4, 5],
            euroNums: [1, 2],
          },
        ],
      },
    ],
  };
  componentDidMount = () => {};
  render() {
    const { userCombinations } = this.state;
    return (
      <div>
        {userCombinations.map((u) => (
          <UserCombinations username={u.username} combinations={u.combinations} />
        ))}
      </div>
    );
  }
}
