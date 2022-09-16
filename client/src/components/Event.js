import React from 'react'

export default function Event() {
  return (
    <div className="container shadow bg-body rounded text-start pb-3 ps-0 pe-0" style={{"width":"90%"}}>
        <h1 className="mb-3 d-flex justify-content-center p-2 text-warning" style={{"backgroundColor":"#10477e"}}>--- Event Management  ---</h1>

        <div className="ps-3 mt-5">
        <form className="row g-4 ps-5 pe-5 pt-3 d-flex flex-column fs-6">
            <div className="row mb-1">
                <label htmlforName="inputStudentName" className="col-sm-4 col-form-label d-flex justify-content-end">Event Name:</label>
                <div className="col-sm-6">
                    <input type="text" className="form-control  form-control-sm" id="eventName" placeholder="Enter Event Name"/>
                </div>
            </div>

            <div className="row mb-1">
                <label htmlFor="inputMobNo" className="col-sm-4 col-form-label d-flex justify-content-end">Event Coordinator:</label>
                <div className="col-sm-6">
                    <input type="text" className="form-control  form-control-sm" id="eventCoordinator" placeholder="Enter Event Coordinator"/>
                </div>
            </div>

            <div className="row mb-1">
                <label htmlFor="inputMobNo" className="col-sm-4 col-form-label d-flex justify-content-end">Coordinator Contact:</label>
                <div className="col-sm-6">
                    <input type="number" className="form-control  form-control-sm" id="eventCoordinatorContact" placeholder="Enter contact number"/>
                </div>
            </div>

            <div className="row mb-1">
                <label htmlFor="inputMobNo" className="col-sm-4 col-form-label d-flex justify-content-end">Event Date:</label>
                <div className="col-sm-6">
                    <input type="date" className="form-control  form-control-sm" id="eventDate" placeholder="Enter Event Date"/>
                </div>
            </div>

            <div className="row mb-1">
                <label htmlFor="inputMobNo" className="col-sm-4 col-form-label d-flex justify-content-end">Event Timings:</label>
                <div className="col-sm-6">
                    <input type="text" className="form-control  form-control-sm" id="eventTimings" placeholder="Enter Event Timings"/>
                </div>
            </div>

            <div className="row mb-1">
                <label htmlFor="inputMobNo" className="col-sm-4 col-form-label d-flex justify-content-end">Event Venue:</label>
                <div className="col-sm-6">
                    <input type="text" className="form-control  form-control-sm" id="eventVenue" placeholder="Enter Event Venue"/>
                </div>
            </div>

            <div className="row mb-2">
                <label htmlforName="inputDepartment" className="col-sm-4 col-form-control d-flex justify-content-end">Club / Organization:</label>
                <div className="col-sm-6">
                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
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
                <div className="col-sm-6">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
            </div>

            <div className="row mb-1">
                <label htmlFor="inputMobNo" className="col-sm-4 col-form-label d-flex justify-content-end">Event Budget:</label>
                <div className="col-sm-6">
                    <input type="text" className="form-control  form-control-sm" id="eventBudget" placeholder="Enter Budget Amount"/>
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
            <button type="button" class="btn btn-primary">Submit</button>
        </div>
        </div>
        
    </div>
  )
}
