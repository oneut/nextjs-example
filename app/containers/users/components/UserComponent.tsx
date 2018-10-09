import React from "react";
import { User } from "../../../models/User";

interface Props {
  user: User;
}

interface State {}

export class UserComponent extends React.Component<Props, State> {
  render() {
    return (
      <div className="container">
        <h3>User: {this.props.user.id}</h3>
        <p>created: {this.props.user.created}</p>
        <p>karma: {this.props.user.karma}</p>
      </div>
    );
  }
}
