import React from 'react'

export default function Senate() {
  return (
    <>
     <div className="container shadow bg-body rounded text-start pb-3 ps-0 pe-0" style={{"width":"90%"}}>
            <h1 className="mb-3 d-flex justify-content-center p-2 text-warning" style={{"backgroundColor":"#10477e"}}>--- Senate Meetings ---</h1>
        <br /> 
    <form className="row g-4 ps-5 pe-5 pt-3 d-flex flex-column fs-6">
        <div className="row mb-1">
            <label htmlforName="inputStudentName" className="col-sm-3 col-form-label d-flex justify-content-end">Meeting Name:</label>
            <div className="col-sm-6">
                <input type="text" className="form-control  form-control-sm" id="meetingName" placeholder="Enter Meeting Name"/>
            </div>
        </div>

        <div className="row mb-1">
            <label htmlFor="inputMobNo" className="col-sm-3 col-form-label d-flex justify-content-end">Meeting Date:</label>
            <div className="col-sm-6">
                <input type="date" className="form-control  form-control-sm" id="meetDate" placeholder="Enter Date"/>
            </div>
        </div>

        <div className="row mb-2">
            <label for="exampleFormControlTextarea1 " class="form-label col-sm-3 d-flex justify-content-end">Meeting Agenda:</label>
            <div className="col-sm-6">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
        </div>

        <div className="row mb-2">
            <label htmlforName="inputDepartment" className="col-sm-3 col-form-control d-flex justify-content-end">Committee :</label>
            <div className="col-sm-6">
            <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                <option selected>Select Committee</option>  
                <option value="1">Board of Academic Programme </option>
                <option value="2">Hostel Affairs Committee</option>
                <option value="3">Mess Affairs Committee</option>
                <option value="3">Academic Affairs Committee</option>
                <option value="3">Sports Affairs Committee</option>
                <option value="3">Technical Affairs Committee</option>
                <option value="4">Other</option>
                
            </select>
            </div>
            </div>

        

        
        

       


        <div className="d-flex justify-content-center my-3">
        <button type="button" class="btn btn-primary">Add Meeting Details</button>
    </div>

     
    </form>
    
</div>


<div className="container shadow bg-body rounded text-start pb-3 ps-0 pe-0 mt-5" style={{"width":"90%"}}>
            <h1 className="mb-3 d-flex justify-content-center p-2 text-warning" style={{"backgroundColor":"#10477e"}}>--- Archieve Meetings ---</h1>
        <br /> 
    <form className="row g-4 ps-5 pe-5 pt-3 d-flex flex-column fs-6">
        <div className="row mb-1">
            <label htmlforName="inputStudentName" className="col-sm-3 col-form-label d-flex justify-content-end">Meeting Name:</label>
            <div className="col-sm-6">
                <input type="text" className="form-control  form-control-sm" id="meetingName" placeholder="Enter Meeting"/>
            </div>
        </div>

        

        <div className="row mb-2">
            <label for="exampleFormControlTextarea1 " class="form-label col-sm-3 d-flex justify-content-end">Meeting Agenda:</label>
            <div className="col-sm-6">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
        </div>

        <div className="row mb-2">
            <label htmlforName="inputDepartment" className="col-sm-3 col-form-control d-flex justify-content-end">Committee :</label>
            <div className="col-sm-6">
            <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                <option selected>Select Committee</option>  
                <option value="1">Board of Academic Programme </option>
                <option value="2">Hostel Affairs Committee</option>
                <option value="3">Mess Affairs Committee</option>
                <option value="3">Academic Affairs Committee</option>
                <option value="3">Sports Affairs Committee</option>
                <option value="3">Technical Affairs Committee</option>
                <option value="4">Other</option>
                
            </select>
            </div>
            </div>

            <div className="row mb-1">
            <label htmlFor="inputMobNo" className="col-sm-3 col-form-label d-flex justify-content-end">Meeting Date:</label>
            <div className="col-sm-6">
                <input type="date" className="form-control  form-control-sm" id="meetDate" placeholder="Enter Date"/>
            </div>
        </div>


            <div className="d-flex justify-content-center">
                <div className="mb-4 fs-5  ps-5 pe-5" style={{"width":"70%"}}>
                    <label htmlFor="formFile" className="form-label" style={{"float":"left"}}>Meeting Minutes PDF</label>
                    <input className="form-control form-control-sm" style={{"border":"1px solid black"}} type="file" id="formFileSm"/>
                </div>
                <div className="d-flex align-items-center">
                    <button type="button" className="btn btn-primary btn-sm h-30 mx-4">View</button>
                    <button type="button" className="btn btn-secondary btn-sm h-30">Delete</button>
                </div>
            </div>

        <div className="d-flex justify-content-center my-3">
        <button type="button" class="btn btn-primary">Add to Archive</button>
    </div>

     
    </form>
    
</div>
</>



  )
}
