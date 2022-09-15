import React from 'react'

export default function Convocation() {
  return (
    <div className="container shadow bg-body rounded text-start pb-3 ps-0 pe-0" style={{"width":"90%"}}>
      <h1 className="mb-3 d-flex justify-content-center p-2 text-warning" style={{"backgroundColor":"#10477e"}}>--- Convocation  ---</h1>
      <div className="ps-3">
      <div className="fs-6">
        <h4 className="d-flex justify-content-start">Instructions</h4>
        <ol type='1'>
          <li className="mb-1">Candidates can apply for Convocation Certificate through this online portal.</li>
          <li className="mb-1">In "Apply for Convocation Certificate" section and fill the personnel details. Candidate needs to upload scanned copies of passport size photo.</li>
          <li className="mb-1">Valid Mobile no. and E-mail id is must. Candidate will get one time password (OTP) during registration to Email. Candidate must enter the OTP before proceeding to "Make Payment".</li>
          <li className="mb-1">Candidates can make the payment immediately or later after filling the online application. Click on "Make Payment" option to make the payment.</li>
          <li className="mb-1">After Successful payment, Acknowledgement will be generated. Keep the Acknowledgement form printed for future reference.</li>
        </ol>
      </div>
      <div className="fs-6 mt-4">
        <h4 className="d-flex justify-content-start mb-4">Apply for Convocation Certificate</h4>
        <form className="row g-4 ps-5 pe-5 pt-3 d-flex flex-column">
        <div className="row mb-1">
          <label htmlforName="inputCandName" className="col-sm-3 col-form-label d-flex justify-content-end">
            Candidate Name
          </label>
          <div className="col-sm-7">
            <input type="text" className="form-control  form-control-sm" id="inputCandName" placeholder="Candidate Name"/>
          </div>
        </div>
        <div className="row mb-2">
          <label htmlfor="inputDegree" className="col-sm-3 col-form-control d-flex justify-content-end">
            Degree
          </label>
          <div className="col-sm-7">
            <select className="form-select form-select-sm" aria-label=".form-select-sm example">
              <option selected>Select</option>
              <option value="1">B.Tech</option>
              <option value="2">M.Tech</option>
              <option value="3">Ph.D</option>
              <option value="4">MS</option>
            </select>
          </div>
        </div>
        <div className="row mb-2">
          <label htmlfor="inputDegree" className="col-sm-3 col-form-control d-flex justify-content-end">
            Department
          </label>
          <div className="col-sm-7">
            <select className="form-select form-select-sm" aria-label=".form-select-sm example">
              <option selected>Select</option>
              <option value="1">Computer Science and Engineering</option>
              <option value="2">Electrical Engineering</option>
              <option value="3">Chemical Engineering</option>
              <option value="4">Civil Engineering</option>
            </select>
          </div>
        </div>
        <div className="row mb-1">
          <label htmlforName="inputEmail" className="col-sm-3 col-form-label d-flex justify-content-end">Email:</label>
          <div className="col-sm-7">
              <input type="email" className="form-control  form-control-sm" id="inputPersEmail" placeholder="Email"/>
          </div>
        </div>
        <div className="row mb-1">
          <label htmlforName="inputDOB" className="col-sm-3 col-form-label d-flex justify-content-end">
            DOB (dd-mm-yyyy)
          </label>
          <div className="col-sm-7">
            <input type="date" className="form-control  form-control-sm" id="inputDOB" placeholder="Date of Birth" name="DOB"/>
          </div>
        </div>
        <div className="row mb-1">
          <label htmlFor="inputMobNo" className="col-sm-3 col-form-label d-flex justify-content-end">
            Mobile Number</label>
          <div className="col-sm-7">
            <input type="text" className="form-control  form-control-sm" id="inputMobNo" placeholder="Mobile Number"/>
          </div>
        </div>

        <div className="row mb-2">
          <label htmlfor="inputPayment" className="col-sm-3 col-form-control d-flex justify-content-end">
            Payment Type
          </label>
          <div className="col-sm-7">
            <select className="form-select form-select-sm" aria-label=".form-select-sm example">
              <option selected>Select</option>
              <option value="1">UPI</option>
              <option value="2">Net Banking</option>
            </select>
          </div>
        </div>
        </form>
        <div className="d-flex">
          <div className="mb-4 fs-5  ps-5 pe-5" style={{"width":"70%"}}>
              <label htmlFor="formFile" className="form-label" style={{"float":"left"}}>Profile</label>
              <input className="form-control form-control-sm" style={{"border":"1px solid black"}} type="file" id="formFileSm"/>
          </div>
          <div className="d-flex align-items-center">
              <button type="button" className="btn btn-primary btn-sm h-30 mx-4">View</button>
              <button type="button" className="btn btn-secondary btn-sm h-30">Delete</button>
          </div>
        </div>
        <div className="fs-5 ps-1 pe-3">
          <div className="d-flex justify-content-start mb-1">Declaration</div>
          <div className="p-2" style={{"fontSize":"12px", "backgroundColor":"#FCF8E8"}}>
          I HEREBY SOLEMNLY DECLARE AND PROMISE THAT IF ADMITTED TO THE DEGREE FOR WHICH I HAVE BEEN RECOMMENDED, I SHALL IN MY DAILY LIFE AND CONVERSATION, CONDUCT MYSELF, AS BEFITS A MEMBER OF THIS UNIVERSITY THAT I SHALL TO THE UTMOST OF MY CAPACITY AND OPPORTUNITY, SUPPORT THE CAUSE OF MORALITY AND SOUND LEARNING, AND THAT, AS FAR AS IN ME LIES, I SHALL UPHELD AND ADVANCE THE SOCIAL ORDER AND THE WELL BEING OF MY FELLOWMEN IN THE CASE OF PROFESSIONAL DEGREE, THE FOLLOWING SHALL BE ADDED TO THE ABOVE DECLARATION. I SHALL FAITHFULLY AND CAREFULLY FULFIL THE DUTIES OF THE PROFESSION TO WHICH I MAY BE ADMITTED BY VIRTUE OF MY DEGREE, THAT I SHALL ON ALL OCCASIONS MAINTAIN ITS PURITY AND REPUTATION AND I SHALL NEVER DEVIATE FROM THE STRAIGHT PATH OF THEIR HONOURABLE EXCERCISE BY MAKING MY KNOWLEDGE SUBSERVIENT TO UNWORTHY ENDS.
          <div className="form-check fs-6">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label" for="flexCheckDefault">
              I agree to the terms
            </label>
          </div>
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-primary">Submit</button>
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
