import React, { useState } from "react";
import Feedback from "./Feedback";
import Homepage from "./Homepage";
import Convocation from "./Convocation";
import Alumni from "./Alumni";
import Classroom from "./Classroom";
import Event from "./Event";
import Bap from "./Bap";
import Senate from "./Senate";
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
import Scholarship from "./Scholarship";

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
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button fs-5 text-start ps-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Profile
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <ul className="list-group">
                      <li className="list-group-item" aria-current="true">
                        <Link to="/general">
                          General
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="/admisson">
                          Admission Detail
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
                </div>
              </div>
            </div>
              {/* <Link className="link-dark text-decoration-none" to="/">
                <div className="fs-5 text-start ps-3">Profile</div>
              </Link> */}
            {/* <ul className="list-group">
              <li className="list-group-item" aria-current="true">
                <Link to="/general">
                  General
                </Link>
              </li>
              <li className="list-group-item">
                <Link to="/admisson">
                  Admission Detail
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
            </ul> */}
          </div>
          <div className="mt-3">
            <a className="link-dark text-decoration-none" href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=64638" target="_blank">
              <div className="fs-5 text-start ps-3">Fees</div>
            </a>
          </div>
          <hr />
          <div className="mt-3">
            <Link className="link-dark text-decoration-none" to="/timetable">
              <div className="fs-5 text-start ps-3">Timetable</div>
            </Link>
          </div>
          <hr />
          <div className="mt-3">
            <Link className="link-dark text-decoration-none" to="/grivance">
              <div className="fs-5 text-start ps-3">Grivance</div>
            </Link>
          </div>
          <hr />
          <div className="mt-3">
            <Link className="link-dark text-decoration-none" to="/feedback">
              <div className="fs-5 text-start ps-3">Feedback</div>
            </Link>
          </div>
          <hr />
          <div className="mt-3">
            <Link className="link-dark text-decoration-none" to="/admissions">
              <div className="fs-5 text-start ps-3">Admissions</div>
            </Link>
          </div>
          <hr />
          <div className="mt-3">
            <Link className="link-dark text-decoration-none" to="/scholarship">
              <div className="fs-5 text-start ps-3">Scholarship</div>
            </Link>
          </div>
          <hr />
          <div className="mt-3">
            <Link className="link-dark text-decoration-none" to="/resultmanage">
              <div className="fs-5 text-start ps-3">Result Management</div>
            </Link>
          </div>
          <hr />
          <div className="mt-3">
            <Link className="link-dark text-decoration-none" to="/convocation">
              <div className="fs-5 text-start ps-3">Convocation</div>
            </Link>
          </div>
          <hr />
          <div className="mt-3">
            <Link className="link-dark text-decoration-none" to="/bap">
              <div className="fs-5 text-start ps-3">BAP</div>
            </Link>
          </div>
          <hr />
          <div className="mt-3">
            <Link className="link-dark text-decoration-none" to="/senate">
              <div className="fs-5 text-start ps-3">Senate</div>
            </Link>
          </div>
          <hr />
          <div className="mt-3">
            <Link className="link-dark text-decoration-none" to="/alumni">
              <div className="fs-5 text-start ps-3">Alumni</div>
            </Link>
          </div>
          <hr />
          <div className="mt-3">
            <Link className="link-dark text-decoration-none" to="/event">
              <div className="fs-5 text-start ps-3">Event Management</div>
            </Link>
          </div>
          <hr />
          <div className="mt-3">
            <Link className="link-dark text-decoration-none" to="/classroom">
              <div className="fs-5 text-start ps-3">Classroom Management</div>
            </Link>
          </div>
          <hr />
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
            <Route exact path="/alumni" element={<Alumni />}/>
            <Route exact path="/event" element={<Event />}/>
            <Route exact path="/classroom" element={<Classroom />}/>
            <Route exact path="/scholarship" element={<Scholarship />}/>
            <Route exact path="/bap" element={<Bap />}/>
            <Route exact path="/senate" element={<Senate />}/>
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
