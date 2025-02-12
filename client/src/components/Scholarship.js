

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Scholarship() {
    const history = useNavigate();
    const [scholar, setscholar] = useState({
        student_name:"",
           email:"",
           mob_number:"",
          department:"",
          income:"",
          cast:"",
            grade:""
    });
  
    let name, value;
    const handleInputs = (e) => {
      console.log(e);
      name = e.target.name;
      value = e.target.value;
  
      setscholar({ ...scholar, [name]: value });
    };
    const PostData = async (e) => {
      e.preventDefault();
      const {  student_name,email,mob_number,department,income,cast,grade } = scholar;
  
      const res = await fetch("/scholarship", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            student_name,email,mob_number,department,income,cast,grade
        }),
      });
  
      const data = await res.json();
      if (data.status === 422 || !data) {
        window.alert("Plz fill the form properly");
        console.log("Plz fill the form properly");
      } else {
        window.alert("Form submitted successfully ");
        console.log("Form submitted properlly");
  
       // history("/General");
      }
    };

  return (
    <>
        <div>
        <div className="container shadow bg-body rounded text-start pb-3 ps-0 pe-0" style={{"width":"90%"}}>
            <h1 className="mb-3 d-flex justify-content-center p-2 text-warning" style={{"backgroundColor":"#10477e"}}>--- Scholarship  ---</h1>
            <div>
                <img  className="m-auto mb-5" src="/images/ScholarshipImage.jpeg" style={{"width":"700px","height":"400px"}} alt="" />
            </div>
            <div className="fs-6 mb-5">
                <h4 className="d-flex justify-content-start ps-5 pe-3">Please enter your details to know about the Scholarships that you are eligible</h4>
            </div>
            <form className="row g-4 ps-5 pe-5 pt-3 d-flex flex-column fs-6">
                <div className="row mb-1">
                    <label htmlforName="inputStudentName" className="col-sm-3 col-form-label d-flex justify-content-end">Student Name:</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control  form-control-sm" id="inputStudentName" placeholder="Your Name" name="student_name"
                        value={scholar.student_name}
                        onChange={handleInputs}/>
                    </div>
                </div>

                <div className="row mb-1">
                    <label htmlforName="inputPersEmail" className="col-sm-3 col-form-label d-flex justify-content-end">Personal Email:</label>
                    <div className="col-sm-6">
                        <input type="email" className="form-control  form-control-sm" id="inputPersEmail" placeholder="Email" name="email"
                        value={scholar.email}
                        onChange={handleInputs}
                        />
                    </div>
                </div>

                <div className="row mb-1">
                    <label htmlFor="inputMobNo" className="col-sm-3 col-form-label d-flex justify-content-end">Mobile Number:</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control  form-control-sm" id="inputMobno" placeholder="Mobile Number" name="mob_number"
                        value={scholar.mob_number}
                        onChange={handleInputs}
                        />
                    </div>
                </div>

                <div className="row mb-2">
                    <label htmlforName="inputDepartment" className="col-sm-3 col-form-control d-flex justify-content-end">Department:</label>
                    <div className="col-sm-6">
                    <select className="form-select form-select-sm" aria-label=".form-select-sm example" name = "department"
                    value={scholar.department}
                    onChange={handleInputs}
                    >
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
                    <label htmlforName="Incomecategory" className="col-sm-3 col-form-control d-flex justify-content-end">Income:</label>
                    <div className="col-sm-6">
                    <select className="form-select form-select-sm" aria-label=".form-select-sm example" name="income"
                    value={scholar.income}
                    onChange={handleInputs}
                    >
                        <option selected>Select Your Income Category</option>  
                        <option value="1">less than 1 lakh pa</option>
                        <option value="2">less than 5 lakhs pa</option>
                        <option value="3">less than 8 lakhs pa</option>
                        <option value="4">more than 8 lakhs pa</option>
                    </select>
                    </div>
                </div>

                <div className="row mb-2">
                    <label htmlforName="Castcategory" className="col-sm-3 col-form-control d-flex justify-content-end">Cast:</label>
                    <div className="col-sm-6">
                    <select className="form-select form-select-sm" aria-label=".form-select-sm example" name="cast"
                    value={scholar.cast}
                    onChange={handleInputs}
                    >
                        <option selected>Select Your Cast Category</option>  
                        <option value="1">General</option>
                        <option value="2">OBC_NCL</option>
                        <option value="3">SC</option>
                        <option value="4">ST</option>
                        <option value="5">PWD</option>
                    </select>
                    </div>
                </div>

                <div className="row mb-2">
                    <label htmlforName="Grades" className="col-sm-3 col-form-control d-flex justify-content-end">Grade:</label>
                    <div className="col-sm-6">
                    <select className="form-select form-select-sm" aria-label=".form-select-sm example" name= "grade"
                    value={scholar.grade}
                    onChange={handleInputs}
                    >
                        <option selected>Select your Grades</option>  
                        <option value="1">less than 6</option>
                        <option value="2">less than 8 greater than 6</option>
                        <option value="3">more than 8</option>
                    </select>
                    </div>
                </div>

            </form>
            <div className="d-flex justify-content-center my-3">
                <button type="button" class="btn btn-primary"
                onClick={PostData}
                >Show Eligible Scholarships
            
                </button>
            </div>

        </div>
        </div>
    </>
  )
}
