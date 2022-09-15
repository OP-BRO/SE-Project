import React from 'react'

export default function Homepage() {
  return (
    <>
    <div>
        <div className="card container" style={{"width":"28rem","height":"80vh"}}>
            <div className="fs-4">Hello <b>Harsh Asati</b> </div>
            <img src="/images/WebMonsterlogo.png" className="card-img-top rounded-circle py-2 px-5 w-75 m-auto" alt="..."/>
            <div className="card-body d-flex flex-column fs-6">
                <div className="d-flex mb-1">
                    <div className="d-flex justify-content-end" style={{"width":"30%"}}>Roll Number : </div>
                    <div> &nbsp; CS20B003</div>
                </div>
                <div className="d-flex mb-1">
                    <div className="d-flex justify-content-end" style={{"width":"31%"}}>Date of Joining : </div>
                    <div> &nbsp; 16-11-2020</div>
                </div>
                <div className="d-flex mb-1">
                    <div className="d-flex justify-content-end" style={{"width":"30%"}}>Department : </div>
                    <div> &nbsp; Computer Science and Engineering</div>
                </div>
                <div className="d-flex mb-1">
                    <div className="d-flex justify-content-end" style={{"width":"30%"}}>Designation : </div>
                    <div> &nbsp; Student</div>
                </div>
                <div className="d-flex mb-1">
                    <div className="d-flex justify-content-end" style={{"width":"30%"}}>Mobile No : </div>
                    <div> &nbsp; 9595329374</div>
                </div>
                <div className="d-flex mb-1">
                    <div className="d-flex justify-content-end" style={{"width":"30%"}}>Email : </div>
                    <div> &nbsp; cs20b003@iittp.ac.in</div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

