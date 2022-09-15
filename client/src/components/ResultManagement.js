import React from 'react'

export default function ResultManagement() {
  return (
    <div className="container shadow bg-body rounded text-start pb-3 ps-0 pe-0" style={{"width":"90%"}}>
            <h1 className="mb-3 d-flex justify-content-center p-2 text-warning" style={{"backgroundColor":"#10477e"}}>--- Result Management  ---</h1> 
        <div className="container mt-5 mb-5 d-flex justify-content-lg-around">
            <div className="card" style={{"width":"45%"}}>
                <h5 className="card-header">For Students</h5>
                <div className="card-body">
                    <div className="row mb-2">
                        <label htmlhtmlFor="inputDepartment" className="col-sm-4 col-form-control d-flex justify-content-end">Department:</label>
                        <div className="col-sm-8">
                        <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>Select Department</option>  
                            <option value="1">Computer Science and Engineering</option>
                            <option value="2">Electrical Engineering</option>
                            <option value="3">Mechanical Engineering</option>
                            <option value="4">Civil Engineering</option>
                            <option value="5">Mechanical Engineering</option>
                        </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlhtmlFor="inputDepartment" className="col-sm-4 col-form-control d-flex justify-content-end">Semester:</label>
                        <div className="col-sm-8">
                        <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>Select Semester</option>  
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
                        </div>
                    </div>
                    <a href="#" className="btn btn-primary">View Result</a>
                </div>
            </div>

            <div className="card" style={{"width":"45%"}}>
                <h5 className="card-header">Admin Login</h5>
                <div className="card-body">
                    <form>
                        <div className="row">
                            <label htmlFor="inputuser" className="form-label col-sm-4" >Username:</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control form-select-sm" placeholder="Username" id="inputuser"/>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <label htmlFor="inputPassword4" className="form-label col-sm-4" >Password:</label>
                            <div className="col-sm-8">
                                <input type="password" className="form-control form-select-sm col-sm-8" placeholder="Password" id="inputPassword4"/>
                            </div>
                        </div>
                    </form>
                    <a href="#" className="btn btn-primary mt-3 px-4">Login</a>
                </div>
            </div>
        </div>
    </div>
  )
}
