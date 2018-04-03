import React from "react";

import logo from "images/devoteam-white.png";

import Toolbar from "material-ui/Toolbar";
import Card from "material-ui/Card";
import AppBar from "material-ui/AppBar";

import CardExpander from "./CardExpander";
import CardContainer from "./CardContainer";
import Typography from "./StyledTypography";
import ChangeUser from "./ChangeUser";

const Layout = props => {
  const { children, user, toggleMenu } = props;
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            <a href="https://lu.devoteam.com/" target="_blank">
              <img src={logo} width="38px" />
            </a>
          </Typography>
          <Typography variant="title" color="inherit" flex={true}>
            <strong>Hyperledger + React</strong>
          </Typography>
          <Typography color="inherit">
            <a
              href="https://github.com/Devoteam-LU/learn-blockchain"
              target="_blank"
            >
              <strong>Learn Blockchain</strong>
            </a>
          </Typography>
          <Typography color="inherit">
            <a href="https://github.com/Devoteam-LU" target="_blank">
              <strong>Github</strong>
            </a>
          </Typography>
          <Typography color="inherit">
            <ChangeUser
              onClick={e =>
                toggleMenu(e.currentTarget, [
                  { label: "Agent", onClick: () => alert("lol") },
                  { label: "Operator", onClick: () => alert("lol") }
                ])
              }
            >
              <strong>
                {user ? user.charAt(0).toUpperCase() + user.slice(1) : null}
              </strong>
            </ChangeUser>
          </Typography>
        </Toolbar>
      </AppBar>
      <CardContainer>
        <Card>
          <CardExpander>{children}</CardExpander>
        </Card>
      </CardContainer>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" flex={true} />
          <Typography color="inherit">
            <a href="https://lu.devoteam.com" target="_blank">
              <strong>© Devoteam </strong>2018
            </a>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Layout;
