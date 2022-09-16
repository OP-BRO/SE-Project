import React from 'react'

export default function Alumni() {
  return (
    <>
     <div className="container shadow bg-body rounded text-start pb-3 ps-0 pe-0" style={{"width":"90%"}}>
    <h1 className="mb-3 d-flex justify-content-center p-2 text-warning" style={{"backgroundColor":"#10477e"}}>--- Alumni Management  ---</h1>
    <form className="row g-4 ps-5 pe-5 pt-3 d-flex flex-column fs-6">
        <div className="row mb-1">
            <label htmlforName="inputStudentName" className="col-sm-3 col-form-label d-flex justify-content-end">Alumni Name:</label>
            <div className="col-sm-6">
                <input type="text" className="form-control  form-control-sm" id="alumniName" placeholder="Enter Name"/>
            </div>
        </div>

        <div className="row mb-1">
            <label htmlFor="inputMobNo" className="col-sm-3 col-form-label d-flex justify-content-end">Alumni Email:</label>
            <div className="col-sm-6">
                <input type="email" className="form-control  form-control-sm" id="alumniEmail" placeholder="Enter Email"/>
            </div>
        </div>

        <div className="row mb-2">
            <label for="exampleFormControlTextarea1 " class="form-label col-sm-3 d-flex justify-content-end">Alumni Details:</label>
            <div className="col-sm-6">
                <textarea class="form-control" id="alumniDetails" rows="8"></textarea>
            </div>
        </div>

        <div className="row mb-1">
            <label htmlFor="inputMobNo" className="col-sm-3 col-form-label d-flex justify-content-end">Alumni Course:</label>
            <div className="col-sm-6">
                <input type="text" className="form-control  form-control-sm" id="alumniCourse" placeholder="Enter Course "/>
            </div>
        </div>

        <div className="row mb-1">
            <label htmlFor="inputMobNo" className="col-sm-3 col-form-label d-flex justify-content-end">Alumni Branch:</label>
            <div className="col-sm-6">
                <input type="text" className="form-control  form-control-sm" id="branch" placeholder="Enter Branch"/>
            </div>
        </div>

        <div className="row mb-1">
            <label htmlFor="inputMobNo" className="col-sm-3 col-form-label d-flex justify-content-end">Graduation Year:</label>
            <div className="col-sm-6">
                <input type="date" className="form-control  form-control-sm" id="graduationYear" placeholder="Enter Graduation Year"/>
            </div>
        </div>


        <div className="d-flex justify-content-center my-3">
        <button type="button" class="btn btn-primary">Add Alumni</button>
    </div>

    </form>
    
</div>


<div className="container shadow bg-body rounded text-start pb-3 ps-0 pe-0 mt-5" style={{"width":"90%"}}>
    <h1 className="mb-3 d-flex justify-content-center p-2 text-warning" style={{"backgroundColor":"#10477e"}}>--- Inviting for Events  ---</h1>
    <form className="row g-4 ps-5 pe-5 pt-3 d-flex flex-column fs-6 mt-3">
        <div className="row mb-1">
            <label htmlforName="inputStudentName" className="col-sm-3 col-form-label d-flex justify-content-end">Alumni Name:</label>
            <div className="col-sm-6">
                <input type="text" className="form-control  form-control-sm" id="alumniName" placeholder="Enter Name"/>
            </div>
        </div>

        <div className="row mb-1">
            <label htmlFor="inputMobNo" className="col-sm-3 col-form-label d-flex justify-content-end">Alumni Email:</label>
            <div className="col-sm-6">
                <input type="email" className="form-control  form-control-sm" id="alumniEmail" placeholder="Enter Email"/>
            </div>
        </div>

        <div className="row mb-2">
            <label for="exampleFormControlTextarea1 " class="form-label col-sm-3 d-flex justify-content-end">Event Details:</label>
            <div className="col-sm-6">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
        </div>

        <div className="row mb-2">
            <label htmlforName="inputDepartment" className="col-sm-3 col-form-control d-flex justify-content-end">Event Type:</label>
            <div className="col-sm-6">
            <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                <option selected>Select Event</option>  
                <option value="1">Orientation Programmes</option>
                <option value="2">Study Abroad Programmes</option>
                <option value="3">Career Mentoring Session</option>
                <option value="4">Other</option>
                
            </select>
            </div>
            </div>

        <div className="d-flex justify-content-center my-3">
        <button type="button" class="btn btn-primary">Send Invitation</button>
    </div>
    </form>
</div>
</>



  )
}
