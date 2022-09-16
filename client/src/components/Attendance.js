import React from 'react'

export default function Attendance() {
  return (
    <>
        <div>
            <div>
                <div className="container ps-5 pt-2 shadow bg-body rounded text-start pb-3" style={{"width":"70%"}}>
                    <h1 className="mb-3 d-flex justify-content-center">--- Mark Attendance ---</h1> <hr /> 
                    <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-6 m-auto">
                            <table className="table border">
                                <thead>
                                    <tr>
                                        <th scope="col">S.No</th>
                                        <th scope="col">Subject Code</th>
                                        <th scope="col">Subject Name</th>
                                        <th scope="col">Maximum Hours</th>
                                        <th scope="col">Present Hours</th>
                                        <th scope="col">Absent Hours</th>
                                        <th scope="col">Attendence</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                        <tr>
                                        <th scope="row">1</th>
                                        <td>CS2001</td>
                                        <td>DAA</td>
                                        <td>50</td>
                                        <td>45</td>
                                        <td>5</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                      </tr>
                                      <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                      </tr>
                                      <tr>
                                        <th scope="row">4</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                      </tr>
                                      <tr>
                                        <th scope="row">5</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                      </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}
