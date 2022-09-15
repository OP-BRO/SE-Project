import React from "react";

export default function Address() {
  return (
    <div className="container shadow bg-body rounded pt-3 pb-3" style={{"width":"80%"}}>

    {/* ////////////////////////////////////////  PERMANENT ADDRESS  ////////////////////////////////////////// */}
      <h5 className="d-flex justify-content-start ps-2 mt-1 my-2">Permanent Address</h5>
      <hr className="mt-0 mb-4"/>
      <form className="row g-4 ps-5 pe-5 pt-3 d-flex flex-column">
        <div className="row mb-1">
            <label htmlFor="inputAddress" className="col-sm-3 col-form-label d-flex justify-content-end">Address Line1</label>
            <div className="col-sm-7">
                <input type="text" className="form-control  form-control-sm" id="inputAddress1" placeholder="Address Line 1"/>
            </div>
        </div>

        <div className="row mb-1">
            <label htmlFor="inputAddress" className="col-sm-3 col-form-label d-flex justify-content-end">Address Line2</label>
            <div className="col-sm-7">
                <input type="text" className="form-control  form-control-sm" id="inputAddress2" placeholder="Address Line 2"/>
            </div>
        </div>

        <div className="row mb-2">
            <label htmlFor="inputCity" className="col-sm-3 col-form-control d-flex justify-content-end">City</label>
            <div className="col-sm-7">
                <input type="text" className="form-control  form-control-sm" id="inputCity" placeholder="City"/>
            </div>
        </div>

        <div className="row mb-2">
            <label htmlFor="inputDistrict" className="col-sm-3 col-form-control d-flex justify-content-end">District</label>
            <div className="col-sm-7">
                <input type="text" className="form-control  form-control-sm" id="inputDistrict" placeholder="District"/>
            </div>
        </div>

        <div className="row mb-2">
            <label htmlFor="inputState" className="col-sm-3 col-form-control d-flex justify-content-end">State</label>
            <div className="col-sm-7">
                <input type="text" className="form-control  form-control-sm" id="inputState" placeholder="State"/>
            </div>
        </div>

        <div className="row mb-2">
            <label htmlFor="inputCountry" className="col-sm-3 col-form-control d-flex justify-content-end">Country</label>
            <div className="col-sm-7">
                <input type="text" className="form-control  form-control-sm" id="inputCountry" placeholder="Country"/>
            </div>
        </div>

        <div className="row mb-2">
            <label htmlFor="inputPincode" className="col-sm-3 col-form-control d-flex justify-content-end">Pincode</label>
            <div className="col-sm-7">
                <input type="text" className="form-control form-control-sm" id="inputPincode" placeholder="Pincode"/>
            </div>
        </div>

        <div className="row mb-2">
            <label htmlFor="inputNationality" className="col-sm-3 col-form-control d-flex justify-content-end">Nationality</label>
            <div className="col-sm-7">
            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                <option selected>Select Nationality</option>   
                <option value="1">Indian</option>
                <option value="2">Non-Indian</option>
            </select>
            </div>
        </div>

        <div className="row mb-2">
            <label htmlFor="inputSameas" className="col-sm-3 col-form-control d-flex justify-content-end">Same as</label>
            <div className="col-sm-7">
            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                <option selected>Select</option>  
                <option value="1">Yes</option>
                <option value="2">No</option>
            </select>
            </div>
        </div>
      </form>

      {/* ////////////////////////////////////////  PRESENT ADDRESS  //////////////////////////////////////// */}

      <h5 className="d-flex justify-content-start ps-2 mt-1 mb-1">Present Address</h5>
      <hr className="mt-0 mb-4"/>
      <form className="row g-4 ps-5 pe-5 pt-3 d-flex flex-column">
      <div className="row mb-1">
            <label htmlFor="inputAddress" className="col-sm-3 col-form-label d-flex justify-content-end">Address Line1</label>
            <div className="col-sm-7">
                <input type="text" className="form-control  form-control-sm" id="inputAddress1" placeholder="Address Line 1"/>
            </div>
        </div>

        <div className="row mb-1">
            <label htmlFor="inputAddress" className="col-sm-3 col-form-label d-flex justify-content-end">Address Line2</label>
            <div className="col-sm-7">
                <input type="text" className="form-control  form-control-sm" id="inputAddress2" placeholder="Address Line 2"/>
            </div>
        </div>

        <div className="row mb-2">
            <label htmlFor="inputCity" className="col-sm-3 col-form-control d-flex justify-content-end">City</label>
            <div className="col-sm-7">
                <input type="text" className="form-control  form-control-sm" id="inputCity" placeholder="City"/>
            </div>
        </div>

        <div className="row mb-2">
            <label htmlFor="inputDistrict" className="col-sm-3 col-form-control d-flex justify-content-end">District</label>
            <div className="col-sm-7">
                <input type="text" className="form-control  form-control-sm" id="inputDistrict" placeholder="District"/>
            </div>
        </div>

        <div className="row mb-2">
            <label htmlFor="inputState" className="col-sm-3 col-form-control d-flex justify-content-end">State</label>
            <div className="col-sm-7">
                <input type="text" className="form-control  form-control-sm" id="inputState" placeholder="State"/>
            </div>
        </div>

        <div className="row mb-2">
            <label htmlFor="inputCountry" className="col-sm-3 col-form-control d-flex justify-content-end">Country</label>
            <div className="col-sm-7">
                <input type="text" className="form-control  form-control-sm" id="inputCountry" placeholder="Country"/>
            </div>
        </div>

        <div className="row mb-2">
            <label htmlFor="inputPincode" className="col-sm-3 col-form-control d-flex justify-content-end">Pincode</label>
            <div className="col-sm-7">
                <input type="text" className="form-control form-control-sm" id="inputPincode" placeholder="Pincode"/>
            </div>
        </div>
        
        <div className="row mb-2">
            <label htmlFor="inputHometown" className="col-sm-3 col-form-control d-flex justify-content-end">Hometown</label>
            <div className="col-sm-7">
                <input type="text" className="form-control  form-control-sm" id="inputHometown" placeholder="Hometown"/>
            </div>
        </div>
      </form>
    </div>
  );
}
