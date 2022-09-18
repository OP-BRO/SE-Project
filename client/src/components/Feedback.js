import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Feedback() {

  const history = useNavigate();
    const [feed, setfeed] = useState({
      Q1:"",
      Q2:"",
        Q3:"",
        Q4:"",
        Q5:"",
        Q6:"",
        Q7:"",
        Q8:"",
        Q9:""
    });
  
    let name, value;
    const handleInputs = (e) => {
      console.log(e);
      name = e.target.name;
      value = e.target.value;
  
      setfeed({ ...feed, [name]: value });
    };
    const PostData = async (e) => {
      e.preventDefault();
      const {Q1, Q2,Q3,Q4,Q5,Q6,Q7,Q8, Q9 } = feed;
  
      const res = await fetch("/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Q1,
          Q2,
          Q3,
          Q4,
          Q5,
          Q6,
          Q7,
          Q8,
          Q9
        }),
      });
  
      const data = await res.json();
      if (data.status === 422 || !data) {
        window.alert("Plz fill the form properly");
        console.log("Plz fill the form properly");
      } else {
        window.alert("Form submitted successfully ");
        console.log("Form submitted properlly");
  
        history.push("/General");
      }
    };

  return (
    <div>
      <div className="container shadow bg-body rounded ps-0 pe-0" style={{"width":"90%"}}>
      <h1 className="mb-3 d-flex justify-content-center p-2 text-warning" style={{"backgroundColor":"#10477e"}}>--- Faculty Feedback form ---</h1> <br />  
        <div className="ps-4">
        <div className="mt-3 fs-6 d-flex flex-column">
          {/* <div className="bg-primary">Which option do you want to choose?</div> */}
          <div><label htmlhtmlFor="inputPWD" className="form-label d-flex fs-5"><b>The lecture sequence was well Planned.</b></label></div>
          <div className="d-flex justify-content-start mt-0"
          value={feed.Q1}
          
          >
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Q1" id="Q1a" value="1"
              onChange={handleInputs}
              />
              <label className="form-check-label" htmlFor="Q1a">Strongly Disagree</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Q1" id="Q1b" value="2"
              onChange={handleInputs}
              />
              <label className="form-check-label" htmlFor="Q1b">Disagree</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Q1" id="Q1c" value="3"
              onChange={handleInputs}
              />
              <label className="form-check-label" htmlFor="Q1c">Agree</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Q1" id="Q1d" value="4"
              onChange={handleInputs}
              
              />
              <label className="form-check-label" htmlFor="Q1d">Strongly Agree</label>
            </div>
          </div>
        </div>
        <hr />
        <div className="mt-3 fs-6 d-flex flex-column">
          {/* <div className="bg-primary">Which option do you want to choose?</div> */}
          <div><label htmlhtmlFor="inputPWD" className="form-label d-flex fs-5"><b>The Professor possesses the deep knowledge of subject taught.</b></label></div>
          <div className="d-flex justify-content-start mt-0"
         value={feed.Q2}
         
          >
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Q2" id="Q2a" value="1"

              onChange={handleInputs}
              />
              <label className="form-check-label" htmlFor="Q2a">Strongly Disagree</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Q2" id="Q2b" value="2"
              onChange={handleInputs}
              
              />
              <label className="form-check-label" htmlFor="Q2b">Disagree</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Q2" id="Q2c" value="3"
              onChange={handleInputs}
              />
              <label className="form-check-label" htmlFor="Q2c">Agree</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Q2" id="Q2d" value="4"
              onChange={handleInputs}
              />
              <label className="form-check-label" htmlFor="Q2d">Strongly Agree</label>
            </div>
          </div>
        </div>
        <hr />
        <div className="mt-3 fs-6 d-flex flex-column">
          {/* <div className="bg-primary">Which option do you want to choose?</div> */}
          <div><label htmlhtmlFor="inputPWD" className="form-label d-flex fs-5 fw-bold">The content was illustrated with adequate examples.</label></div>
          <div className="d-flex justify-content-start mt-0"
          
          value={feed.Q3}
          onChange={handleInputs}
          >
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Q3" id="Q3a" value="1"
              onChange={handleInputs}
             />
              <label className="form-check-label" htmlFor="Q3a">Strongly Disagree</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Q3" id="Q3b" value="2"
              onChange={handleInputs}/>
              <label className="form-check-label" htmlFor="Q3b">Disagree</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Q3" id="Q3c" value="3"
              onChange={handleInputs}/>
              <label className="form-check-label" htmlFor="Q3c">Agree</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Q3" id="Q3c" value="4"
              onChange={handleInputs}/>
              <label className="form-check-label" htmlFor="Q34c">Strongly Agree</label>
            </div>
          </div>
        </div>
        <hr />
        <div className="mt-3 fs-6 d-flex flex-column">
          {/* <div className="bg-primary">Which option do you want to choose?</div> */}
          <div><label htmlhtmlFor="inputPWD" className="form-label d-flex fs-5 fw-bold">The course exposed you to new knowledges and practices.</label></div>
          <div className="d-flex justify-content-start mt-0"
          value={feed.Q4}
          onChange={handleInputs}>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Q4" id="Q4a" value="1"
                onChange={handleInputs}
              />
              <label className="form-check-label" htmlFor="Q41">Strongly Disagree</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Q4" id="Q4b" value="2"
              onChange={handleInputs}/>
              <label className="form-check-label" htmlFor="Q4b">Disagree</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Q4" id="Q4c" value="3"
              onChange={handleInputs}
              />
              <label className="form-check-label" htmlFor="Q4c">Agree</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Q4" id="Q4d" value="4"
              onChange={handleInputs}/>
              <label className="form-check-label" htmlFor="Q4d">Strongly Agree</label>
            </div>
          </div>
        </div>
        <hr />
        <div className="mt-3 fs-6 d-flex flex-column">
          {/* <div className="bg-primary">Which option do you want to choose?</div> */}
          <div><label htmlhtmlFor="inputPWD" className="form-label d-flex fs-5 fw-bold">The lectures were clear and easy to understand.</label></div>
          <div className="d-flex justify-content-start mt-0"
          value={feed.Q5}
          onChange={handleInputs}
          >
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Q5" id="Q5a" value="1"
              onChange={handleInputs}
              />
              <label className="form-check-label" htmlFor="Q5a">Strongly Disagree</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Q5" id="Q5b" value="2"
              onChange={handleInputs}/>
              <label className="form-check-label" htmlFor="Q5b">Disagree</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Q5" id="Q5c" value="3"
              onChange={handleInputs}/>
              <label className="form-check-label" htmlFor="Q5c">Agree</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Q5" id="Q5d" value="4"
              onChange={handleInputs}/>
              <label className="form-check-label" htmlFor="Q5d">Strongly Agree</label>
            </div>
          </div>
        </div>
        <hr />
        <div className="mt-3 fs-6 d-flex flex-column">
          {/* <div className="bg-primary">Which option do you want to choose?</div> */}
          <div><label htmlhtmlFor="inputPWD" className="form-label d-flex fs-5 fw-bold">The teaching aids were effectively used.</label></div>
          <div className="d-flex justify-content-start mt-0"
          value={feed.Q6}
          onChange={handleInputs}
          >
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Q6" id="Q61" value="1"
              onChange={handleInputs}
            />
              <label className="form-check-label" htmlFor="Q6a">Strongly Disagree</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Q6" id="Q6b" value="2"
              onChange={handleInputs}/>
              <label className="form-check-label" htmlFor="Q6b">Disagree</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Q6" id="Q6c" value="3"
              onChange={handleInputs}
              />
              <label className="form-check-label" htmlFor="Q6c">Agree</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Q6" id="Q6c" value="4"
              onChange={handleInputs}/>
              <label className="form-check-label" htmlFor="Q6d">Strongly Agree</label>
            </div>
          </div>
        </div>
        <hr />
        <div className="mt-3 fs-6 d-flex flex-column">
          {/* <div className="bg-primary">Which option do you want to choose?</div> */}
          <div><label htmlhtmlFor="inputPWD" className="form-label d-flex fs-5 fw-bold">The instructor encourages interactions and were helpful.</label></div>
          <div className="d-flex justify-content-start mt-0"
          value={feed.Q7}
          onChange={handleInputs}
          >
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Q7" id="Q71" value="1"
               onChange={handleInputs}
              />
              <label className="form-check-label" htmlFor="Q7a">Strongly Disagree</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Q7" id="Q7b" value="2"
              onChange={handleInputs}/>
              <label className="form-check-label" htmlFor="Q7b">Disagree</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Q7" id="Q7c" value="3"
              onChange={handleInputs}/>
              <label className="form-check-label" htmlFor="Q7c">Agree</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Q7" id="Q7d" value="4"
              onChange={handleInputs}/>
              <label className="form-check-label" htmlFor="Q7d">Strongly Agree</label>
            </div>
          </div>
        </div>
        <hr />
        <div className="mt-3 fs-6 d-flex flex-column">
          {/* <div className="bg-primary">Which option do you want to choose?</div> */}
          <div><label htmlhtmlFor="inputPWD" className="form-label d-flex fs-5 fw-bold">How do you rate this course ?</label></div>
          <div className="d-flex justify-content-start mt-0"
          value={feed.Q8}
          onChange={handleInputs}
          >
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Q8" id="Q8a" value="1"
onChange={handleInputs}/>
              <label className="form-check-label" htmlFor="Q8a">Very poor</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Q8" id="Q8b" value="2"
              onChange={handleInputs}/>
              <label className="form-check-label" htmlFor="Q8b">Poor</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Q8" id="Q8c" value="3"
              onChange={handleInputs}/>
              <label className="form-check-label" htmlFor="Q8c">Average</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Q8" id="Q8d" value="4"
              onChange={handleInputs}/>
              <label className="form-check-label" htmlFor="Q8d">Good</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Q8" id="Q8e" value="5"
              onChange={handleInputs}/>
              <label className="form-check-label" htmlFor="Q8e">Excellent</label>
            </div>
          </div>
        </div>
        <hr />
        <div className="row mb-2">
          <label htmlhtmlFor="inputPWD" className="form-label d-flex fs-5 fw-bold">How much time do you spend for this course?</label>
          <div className="col-sm-3 mt-0">
            <select className="form-select form-select-sm float-left" aria-label=".form-select-sm example" name="Q9"
            value={feed.Q9}
            onChange={handleInputs}
            >
              <option selected>Select</option>  
              <option value="1"> 8 - 10 hrs per week</option>
              <option value="2"> 6 - 8 hrs per week </option>
              <option value="3"> 4 - 6 hrs per week</option>
              <option value="4"> 2 - 4 hrs per week</option>
              <option value="5">Less than 2 hrs per week</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="exampleFormControlTextarea1" className="form-label d-flex fs-5 fw-bold">Additional Questions or Comments</label>
          <textarea className="form-control w-75" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <br />
        <button type="button" className="btn btn-primary mb-3 "
        onClick={PostData}
        >Submit</button>
        </div>
      </div>
    </div>
  )
}