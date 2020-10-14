import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import MyMenu from './MyMenu';
// import {MyAppsContext} from './Store'
// import Testapi from './testapi'
import Loginorlogout from "./loginorlogout";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <MyMenu />
          <Typography variant="h6" className={classes.title}>
            {/* <Testapi /> */}
            My Tugasan App
          </Typography>
          <Loginorlogout />
        </Toolbar>
      </AppBar>
    </div>
  );
}
