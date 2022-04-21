import { Component } from "react";

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  users: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",
    users: undefined,
  };

  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name;
    });

    this.setState({ user: foundUser });
  };

  render() {
    return (
      <div>
        <h4>User Search</h4>
        <input
          value={this.state.name}
          onChange={(e) => this.setState(e.target.value)}
        />
        <br />
        <br />
        <button onClick={this.onClick}>Find User</button>
        <br />
        <br />
        <div>
          Name: {this.state.users?.name}
          <br />
          Age: {this.state.users?.age}
        </div>
      </div>
    );
  }
}

export default UserSearch;
