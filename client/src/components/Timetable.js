import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function () {

  return (
    <div>
        <div className="container shadow bg-body rounded text-start pb-3 ps-0 pe-0" style={{"width":"90%"}}>
            <h1 className="d-flex justify-content-center p-2 text-warning" style={{"backgroundColor":"#10477e"}}>--- Timetable  ---</h1>
            <div className="rounded ps-5 pe-5 pt-3">
                <div className="p-2 fs-6 text-start">
                    As per the IIT Tirupati Academic Curriculum, the course list is fixed every Semester. The time-table is based on fixed time slots for each of the courses during the week. This decides the faculty lecture schedule.
                </div>
                <div className="container">
                    <div className="accordion" id="accordionSection"> 
                        <div className="accordion-item mb-4 border rounded">
                            <h2 className="accordion-header">
                                <button type="button" className="accordion-button collapsed fs-3" data-bs-toggle="collapse" data-bs-target="#collapse1">July - December 2022</button></h2>
                            <div className="accordion-collapse collapse" id="collapse1" data-bs-parent="#accordionSection">
                                <div className="accordion-body d-flex flex-column"><br />
                                    <div className="fs-4 ps-3 fw-bold d-flex justify-content-start">Second Year</div>
                                    <div className="ps-4">
                                        <div className="fs-5 d-flex justify-content-start"><a href="/pdf/test.pdf" className="text-decoration-none" download><ArrowRightIcon/>Computer Science and Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none" ><ArrowRightIcon/>Electrical Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Civil Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Chemical Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Mechanical Engineering</a></div>
                                    </div>
                                    <br />
                                    <div className="fs-4 ps-3 fw-bold d-flex justify-content-start">Third Year</div>
                                    <div className="ps-4">
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Computer Science and Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Electrical Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Civil Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Chemical Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Mechanical Engineering</a></div>
                                    </div>
                                    <br />
                                    <div className="fs-4 ps-3 fw-bold d-flex justify-content-start">Fourth Year</div>
                                    <div className="ps-4">
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Computer Science and Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Electrical Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Civil Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Chemical Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Mechanical Engineering</a></div>
                                    </div>
                                    <br />
                                    <div className="fs-4 ps-3 fw-bold d-flex justify-content-start">Elective</div>
                                    <div className="ps-4">
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Humanities and Social Science</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Mathematics and Statistics</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Physics</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item mb-4 border rounded">
                            <h2 className="accordion-header">
                                <button type="button" className="accordion-button collapsed fs-3" data-bs-toggle="collapse" data-bs-target="#collapse2">January - June 2022</button></h2>
                            <div className="accordion-collapse collapse" id="collapse2" data-bs-parent="#accordionSection">
                                <div className="accordion-body">
                                <div className="fs-4 ps-3 fw-bold d-flex justify-content-start">Second Year</div>
                                    <div className="ps-4">
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Computer Science and Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Electrical Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Civil Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Chemical Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Mechanical Engineering</a></div>
                                    </div>
                                    <br />
                                    <div className="fs-4 ps-3 fw-bold d-flex justify-content-start">Third Year</div>
                                    <div className="ps-4">
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Computer Science and Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Electrical Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Civil Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Chemical Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Mechanical Engineering</a></div>
                                    </div>
                                    <br />
                                    <div className="fs-4 ps-3 fw-bold d-flex justify-content-start">Fourth Year</div>
                                    <div className="ps-4">
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Computer Science and Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Electrical Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Civil Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Chemical Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Mechanical Engineering</a></div>
                                    </div>
                                    <br />
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item mb-4 border rounded">
                            <h2 className="accordion-header">
                                <button type="button" className="accordion-button collapsed fs-3" data-bs-toggle="collapse" data-bs-target="#collapse3">First Year 2021 Batch</button></h2>
                            <div className="accordion-collapse collapse" id="collapse3" data-bs-parent="#accordionSection">
                                <div className="accordion-body">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item mb-4 border rounded">
                            <h2 className="accordion-header">
                                <button type="button" className="accordion-button collapsed fs-3" data-bs-toggle="collapse" data-bs-target="#collapse4">July - December 2021</button></h2>
                            <div className="accordion-collapse collapse" id="collapse4" data-bs-parent="#accordionSection">
                                <div className="accordion-body">
                                <div className="fs-4 ps-3 fw-bold d-flex justify-content-start">Second Year</div>
                                    <div className="ps-4">
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Computer Science and Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Electrical Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Civil Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Chemical Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Mechanical Engineering</a></div>
                                    </div>
                                    <br />
                                    <div className="fs-4 ps-3 fw-bold d-flex justify-content-start">Third Year</div>
                                    <div className="ps-4">
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Computer Science and Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Electrical Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Civil Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Chemical Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Mechanical Engineering</a></div>
                                    </div>
                                    <br />
                                    <div className="fs-4 ps-3 fw-bold d-flex justify-content-start">Fourth Year</div>
                                    <div className="ps-4">
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Computer Science and Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Electrical Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Civil Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Chemical Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Mechanical Engineering</a></div>
                                    </div>
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-4 border rounded">
                            <h2 className="accordion-header">
                                <button type="button" className="accordion-button collapsed fs-3" data-bs-toggle="collapse" data-bs-target="#collapse5">January - June 2021</button></h2>
                            <div className="accordion-collapse collapse" id="collapse5" data-bs-parent="#accordionSection">
                                <div className="accordion-body">
                                <div className="fs-4 ps-3 fw-bold d-flex justify-content-start">Second Year</div>
                                    <div className="ps-4">
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Computer Science and Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Electrical Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Civil Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Chemical Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Mechanical Engineering</a></div>
                                    </div>
                                    <br />
                                    <div className="fs-4 ps-3 fw-bold d-flex justify-content-start">Third Year</div>
                                    <div className="ps-4">
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Computer Science and Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Electrical Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Civil Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Chemical Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Mechanical Engineering</a></div>
                                    </div>
                                    <br />
                                    <div className="fs-4 ps-3 fw-bold d-flex justify-content-start">Fourth Year</div>
                                    <div className="ps-4">
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Computer Science and Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Electrical Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Civil Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Chemical Engineering</a></div>
                                        <div className="fs-5 d-flex justify-content-start"><a href="" className="text-decoration-none"><ArrowRightIcon/>Mechanical Engineering</a></div>
                                    </div>
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-4 border rounded">
                            <h2 className="accordion-header">
                                <button type="button" className="accordion-button collapsed fs-3" data-bs-toggle="collapse" data-bs-target="#collapse6">First Year 2020 Batch</button></h2>
                            <div className="accordion-collapse collapse" id="collapse6" data-bs-parent="#accordionSection">
                                <div className="accordion-body">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
