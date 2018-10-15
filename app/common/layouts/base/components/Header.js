import React from "react";
import { Link } from '../../../../routes'

export class Header extends React.Component {
  render() {
    return (
      <header className="navbar navbar-default">
        <nav className="container">
          <div className="d-flex justify-content-between hidden-lg-up">
            <Link route="/">
              <a className="navbar-brand">
                Redux Example - Hacker News
              </a>
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}
