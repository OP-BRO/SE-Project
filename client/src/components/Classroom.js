import React from 'react'

export default function Event() {
  return (
    <div className="container shadow bg-body rounded text-start pb-3 ps-0 pe-0" >
        <h1 className="mb-3 d-flex justify-content-center p-2 text-warning" style={{"backgroundColor":"#10477e"}}>--- Classroom Management---</h1>
            <br /> 
        <form className="row g-4 ps-5 pe-5 pt-3 d-flex flex-column fs-6">
            <div className="row mb-2">
                <label htmlforName="inputDepartment" className="col-sm-3 col-form-control d-flex justify-content-end">Course :</label>
                <div className="col-sm-6">
                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option selected>Select course</option>  
                    <option value="1">CS304L</option>
                    <option value="2">CS301L</option>
                    <option value="3">CS302L</option>
                    <option value="4">CS305L</option>
                    <option value="5">CS303L</option>
                    <option value="6">CS301P</option>
                    <option value="7">CS305P</option>
                    <option value="8">Other</option>
                </select>
                </div>
            </div>
            <div className="row mb-1">
            <label htmlforName="inputStudentName" className="col-sm-3 col-form-label d-flex justify-content-end">Date:</label>
            <div className="col-sm-6">
                <input type="date" className="form-control  form-control-sm" id="dateName" placeholder="Enter Date"/>
            </div>
        </div>


            <div className="row mb-2">
                <label htmlforName="inputDepartment" className="col-sm-3 col-form-control d-flex justify-content-end">Slot :</label>
                <div className="col-sm-6">
                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option selected>Select slot</option>  
                    <option value="1">8-9</option>
                    <option value="2">9-10</option>
                    <option value="3">10-11</option>
                    <option value="4">11-12</option>
                    <option value="5">12-1</option>
                    <option value="6">1-2</option>
                    <option value="7">2-3</option>
                    <option value="8">3-4</option>
                </select>
                </div>
            </div>
            
            <div className="row mb-2">
                <label htmlforName="inputDepartment" className="col-sm-3 col-form-control d-flex justify-content-end">Classroom</label>
                <div className="col-sm-6">
                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option selected>Select Classroom</option>  
                    <option value="1">TC-1</option>
                    <option value="2">TC-2</option>
                    <option value="3">TC-3</option>
                    <option value="4">TC-4</option>
                    <option value="5">TC-5</option>
                    <option value="6">TC-6</option>
                    <option value="7">TC-7</option>
                    <option value="8">TC-8</option>
                    <option value="9">DB2-CR8</option>
                    <option value="10">DB2-CR9</option>
                    <option value="11">DB2-CR10</option>
                    
                </select>
                </div>
            </div>
        </form>
        <div className="d-flex justify-content-center my-3">
            <button type="button" class="btn btn-primary">Submit</button>
        </div>
    </div>
  )
}
