import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";

import { Link } from "react-router-dom";
import { P, ButtonCustom } from "./MasterCommon.js";
// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class DesktopContainerMenu extends Component {
  state = {
    active: "/"
  };

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment inverted textAlign="center" vertical>
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <img src={require("../logo.png")} height="100px" />
              <Container style={{ textAlign: "right" }}>
                <Menu.Item as="a" active={this.state.active == "/"}>
                  <Link
                    onClick={() => {
                      this.setState({ active: "/" });
                    }}
                    to="/"
                  >
                    <P title="here we are" color="black" fontSize="14px" />
                  </Link>
                </Menu.Item>
                <Menu.Item
                  active={this.state.active == "about"}
                  as="about"
                  to
                  active={this.state.active == "about"}
                >
                  <Link
                    onClick={() => {
                      this.setState({ active: "about" });
                    }}
                    as="about"
                    to="/about"
                  >
                    <p className=" black-text"> About</p>
                  </Link>
                </Menu.Item>
                <Menu.Item as="users" active={this.state.active == "users"}>
                  <Link
                    onClick={() => {
                      this.setState({ active: "users" });
                    }}
                    as="users"
                    to="/users"
                  >
                    <p className=" black-text"> Users</p>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    onClick={() => {
                      this.setState({ active: "users" });
                    }}
                    as="users"
                    to="/users"
                  >
                    <Button as="a">Log in</Button>
                  </Link>
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>

        {children}
      </>
    );
  }
}

class MobileContainerMenu extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <>
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a" active>
            Home
          </Menu.Item>
          <Menu.Item as="a">Work</Menu.Item>
          <Menu.Item as="a">Company</Menu.Item>
          <Menu.Item as="a">Careers</Menu.Item>
          <Menu.Item as="a">Log in</Menu.Item>
          <Menu.Item as="a">Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 350, padding: "1em 0em" }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted>
                    Log in
                  </Button>
                  <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>

          {children}
        </Sidebar.Pusher>
      </>
    );
  }
}

export { MobileContainerMenu, DesktopContainerMenu };
