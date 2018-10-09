import React from "react";
import { connect } from "react-redux";
import { Header } from "../../common/Layouts/components/Header";
import { UserComponent } from "./components/UserComponent";
import { User } from "../../models/User";

interface Props {
  user: User;
}

interface State {}

interface ConnectState {
  user: User;
}

class UserContainer extends React.Component<Props, State> {
  render() {
    if (!this.props.user) {
      return null;
    }

    return (
      <div>
        <Header />
        <UserComponent user={this.props.user} />
      </div>
    );
  }
}

export const Container = connect((state: ConnectState) => ({
  user: state.user
}))(UserContainer);
