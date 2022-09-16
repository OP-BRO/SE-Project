import React from 'react'

export default function Grivance() {
  return (
    <div>
        <div className="container shadow bg-body rounded text-start pb-3 ps-0 pe-0" style={{"width":"90%"}}>
            <h1 className="mb-3 d-flex justify-content-center p-2 text-warning" style={{"backgroundColor":"#10477e"}}>--- Students' Grievance Cell ---</h1>
            <div className="ps-3">
            <div className="fs-6">
                <h4 className="d-flex justify-content-start">Introduction</h4>
                <p>The Student’s Grievance Cell desires to promote and maintain a conducive and unprejudiced educational environment. The objectives of Students Grievance Cell include the following: <br/>
                <ol type='1'>
                    <li>To support, those students who have been deprived of the services offered by the College, for which he/she is entitled.</li>
                    <li>To make officials of the College responsive, accountable and courteous in dealing with the students.</li>
                    <li>To ensure effective solution to the student’s grievances with an impartial and fair approach.</li>
                </ol></p>
                <p>The Cell enables a student to express feelings by initiating and pursuing the grievance procedure in accordance with the rules and regulations of the College. ‘Student’s Grievance Cell’ enquires and analyses the nature and pattern of the grievances in a strictly confidential manner. Emphasis on procedural fairness has been given with a view to “the right to be heard and right to be treated without bias”.During the year no such major grievances were received. Grievances otherwise received were forwarded to the viceprincipals for immediate redressal. In all such cases prompt action were taken and the matter sorted out. In all cases the aggrieved student was informed of the measures taken and checks in the system were introduced to ensure there was no repetition of the same.</p>
            </div>
            <br />
            <div className="fs-6">
                <h4 className="d-flex justify-content-start">Objectives</h4>
                <ol type='1'>
                    <li>To support, those students who have been deprived of the services offered by the college, for which he / she is entitled.</li>
                    <li>To make officials of the college responsive, accountable and courteous in dealing with the students.</li>
                    <li>To ensure effective solution to the students’ grievances with an impartial and fair approach.</li>
                </ol>
            </div>
            <br />
            <div className="fs-6">
                <h4 className="d-flex justify-content-start">Functions</h4>
                <ol type='1'>
                    <li>Redressal of Students’ Grievances to solve their academic and administrative problems.</li>
                    <li>To co-ordinate between students and Departments / Sections to redress the grievances.</li>
                    <li>To guide ways and means to the students to redress their problems.</li>
                </ol>
            </div>
            <br />
            <div className="fs-6">
                <h4 className="d-flex justify-content-start">Students' Grievance Procedure</h4>
                <p>The grievance procedure is a machinery to sort out the issues between student and college. It is a means by which a student who believe that, he / she has been treated unfairly with respect to his / her academic / administrative affairs or is convinced to be discriminated is redressed. It is a device to settle a problem. It enables to express feelings by initiating and pursuing the grievance procedure in accordance with the rules and regulations of the college. It involves a process of investigation in which ‘Student’s Grievance Cell’ enquires and analyses the nature and pattern of the grievances in a strictly confidential manner. Matters are disclosed to only those, who have a legitimate role in resolving the matter. Emphasis on procedural fairness has been given with a view to “the right to be heard and right to be treated without bias”.</p>
                <p>The students are ought to lodge their grievances in the prescribed form available with their Vice-Principal (s) / Dean (s) of the respective department. The form, duly filled, is required to be submitted in the drop box placed outside the Principal’s office. The secretary in turn intimates the matter to the committee for necessary action. Final report based on grievance received and resolved will be submitted to the Principal and further course of action will be decided and the same shall be intimated to the students.</p>
            </div>
            <br />
            <div className="fs-6">
                <h4 className="d-flex justify-content-start">Exclusions</h4>
                SGC shall not entertain following issues.
                <ol type="1">
                    <li>Decisions of the Academic Council / Board of studies and other academic / administrative committees constituted by the college.</li>
                    <li>Decisions with regard to award of scholarships / fee concessions / awards / medals.</li>
                    <li>Decisions made by college under the Discipline Rules and Misconduct.</li>
                    <li>Decisions of the college in admissions of my courses.</li>
                    <li>Decisions of the competent authority on assessment and examination result.</li>
                </ol>
                <p>During the Year no Such Major Grievances Were Received. Grievances otherwise Received were forwarded to the vice – Principals for Immediate Redressal. In all such cases prompt action were taken and the matter sorted out. In all cases the aggrieved was informed of the measures taken and checks in the system were introduced to ensure there was no repetition of the same.</p>
            </div>
            <hr />
            <br />
            <form className="row g-4 ps-5 pe-5 pt-3 d-flex flex-column fs-6">
                <div className="row mb-1">
                    <label htmlforName="inputStudentName" className="col-sm-3 col-form-label d-flex justify-content-end">Student Name:</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control  form-control-sm" id="inputStudentName" placeholder="Your Name"/>
                    </div>
                </div>

                <div className="row mb-1">
                    <label htmlforName="inputPersEmail" className="col-sm-3 col-form-label d-flex justify-content-end">Personal Email:</label>
                    <div className="col-sm-6">
                        <input type="email" className="form-control  form-control-sm" id="inputPersEmail" placeholder="Email"/>
                    </div>
                </div>

                <div className="row mb-1">
                    <label htmlFor="inputMobNo" className="col-sm-3 col-form-label d-flex justify-content-end">Mobile Number:</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control  form-control-sm" id="inputMobno" placeholder="Mobile Number"/>
                    </div>
                </div>

                <div className="row mb-2">
                    <label htmlforName="inputDepartment" className="col-sm-3 col-form-control d-flex justify-content-end">Department:</label>
                    <div className="col-sm-6">
                    <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option selected>Select Department</option>  
                        <option value="1">Computer Science and Engineering</option>
                        <option value="2">Electrical Engineering</option>
                        <option value="3">Chemical Engineering</option>
                        <option value="4">Chemical Engineering</option>
                        <option value="5">Civil Engineering</option>
                        <option value="6">M.Sc</option>
                        <option value="7">M.S</option>
                        <option value="8">Ph.d</option>
                    </select>
                    </div>
                </div>
                <div className="row mb-2">
                    <label for="exampleFormControlTextarea1 " class="form-label col-sm-3 d-flex justify-content-end">Grivance Details:</label>
                    <div className="col-sm-6">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                    </div>
                </div>
            </form>
            <div className="d-flex justify-content-center my-3">
                <button type="button" class="btn btn-primary">Submit</button>
            </div>
            </div>

        </div>
    </div>
  )
} 
