import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Event() {

    const history = useNavigate();
    const [event, setevent] = useState({
        event_name:"",
        event_coordinator:"",
        mob_number:"",
        date:"",
        event_time:"",
        event_venue:"",
        club:"",
        event_details:"",
        event_budget:""
      });
    
      let name, value;
      const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
    
        setevent({ ...event, [name]: value });
      };
      const PostData = async (e) => {
        e.preventDefault();
        const {event_name,event_coordinator,mob_number,date,event_time,event_venue,club,event_details,event_budget } = event;
    
        const res = await fetch("/classroom", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            event_name,
            event_coordinator,
            mob_number,
            date,
            event_time,
            event_venue,
            club,
            event_details,
            event_budget
          }),
        });
    
        const data = await res.json();
        if (data.status === 422 || !data) {
          window.alert("Plz fill the form properly");
          console.log("Plz fill the form properly");
        } else {
          window.alert("Form submitted successfully ");
          console.log("Form submitted properlly");
    
          history.push("/event");
        }
      };



  return (
    <div className="container shadow bg-body rounded text-start pb-3 ps-0 pe-0" style={{"width":"90%"}}>
        <h1 className="mb-3 d-flex justify-content-center p-2 text-warning" style={{"backgroundColor":"#10477e"}}>--- Event Management  ---</h1>

        <div className="ps-3 mt-5">
        <form className="row g-4 ps-5 pe-5 pt-3 d-flex flex-column fs-6">
            <div className="row mb-1">
                <label htmlforName="inputStudentName" className="col-sm-4 col-form-label d-flex justify-content-end">Event Name:</label>
                <div className="col-sm-6">
                    <input type="text" className="form-control  form-control-sm" id="eventName" placeholder="Enter Event Name"
                    value={event.event_name}
                    onChange={handleInputs}
                    />
                </div>
            </div>

            <div className="row mb-1">
                <label htmlFor="inputMobNo" className="col-sm-4 col-form-label d-flex justify-content-end">Event Coordinator:</label>
                <div className="col-sm-6">
                    <input type="text" className="form-control  form-control-sm" id="eventCoordinator" placeholder="Enter Event Coordinator"
                    value={event.event_coordinator}
                    onChange={handleInputs}
                    />
                </div>
            </div>

            <div className="row mb-1">
                <label htmlFor="inputMobNo" className="col-sm-4 col-form-label d-flex justify-content-end">Coordinator Contact:</label>
                <div className="col-sm-6">
                    <input type="number" className="form-control  form-control-sm" id="eventCoordinatorContact" placeholder="Enter contact number"
                    value={event.mob_number}
                    onChange={handleInputs}
                    />
                </div>
            </div>

            <div className="row mb-1">
                <label htmlFor="inputMobNo" className="col-sm-4 col-form-label d-flex justify-content-end">Event Date:</label>
                <div className="col-sm-6">
                    <input type="date" className="form-control  form-control-sm" id="eventDate" placeholder="Enter Event Date"
                    value={event.date}
                    onChange={handleInputs}
                    />
                </div>
            </div>

            <div className="row mb-1">
                <label htmlFor="inputMobNo" className="col-sm-4 col-form-label d-flex justify-content-end">Event Timings:</label>
                <div className="col-sm-6">
                    <input type="text" className="form-control  form-control-sm" id="eventTimings" placeholder="Enter Event Timings"
                    value={event.event_time}
                    onChange={handleInputs}
                    />
                </div>
            </div>

            <div className="row mb-1">
                <label htmlFor="inputMobNo" className="col-sm-4 col-form-label d-flex justify-content-end">Event Venue:</label>
                <div className="col-sm-6">
                    <input type="text" className="form-control  form-control-sm" id="eventVenue" placeholder="Enter Event Venue"
                    value={event.event_venue}
                    onChange={handleInputs}
                    />
                </div>
            </div>

            <div className="row mb-2">
                <label htmlforName="inputDepartment" className="col-sm-4 col-form-control d-flex justify-content-end">Club / Organization:</label>
                <div className="col-sm-6">
                <select className="form-select form-select-sm" aria-label=".form-select-sm example"
                value={event.club}
                onChange={handleInputs}
                >
                    <option selected>Select Club</option>  
                    <option value="1">Digital Wizards</option>
                    <option value="2">Techmaniacs</option>
                    <option value="3">Idea Square</option>
                    <option value="4">Artista</option>
                    <option value="5">Gagan-Vedhi</option>
                    <option value="6">Quiz Club</option>
                    <option value="7">Other</option>
                </select>
                </div>
            </div>
            <div className="row mb-2">
                <label for="exampleFormControlTextarea1 " class="form-label col-sm-4 d-flex justify-content-end">Event Details:</label>
                <div className="col-sm-6"
                value={event.event_details}
                onChange={handleInputs}
                >
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
            </div>

            <div className="row mb-1">
                <label htmlFor="inputMobNo" className="col-sm-4 col-form-label d-flex justify-content-end">Event Budget:</label>
                <div className="col-sm-6">
                    <input type="text" className="form-control  form-control-sm" id="eventBudget" placeholder="Enter Budget Amount"
                    value={event.event_budget}
                    onChange={handleInputs}
                    />
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <div className="mb-4 fs-5  ps-5 pe-5" style={{"width":"80%"}}>
                    <label htmlFor="formFile" className="form-label" style={{"float":"left"}}>Budget Detail PDF</label>
                    <input className="form-control form-control-sm" style={{"border":"1px solid black"}} type="file" id="formFileSm"/>
                </div>
                <div className="d-flex align-items-center">
                    <button type="button" className="btn btn-primary btn-sm h-30 mx-4">View</button>
                    <button type="button" className="btn btn-secondary btn-sm h-30">Delete</button>
                </div>
            </div>
        </form>
        <div className="d-flex justify-content-center my-3">
            <button type="button" class="btn btn-primary"
            onClick={PostData}
            >Submit</button>
        </div>
        </div>
        
    </div>
  )
}
