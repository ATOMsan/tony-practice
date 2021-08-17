import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuIcon,
  Typography,
  Container,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Router from "../router/Router";

const MainLayout = () => (
  <div className={"root"}>
    <AppBar position="fixed">
      <Toolbar>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/catalog">Catalog</Link>
            </li>
            <li>
              <Link to="/coin">Coin</Link>
            </li>
          </ul>
        </nav>
      </Toolbar>
    </AppBar>
    <Container style={{paddingTop: 80}}>
      <Router />
    </Container>
  </div>
);

export default MainLayout;
