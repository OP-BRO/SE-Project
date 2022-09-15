import React from "react";
import Address from "./Profile/Address";
import Admission from "./Profile/Admission";
import Documents from "./Profile/Documents";
import General from "./Profile/General";
import MenuBar from "./Profile/MenuBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Profile() {
  return (
    // <Router>
    <div>
      {/* <Router>
          <h1 className="my-1 mb-3">--- My Profile ---</h1>
          <div className="container p-0 shadow bg-body rounded" style={{"width":"70%"}}>
            <MenuBar/>
            <Routes>
              <Route exact path="/" element={<General/>}/>
              <Route exact path="/general" element={<General/>}/>
              <Route exact path="/admisson" element={<Admission/>}/>
              <Route exact path="/address" element={<Address/>}/>
              <Route exact path="/documents" element={<Documents/>}/>
            </Routes>
          </div>
          <br />
          <br />
        </Router> */}
    </div>
  );
}
