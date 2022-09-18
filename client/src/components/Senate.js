import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Senate() {
    const history = useNavigate();
    const [senate_meet, setsenate_meet] = useState({
        meeting_name:"",
        meeting_agenda:"",
        cometee_type:"",
        meeting_date:""
    });
    const [arch_meet, setarch_meet] = useState({
        meeting_name2:"",
        meeting_agenda2:"",
        cometee_type2:"",
        meeting_date2:""
    });
  
    let name, value;
    const handleInputs = (e) => {
      console.log(e);
      name = e.target.name;
      value = e.target.value;
  
      setsenate_meet({ ...senate_meet, [name]: value });
    };
    const PostData = async (e) => {
      e.preventDefault();
      const { meeting_name,meeting_agenda,cometee_type, meeting_date} = senate_meet;

  
      const res = await fetch("/senate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            meeting_name,
            meeting_agenda,
            cometee_type, 
            meeting_date
        }),
      });

      
  
      const data = await res.json();
      if (data.status === 422 || !data) {
        window.alert("Plz fill the form properly");
        console.log("Plz fill the form properly");
      } else {
        window.alert("Form submitted successfully ");
        console.log("Form submitted properlly");
  
        history("/General");
      }
    };
 
    const handleInputs2 = (e) => {
      console.log(e);
      name = e.target.name;
      value = e.target.value;
  
      setarch_meet({ ...arch_meet, [name]: value });
    };
    const PostData2 = async (e) => {
        e.preventDefault();
        const { meeting_name2,meeting_agenda2,cometee_type2, meeting_date2} = arch_meet;
        
    
        const res = await fetch("/arch", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
              meeting_name:meeting_name2,
              meeting_agenda:meeting_agenda2,
              cometee_type:cometee_type2, 
              meeting_date:meeting_date2
          }),
        });
  
        
    
        const data = await res.json();
        if (data.status === 422 || !data) {
          window.alert("Plz fill the form properly");
          console.log("Plz fill the form properly");
        } else {
          window.alert("Form submitted successfully ");
          console.log("Form submitted properlly");
    
          history("/General");
        }
      };

  return (
    <>
     <div className="container shadow bg-body rounded text-start pb-3 ps-0 pe-0" style={{"width":"90%"}}>
            <h1 className="mb-3 d-flex justify-content-center p-2 text-warning" style={{"backgroundColor":"#10477e"}}>--- Senate Meetings ---</h1>
        <br /> 
    <form className="row g-4 ps-5 pe-5 pt-3 d-flex flex-column fs-6">
        <div className="row mb-1">
            <label htmlforName="inputStudentName" className="col-sm-3 col-form-label d-flex justify-content-end">Meeting Name:</label>
            <div className="col-sm-6">
                <input type="text" className="form-control  form-control-sm" id="meetingName" placeholder="Enter Meeting Name" name="meeting_name"
                value={senate_meet.meeting_name}
                onChange={handleInputs}
                />
            </div>
        </div>

        <div className="row mb-1">
            <label htmlFor="inputMobNo" className="col-sm-3 col-form-label d-flex justify-content-end">Meeting Date:</label>
            <div className="col-sm-6">
                <input type="date" className="form-control  form-control-sm" id="meetDate" placeholder="Enter Date" name="meeting_date"
                value={senate_meet.meeting_date}
                onChange={handleInputs}
                />
            </div>
        </div>

        <div className="row mb-2">
            <label for="exampleFormControlTextarea1 " class="form-label col-sm-3 d-flex justify-content-end">Meeting Agenda:</label>
            <div className="col-sm-6" 
            
            >
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" name="meeting_agenda" value={senate_meet.meeting_agenda}
            onChange={handleInputs}></textarea>
            </div>
        </div>

        <div className="row mb-2">
            <label htmlforName="inputDepartment" className="col-sm-3 col-form-control d-flex justify-content-end">Committee :</label>
            <div className="col-sm-6">
            <select className="form-select form-select-sm" aria-label=".form-select-sm example" name="cometee_type"
            value={senate_meet.cometee_type}
            onChange={handleInputs}
            >
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
        <button type="button" class="btn btn-primary"
        onClick={PostData}
        >Add Meeting Details</button>
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
                <input type="text" className="form-control  form-control-sm" id="meetingName" placeholder="Enter Meeting" name="meeting_name2"
                value={arch_meet.meeting_name2}
                onChange={handleInputs2}
                />
            </div>
        </div>

        

        <div className="row mb-2">
            <label for="exampleFormControlTextarea1 " class="form-label col-sm-3 d-flex justify-content-end">Meeting Agenda:</label>
            <div className="col-sm-6" 
            >
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"
                name="meeting_agenda2"
                value={arch_meet.meeting_agenda2}
                onChange={handleInputs2}
                ></textarea>
            </div>
        </div>

        <div className="row mb-2">
            <label htmlforName="inputDepartment" className="col-sm-3 col-form-control d-flex justify-content-end">Committee :</label>
            <div className="col-sm-6" 
            >
            <select className="form-select form-select-sm" aria-label=".form-select-sm example" name="cometee_type2"
            value={arch_meet.cometee_type2}
            onChange={handleInputs2}>
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
                <input type="date" className="form-control  form-control-sm" id="meetDate" placeholder="Enter Date" name="meeting_date2"
                value={arch_meet.meeting_date2}
                onChange={handleInputs2}
                />
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
        <button type="button" class="btn btn-primary"
        onClick={PostData2}
        >Add to Archive</button>
    </div>

     
    </form>
    
</div>
</>



  )
}
