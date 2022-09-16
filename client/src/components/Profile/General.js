import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function General() {
  const history = useNavigate();
  const [student, setStudent] = useState({
    Student_name: "",
    Gender: "",
    Blood_group: "",
    DOB: "",
    PWD: "",
    Email: "",
    Mobile_no: "",
    Alt_mobile_no: "",
    Aadhar_no: "",
    Religion: "",
    Mother_tongue: "",
  
    Father_name: "",
    Father_email: "",
    Father_occupation: "",
    Father_Mobile_no: "",
    Mother_name: "",
    Mother_email: "",
    Mother_occupation: "",
    Mother_mobile_no: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setStudent({ ...student, [name]: value });
  };
  const PostData = async (e) => {
    e.preventDefault();
    const { Student_name, Gender ,  Blood_group ,DOB ,PWD ,Email ,Mobile_no ,Alt_mobile_no ,Aadhar_no ,Religion ,Mother_tongue ,
            Father_name ,Father_email ,Father_occupation ,Father_Mobile_no ,Mother_name ,Mother_email ,Mother_occupation,Mother_mobile_no , } = student;

    const res = await fetch("/general", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Student_name,
        Gender ,
        Blood_group ,
        DOB ,
        PWD ,
        Email ,
        Mobile_no ,
        Alt_mobile_no ,
        Aadhar_no ,
        Religion ,
        Mother_tongue ,
  
        Father_name ,
        Father_email ,
        Father_occupation ,
        Father_Mobile_no ,
        Mother_name ,
        Mother_email ,
        Mother_occupation,
        Mother_mobile_no ,
      }),
    });

    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Plz fill the form properly");
      console.log("Plz fill the form properly");
    } else {
      window.alert("Form submitted successfully");
      console.log("Form submitted successfully");

      history.push("/Admission");
    }
  };

  return (
    <div className="container shadow bg-body rounded pt-3 pb-3" style={{"width":"90%"}}>
      <h5 className="d-flex justify-content-start ps-2 mt-1 my-2">
        -- Personal Information --
      </h5>
      <hr className="mt-0 mb-4" />
      {/* <div className="row mb-2">
          <label htmlforName="inputStudentID" className="col-sm-3 col-form-control d-flex justify-content-end">StudentID</label>
          <div className="col-sm-7">
              <input type="text" className="form-control  form-control-sm" id="inputStudentID" placeholder="Your ID"/>
          </div>
      </div> */}
      <form method="POST" className="row g-4 ps-5 pe-5 pt-3 d-flex flex-column">
        <div className="row mb-1">
          <label
            htmlforName="inputStudentName"
            className="col-sm-3 col-form-label d-flex justify-content-end"
          >
            Student Name
          </label>
          <div className="col-sm-7">
            <input
              type="text"
              className="form-control  form-control-sm"
              id="inputStudentName"
              name="Student_name"
              placeholder="Your Name"
              value={student.Student_name}
              onChange={handleInputs}
            />
          </div>
        </div>

        <div className="row mb-2">
          <label
            htmlforName="inputGender"
            className="col-sm-3 col-form-control d-flex justify-content-end"
          >
            Gender
          </label>
          <div className="col-sm-7">
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              name="Gender"
              value={student.Gender}
              onChange={handleInputs}
            >
              <option selected>Select Gender</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Other</option>
            </select>
          </div>
        </div>

        <div className="row mb-2">
          <label
            htmlforName="inputBloodGroup"
            className="col-sm-3 col-form-control d-flex justify-content-end"
          >
            Blood Group
          </label>
          <div className="col-sm-7">
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              name="Blood_group"
              value={student.Blood_group}
              onChange={handleInputs}
            >
              <option selected>Select Blood Group</option>
              <option value="1">A+</option>
              <option value="2">A-</option>
              <option value="3">B+</option>
              <option value="4">B-</option>
              <option value="5">AB+</option>
              <option value="6">O+</option>
              <option value="7">O-</option>
            </select>
          </div>
        </div>

        <div className="row mb-1">
          <label
            htmlforName="inputDOB"
            className="col-sm-3 col-form-label d-flex justify-content-end"
          >
            DOB (dd-mm-yyyy)
          </label>
          <div className="col-sm-7">
            <input
              type="date"
              className="form-control  form-control-sm"
              id="inputDOB"
              placeholder="Date of Birth"
              name="DOB"
              value={student.DOB}
              onChange={handleInputs}
            />
          </div>
        </div>

        <div className="row mb-2">
          <label
            htmlforName="inputPWD"
            className="col-sm-3 col-form-control d-flex justify-content-end"
          >
            PWD
          </label>
          <div className="col-sm-7">
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              name="PWD"
              value={student.PWD}
              onChange={handleInputs}
            >
              <option selected>Select</option>
              <option value="1">Yes</option>
              <option value="2">No</option>
            </select>
          </div>
        </div>

        <div className="row mb-1">
          <label
            htmlforName="inputPersEmail"
            className="col-sm-3 col-form-label d-flex justify-content-end"
          >
            Personal Email
          </label>
          <div className="col-sm-7">
            <input
              type="email"
              className="form-control  form-control-sm"
              id="inputPersEmail"
              placeholder="Email"
              name="Email"
              value={student.Email}
              onChange={handleInputs}
            />
          </div>
        </div>

        <div className="row mb-1">
          <label
            htmlFor="inputMobNo"
            className="col-sm-3 col-form-label d-flex justify-content-end"
          >
            Mobile Number
          </label>
          <div className="col-sm-7">
            <input
              type="text"
              className="form-control  form-control-sm"
              id="inputMobno"
              name="Mobile_no"
              placeholder="Mobile Number"
              value={student.Mobile_no}
              onChange={handleInputs}
            />
          </div>
        </div>

        <div className="row mb-1">
          <label
            htmlFor="inputAltMobNo"
            className="col-sm-3 col-form-label d-flex justify-content-end"
          >
            Alt. Mobile Number
          </label>
          <div className="col-sm-7">
            <input
              type="text"
              className="form-control  form-control-sm"
              id="inputAltMobNo"
              name="Alt_mobile_no"
              placeholder="Alternate Mobile Number"
              value={student.Alt_mobile_no}
              onChange={handleInputs}
            />
          </div>
        </div>

        <div className="row mb-1">
          <label
            htmlFor="inputAadhar"
            className="col-sm-3 col-form-label d-flex justify-content-end"
          >
            Aadhar Number
          </label>
          <div className="col-sm-7">
            <input
              type="text"
              className="form-control  form-control-sm"
              id="inputAadhar"
              placeholder="Aadhar Number"
              name="Aadhar_no"
              value={student.Aadhar_no}
              onChange={handleInputs}
            />
          </div>
        </div>

        <div className="row mb-1">
          <label
            htmlforName="inputReligion"
            className="col-sm-3 col-form-label d-flex justify-content-end"
          >
            Religion
          </label>
          <div className="col-sm-7">
            <input
              type="text"
              className="form-control  form-control-sm"
              id="inputReligion"
              placeholder="Your Religion"
              name="Religion"
              value={student.Religion}
              onChange={handleInputs}
            />
          </div>
        </div>

        <div className="row mb-1">
          <label
            htmlforName="inputMotherTongue"
            className="col-sm-3 col-form-label d-flex justify-content-end"
          >
            Mother Tongue
          </label>
          <div className="col-sm-7">
            <input
              type="text"
              className="form-control  form-control-sm"
              id="inputMotherTongue"
              placeholder="Your Mother Tongue"
              name="Mother_tongue"
              value={student.Mother_tongue}
              onChange={handleInputs}
            />
          </div>
        </div>
      </form>

      <h5 className="d-flex justify-content-start ps-2 mt-1 my-2">
        -- Family Details --
      </h5>
      <hr className="mt-0 mb-4" />

      <form className="row g-4 ps-5 pe-5 pt-3 d-flex flex-column">
        <div className="row mb-1">
          <label
            htmlforName="inputFatherName"
            className="col-sm-3 col-form-label d-flex justify-content-end"
          >
            Father's Name
          </label>
          <div className="col-sm-7">
            <input
              type="text"
              className="form-control  form-control-sm"
              id="inputFatherName"
              placeholder="Your Father's Name"
              name="Father_name"
              value={student.Father_name}
              onChange={handleInputs}
            />
          </div>
        </div>

        <div className="row mb-1">
          <label
            htmlforName="inputFatherEmail"
            className="col-sm-3 col-form-label d-flex justify-content-end"
          >
            Father's Email
          </label>
          <div className="col-sm-7">
            <input
              type="email"
              className="form-control  form-control-sm"
              id="inputFatherEmail"
              placeholder="Father's Email"
              name="Father_email"
              value={student.Father_email}
              onChange={handleInputs}
            />
          </div>
        </div>

        <div className="row mb-1">
          <label
            htmlforName="inputFatherOccu"
            className="col-sm-3 col-form-label d-flex justify-content-end"
          >
            Father's Occupation
          </label>
          <div className="col-sm-7">
            <input
              type="text"
              className="form-control  form-control-sm"
              id="inputFatherOccu"
              placeholder="Your Father's Occupation"
              name="Father_occupation"
              value={student.Father_occupation}
              onChange={handleInputs}
            />
          </div>
        </div>

        <div className="row mb-1">
          <label
            htmlFor="inputFatherMobNo"
            className="col-sm-3 col-form-label d-flex justify-content-end"
          >
            Father's Mobile No.
          </label>
          <div className="col-sm-7">
            <input
              type="number"
              className="form-control  form-control-sm"
              id="inputFatherMobno"
              placeholder="Father's Mobile Number"
              name="Father_Mobile_no"
              value={student.Father_Mobile_no}
              onChange={handleInputs}
            />
          </div>
        </div>

        <div className="row mb-1">
          <label
            htmlforName="inputMotherName"
            className="col-sm-3 col-form-label d-flex justify-content-end"
          >
            Mother's Name
          </label>
          <div className="col-sm-7">
            <input
              type="text"
              className="form-control  form-control-sm"
              id="inputMotherName"
              placeholder="Your Mother's Name"
              name="Mother_name"
              value={student.Mother_name}
              onChange={handleInputs}
            />
          </div>
        </div>

        <div className="row mb-1">
          <label
            htmlforName="inputMotherEmail"
            className="col-sm-3 col-form-label d-flex justify-content-end"
          >
            Mother's Email
          </label>
          <div className="col-sm-7">
            <input
              type="email"
              className="form-control  form-control-sm"
              id="inputMotherEmail"
              placeholder="Mother's Email"
              name="Mother_email"
              value={student.Mother_email}
              onChange={handleInputs}
            />
          </div>
        </div>

        <div className="row mb-1">
          <label
            htmlforName="inputMotherOccu"
            className="col-sm-3 col-form-label d-flex justify-content-end"
          >
            Mother's Occupation
          </label>
          <div className="col-sm-7">
            <input
              type="text"
              className="form-control  form-control-sm"
              id="inputMotherOccu"
              placeholder="Your Mother's Occupation"
              name="Mother_occupation"
              value={student.Mother_occupation}
              onChange={handleInputs}
            />
          </div>
        </div>

        <div className="row mb-1">
          <label
            htmlFor="inputMotherMobNo"
            className="col-sm-3 col-form-label d-flex justify-content-end"
          >
            Mother's Mobile No.
          </label>
          <div className="col-sm-7">
            <input
              type="number"
              className="form-control  form-control-sm"
              id="inputMotherMobno"
              placeholder="Mother's Mobile Number"
              name="Mother_mobile_no"
              value={student.Mother_mobile_no}
              onChange={handleInputs}
            />
          </div>
        </div>

        {/* <div className="row mb-1">
          <label
            htmlFor="inputGuardianAltMobNo"
            className="col-sm-3 col-form-label d-flex justify-content-end"
          >
            Alt. Mobile Number
          </label>
          <div className="col-sm-7">
            <input
              type="number"
              className="form-control  form-control-sm"
              id="inputGuardianAltMobNo"
              placeholder="Alternate Mobile Number"
            />
          </div>
        </div> */}
      </form>
      <button
        type="button"
        name="submitGen"
        id="submitGen"
        className="btn btn-secondary my-3"
        onClick={PostData}
      >
        Submit
      </button>
    </div>
  );
}
