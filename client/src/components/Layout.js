import React, { useState } from "react";
import Feedback from "./Feedback";
import Homepage from "./Homepage";
import Convocation from "./Convocation";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  CssBaseline,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import classNames from "classnames";
import Timetable from "./Timetable";
import Grivance from "./Grivance";
import Admissons from "./Admissons";
import ResultManagement from "./ResultManagement";
import AdminDashboard from "./Results/AdminDashboard";
import { BrowserRouter, Link, Switch } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import General from "./Profile/General";
import Admission from "./Profile/Admission";
import Address from "./Profile/Address";
import Documents from "./Profile/Documents";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: "auto",
  },
  drawer: {
    width: drawerWidth,
  },
  content: {
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
}));

const SimpleDrawer = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <div>
    <Router>
      <CssBaseline />
      <Drawer open={open} onClose={() => setOpen(false)} variant="persistent">
        <List disablePadding className={classes.drawer}>
          <div className="mt-2">
              <Link className="link-dark text-decoration-none" to="/">
                <h5>Profile</h5>
              </Link>
            <ul className="list-group">
              <li className="list-group-item" aria-current="true">
                <Link to="/general">
                  General
                </Link>
              </li>
              <li className="list-group-item">
                <Link to="/admisson">
                  Admission
                </Link>
              </li>
              <li className="list-group-item">
                <Link to="/address">
                  Address
                </Link>
              </li>
              <li className="list-group-item">
                <Link to="/documents">
                  Documents
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-3">
            <a className="link-dark text-decoration-none" href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=64638" target="_blank">
              <h5>Fees</h5>
            </a>
          </div>
          <div className="mt-3">
            <Link className="link-dark text-decoration-none" to="/timetable">
              <h5>Timetable</h5>
            </Link>
          </div>
          <div className="mt-3">
            <Link className="link-dark text-decoration-none" to="/grivance">
              <h5>Grivance</h5>
            </Link>
          </div>
          <div className="mt-3">
            <Link className="link-dark text-decoration-none" to="/feedback">
              <h5>Feedback</h5>
            </Link>
          </div>
          <div className="mt-3">
            <Link className="link-dark text-decoration-none" to="/resultmanage">
              <h5>Result Management</h5>
            </Link>
          </div>
          <div className="mt-3">
            <Link className="link-dark text-decoration-none" to="/convocation">
              <h5>Convocation</h5>
            </Link>
          </div>
        </List>
      </Drawer>
      <AppBar
        position="static"
        color="secondary"
        className={classNames(classes.appBar, { [classes.appBarShift]: open })}
      >
        <Toolbar className="bg-dark">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={() => setOpen(!open)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            ACADEMICS
          </Typography>
        </Toolbar>
      </AppBar>
      <main
        className={classNames(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className="container border-1 w-75 border-dark">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/general" element={<General />} />
            <Route exact path="/admisson" element={<Admission/>}/>
            <Route exact path="/address" element={<Address/>}/>
            <Route exact path="/documents" element={<Documents/>}/>
            <Route exact path="/timetable" element={<Timetable />}/>
            <Route exact path="/grivance" element={<Grivance />}/>
            <Route exact path="/feedback" element={<Feedback />}/>
            <Route exact path="/admissions" element={<Admissons />}/>
            <Route exact path="/resultmanage" element={<ResultManagement />}/>
            <Route exact path="/convocation" element={<Convocation />}/>
          </Routes>
        </div>
        <br />
        <br />
      </main>
    </Router>
    </div>
  );
};

export default SimpleDrawer;
