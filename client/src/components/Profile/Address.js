import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Address() {
    const navigate = useNavigate();
    var [studentadd, setStudentadd] = useState({
        Address1:"", 
        Address2:"", 
        City:"", 
        Distinct: "",
        State:"", 
        Country:"",
        Pincode:"",
        Home_town:"",
        Nationality:"",
        Same_as:"", 

        cAddress1:"", 
        cAddress2:"", 
        cCity:"", 
        cDistinct: "",
        cState:"", 
        cCountry:"",
        cPincode:""  
    });
  
    let name, value;
    const handleInputs = (e) => {
      console.log(e);
      name = e.target.name;
      value = e.target.value;
  
      setStudentadd({ ...studentadd, [name]: value });
      if(name === 'Same_as' && value === '1'){
        FillAddressInput();
      }
    };
    const PostData = async (e) => {
      e.preventDefault();
      const { Address1, Address2, City, Distinct, State,Country,Pincode,Home_town,Nationality,Same_as,cAddress1, cAddress2, cCity, cDistinct, cState,cCountry,cPincode } = studentadd;
  
      const res = await fetch("/address", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            Address1, Address2, City, Distinct, State,Country,Pincode,Home_town,Nationality,Same_as,
            cAddress1, cAddress2, cCity, cDistinct, cState,cCountry,cPincode,
        }),
      });
  
      const data = await res.json();
      if (data.status === 422 || !data) {
        window.alert("Plz fill the form properly");
        console.log("Plz fill the form properly");
      } else {
        window.alert("Form submitted successfully ");
        console.log("Form submitted properlly");
  
        navigate("/General");
      }
    };

    
function FillAddressInput() 
{
   let pAddressLine1 = document.getElementById("Address1");
   let pAddressLine2 = document.getElementById("Address2");
   let pZipcode = document.getElementById("Pincode");
   let pCity = document.getElementById("City");
   let pDistrict = document.getElementById("District");
   let pState = document.getElementById("State");
   let pCountry = document.getElementById("Country");

   let curAddressLine1 = document.getElementById("cAddress1");
   let curAddressLine2 = document.getElementById("cAddress2");
   let curZipcode = document.getElementById("cPincode");
   let curCity = document.getElementById("cCity");
   let curdistrict = document.getElementById("cDistrict");
   let curState = document.getElementById("cState");
   let curCountry = document.getElementById("cCountry");

   setStudentadd({ ...studentadd,   [curAddressLine1.name]: pAddressLine1.value , [curAddressLine2.name]: pAddressLine2.value , [curZipcode.name]: pZipcode.value ,
                                    [curCity.name]: pCity.value ,[curdistrict.name]: pDistrict.value , [curState.name]: pState.value , [curCountry.name]: pCountry.value});

    //if(pAddressLine1)
        //{setStudentadd({ ...studentadd, [curAddressLine1.name]: pAddressLine1.value });
    //if(pAddressLine2)
        //setStudentadd({ ...studentadd, [curAddressLine2.name]: pAddressLine2.value });
    //if(pZipcode)
        //setStudentadd({ ...studentadd, [curZipcode.name]: pZipcode.value });}
    //if(pCity)
        //setStudentadd({ ...studentadd, [curCity.name]: pCity.value });}
    //if(pState)
        //setStudentadd({ ...studentadd, [curState.name]: pState.value });}
    //if(pCountry)
        //setStudentadd({ ...studentadd, [curCountry.name]: pCountry.value });

        // curAddressLine1.value = pAddressLine1Value; 
        // curAddressLine2.value = pAddressLine2Value;   
        // curZipcode.value      = pZipcodeValue;     
        // curCity.value         = pCityValue;     
        // curState.value        = pStateValue;       
        // curCountry.value      = pCountryValue;      
}
    

  return (
    <div className="container shadow bg-body rounded pt-3 pb-3" style={{"width":"80%"}}>

    {/* ////////////////////////////////////////  PERMANENT ADDRESS  ////////////////////////////////////////// */}
      <h5 className="d-flex justify-content-start ps-2 mt-1 my-2">Permanent Address</h5>
      <hr className="mt-0 mb-4"/>
      <form className="row g-4 ps-5 pe-5 pt-3 d-flex flex-column">
        <div className="row mb-1">
            <label htmlFor="inputAddress" className="col-sm-3 col-form-label d-flex justify-content-end">Address Line1</label>
            <div className="col-sm-7">
                <input type="text" className="form-control  form-control-sm" id="Address1" placeholder="Address Line 1"
                name="Address1"
                value={studentadd.Address1}
                onChange={handleInputs}/>
            </div>
        </div>

        <div className="row mb-1">
            <label htmlFor="inputAddress" className="col-sm-3 col-form-label d-flex justify-content-end">Address Line2</label>
            <div className="col-sm-7">
                <input type="text" className="form-control  form-control-sm" id="Address2" placeholder="Address Line 2"
                name="Address2"
                value={studentadd.Address2}
                onChange={handleInputs}/>
            </div>
        </div>

        <div className="row mb-2">
            <label htmlFor="inputCity" className="col-sm-3 col-form-control d-flex justify-content-end">City</label>
            <div className="col-sm-7">
                <input type="text" className="form-control  form-control-sm" id="City" placeholder="City"
                name="City"
                value={studentadd.City}
                onChange={handleInputs}/>
            </div>
        </div>

        <div className="row mb-2">
            <label htmlFor="inputDistrict" className="col-sm-3 col-form-control d-flex justify-content-end">District</label>
            <div className="col-sm-7">
                <input type="text" className="form-control  form-control-sm" id="District" placeholder="District"
                name="District"
                value={studentadd.District}
                onChange={handleInputs}/>
            </div>
        </div>

        <div className="row mb-2">
            <label htmlFor="inputState" className="col-sm-3 col-form-control d-flex justify-content-end">State</label>
            <div className="col-sm-7">
                <input type="text" className="form-control  form-control-sm" id="State" placeholder="State"
                name="State"
                value={studentadd.State}
                onChange={handleInputs}/>
            </div>
        </div>

        <div className="row mb-2">
            <label htmlFor="inputCountry" className="col-sm-3 col-form-control d-flex justify-content-end">Country</label>
            <div className="col-sm-7">
                <input type="text" className="form-control  form-control-sm" id="Country" placeholder="Country"
                name="Country"
                value={studentadd.Country}
                onChange={handleInputs}/>
            </div>
        </div>

        <div className="row mb-2">
            <label htmlFor="inputPincode" className="col-sm-3 col-form-control d-flex justify-content-end">Pincode</label>
            <div className="col-sm-7">
                <input type="text" className="form-control form-control-sm" id="Pincode" placeholder="Pincode"
                name="Pincode"
                value={studentadd.Pincode}
                onChange={handleInputs}/>
            </div>
        </div>
        <div className="row mb-2">
            <label htmlFor="inputHometown" className="col-sm-3 col-form-control d-flex justify-content-end">Hometown</label>
            <div className="col-sm-7">
                <input type="text" className="form-control  form-control-sm" id="Hometown" placeholder="Hometown" name="Home_town" value={studentadd.Home_town} onChange={handleInputs}/>
            </div>
         </div>

        <div className="row mb-2">
            <label htmlFor="inputNationality" className="col-sm-3 col-form-control d-flex justify-content-end">Nationality</label>
            <div className="col-sm-7">
            <select className="form-select form-select-sm" aria-label=".form-select-sm example" name="Nationality" value={studentadd.Nationality} onChange={handleInputs} >
                <option selected>Select Nationality</option>   
                <option value="1">Indian</option>
                <option value="2">Non-Indian</option>
            </select>
            </div>
        </div>

        <div className="row mb-2">
            <label htmlFor="inputSameas" className="col-sm-3 col-form-control d-flex justify-content-end">Copy same address to current address.</label>
            <div className="col-sm-7">
            <select className="form-select form-select-sm" aria-label=".form-select-sm example" id="checkbox" name="Same_as" value={studentadd.Same_as} onChange={handleInputs} >
                <option selected>Select</option>  
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
            </div>
        </div>
      </form>

      {/* ////////////////////////////////////////  PRESENT ADDRESS  //////////////////////////////////////// */}

      <h5 className="d-flex justify-content-start ps-2 mt-1 mb-1">Present Address</h5>
      <hr className="mt-0 mb-4"/>
      <form className="row g-4 ps-5 pe-5 pt-3 d-flex flex-column" >
      <div className="row mb-1">
            <label htmlFor="inputAddress" className="col-sm-3 col-form-label d-flex justify-content-end">Address Line1</label>
            <div className="col-sm-7">
                <input type="text" className="form-control  form-control-sm" id="cAddress1" placeholder="Address Line 1" name="cAddress1" value={studentadd.cAddress1} onChange={handleInputs}/>
            </div>
        </div>

        <div className="row mb-1">
            <label htmlFor="inputAddress" className="col-sm-3 col-form-label d-flex justify-content-end">Address Line2</label>
            <div className="col-sm-7">
                <input type="text" className="form-control  form-control-sm" id="cAddress2" placeholder="Address Line 2" name="cAddress2" value={studentadd.cAddress2} onChange={handleInputs}/>
            </div>
        </div>

        <div className="row mb-2">
            <label htmlFor="inputCity" className="col-sm-3 col-form-control d-flex justify-content-end">City</label>
            <div className="col-sm-7">
                <input type="text" className="form-control  form-control-sm" id="cCity" placeholder="City" name="cCity" value={studentadd.cCity} onChange={handleInputs}/>
            </div>
        </div>

        <div className="row mb-2">
            <label htmlFor="inputDistrict" className="col-sm-3 col-form-control d-flex justify-content-end">District</label>
            <div className="col-sm-7">
                <input type="text" className="form-control  form-control-sm" id="cDistrict" placeholder="District" name="cDistinct" value={studentadd.cDistinct} onChange={handleInputs}/>
            </div>
        </div>

        <div className="row mb-2">
            <label htmlFor="inputState" className="col-sm-3 col-form-control d-flex justify-content-end">State</label>
            <div className="col-sm-7">
                <input type="text" className="form-control  form-control-sm" id="cState" placeholder="State" name="cState" value={studentadd.cState} onChange={handleInputs}/>
            </div>
        </div>

        <div className="row mb-2">
            <label htmlFor="inputCountry" className="col-sm-3 col-form-control d-flex justify-content-end">Country</label>
            <div className="col-sm-7">
                <input type="text" className="form-control  form-control-sm" id="cCountry" placeholder="Country" name="cCountry" value={studentadd.cCountry} onChange={handleInputs}/>
            </div>
        </div>

        <div className="row mb-2">
            <label htmlFor="inputPincode" className="col-sm-3 col-form-control d-flex justify-content-end">Pincode</label>
            <div className="col-sm-7">
                <input type="text" className="form-control form-control-sm" id="cPincode" placeholder="Pincode" name="cPincode" value={studentadd.cPincode} onChange={handleInputs}/>
            </div>
        </div>
        
        
      </form>
      <button
        type="button"
        name="submitAdd"
        id="submitAdd"
        className ="btn btn-secondary my-3"
        onClick={PostData}>
        Submit
      </button>
    </div>
  );
}
