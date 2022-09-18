import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const router = express.Router();

router.use(express.json());

// import dum from "../models/dumSchema.js";
import gen from "../models/stpgenSchema.js";
import adm from "../models/stpadmSchema.js";
import add from "../models/stpaddSchema.js";
import griv from "../models/grivance_Schema.js";
import feedb from "../models/feedback_Schema.js";
import convo from "../models/convocationSchema.js";
import class_mgmt from "../models/class_mgmt_Schema.js";
import arch_meet from "../models/archive_meeting.js";


import "../db/conn.js";
import senate_meet from "../models/senate_meeeting_Schema.js";
import bap_meet from "../models/bap_meet.js";

router.post("/general", async (req, res) => {
  const { Student_name, DOB, Email, Mobile_no } = req.body;

  if (!Student_name || !DOB || !Email || !Mobile_no) {
    return res.status(422).json({ error: "Plz fill the form properly " });
  }
  console.log(req.body);
  //res.json({message: req.body})

  try {
    // const userExist = await dum.findOne({ email: email });
    // if (userExist) {
    //   return res.status(409).json({ error: "Email already Exist" });
    // }
    const newData = new gen({ Student_name, DOB, Email, Mobile_no });

    await newData.save();

    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ error: "Failed to registered " });
    console.log(`${error} `);
  }
});

router.post("/admission", async (req, res) => {
  const { Board, Department, Degree, JEE_adv_Roll_no,JEE_adv_rank, JEE_adv_year,Admit_cat, JEE_mains_Roll_no } = req.body;

  if (!Board || !Department || !Degree || !JEE_adv_Roll_no || !JEE_adv_rank || !JEE_adv_year || !Admit_cat || !JEE_mains_Roll_no) {
    return res.status(422).json({ error: "Plz fill the form properly " });
  }
  console.log(req.body);
  //res.json({message: req.body})

  try {
    // const userExist = await dum.findOne({ email: email });
    // if (userExist) {
    //   return res.status(409).json({ error: "Email already Exist" });
    // }
    const newData = new adm({ Board, Department, Degree, JEE_adv_Roll_no,JEE_adv_rank, JEE_adv_year,Admit_cat, JEE_mains_Roll_no });

    await newData.save();

    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ error: "Failed to registered " });
    console.log(`${error} `);
  }
});

router.post("/address", async (req, res) => {
  const {  Address1, Address2, City, Distinct, State,Country,Pincode,Nationality,Same_as,cAddress1, cAddress2, cCity, cDistinct, cState,cCountry,cPincode,cNationality,Home_town,} = req.body;

  if (!Pincode || !Nationality || !Address1 || !Same_as ) {
    return res.status(422).json({ error: "Plz fill all the mandatory details" });
  }
  console.log(req.body);
  //res.json({message: req.body})

  try {
    // const userExist = await dum.findOne({ email: email });
    // if (userExist) {
    //   return res.status(409).json({ error: "Email already Exist" });
    // }
    const newData = new add({  Address1, Address2, City, Distinct, State,Country,Pincode,Nationality,Same_as,cAddress1, cAddress2, cCity, cDistinct, cState,cCountry,cPincode,cNationality,Home_town,});

    await newData.save();

    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ error: "Failed to registered " });
    console.log(`${error} `);
  }
});



router.get("/", (req, res) => {
  res.send(`HEMLO bhai`);
});

router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ error: "Plz fill the form properly " });
  }
  console.log(req.body);
  //res.json({message: req.body})

  try {
    const userExist = await dum.findOne({ email: email });
    if (userExist) {
      return res.status(409).json({ error: "Email already Exist" });
    }
    const newData = new gen({ email, password });

    await newData.save();

    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ error: "Failed to registered " });
    console.log(`${error} `);
  }
});

//login route
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "plz fill data" });
    }
    const userLogin = await dum.findOne({ email: email });
    console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      if (!isMatch) {
        res.json({ message: "Invalid data" });
      } else {
        res.json({ message: "Signing successfull" });
        //const token = await userLogin.generateAuthToken();
      }
    } else {
      res.json({ error: "not login" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/scholarship", async (req, res) => {
  try {
    const { student_name , email , mob_number , department , income , cast , grade } = req.body;
    
    if (!income || !cast) {
      return res.status(400).json({ error: "plz fill data" });
    }
    //const userLogin = await dum.findOne({ email: email });
    //console.log(userLogin);
    if (grade == 2 || grade == 3) {
      if ( cast === '3' || cast === '4' || cast === '5') {
        res.json({ message: "You are eligible" });
        console.log("You are eligible");
      } else if(cast === '2' && (income === '1' || income === '2' )){
        res.json({ message: "You are eligible" });
        console.log("You are eligible");
        //const token = await userLogin.generateAuthToken();
      }else{
        res,json({ message: "You are not" })
        console.log("You are ineligible");
      }
    } else {
      res.json({ error: "You are ineligible" });
      console.log("You are ineligible");
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/grivance", async (req, res) => { const{student_name ,email,mob_number, department,grivance_details } = req.body;

  if (!student_name || !grivance_details) {
    return res.status(422).json({ error: "Plz fill the form properly " });
  }
  console.log(req.body);
  //res.json({message: req.body})

  try {
    
    const newData = new griv({ student_name ,email,mob_number, department,grivance_details });

    await newData.save();

    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ error: "Failed to register " });
    console.log(`${error} `);
  }
});

router.post("/senate", async (req, res) => { const{meeting_name,meeting_agenda,cometee_type, meeting_date } = req.body;

  if (!meeting_name || !cometee_type || !meeting_date) {
    return res.status(422).json({ error: "Plz fill the form properly " });
  }
  console.log(req.body);
  //res.json({message: req.body})

  try {
    
    const newData = new senate_meet({ meeting_name,meeting_agenda,cometee_type, meeting_date });

    await newData.save();

    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ error: "Failed to register " });
    console.log(`${error} `);
  }
});
router.post("/bap", async (req, res) => { const{meeting_name,meeting_agenda,cometee_type, meeting_date } = req.body;

  if (!meeting_name || !cometee_type || !meeting_date) {
    return res.status(422).json({ error: "Plz fill the form properly " });
  }
  console.log(req.body);
  //res.json({message: req.body})

  try {
    
    const newData = new bap_meet({ meeting_name,meeting_agenda,cometee_type, meeting_date });

    await newData.save();

    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ error: "Failed to register " });
    console.log(`${error} `);
  }
});
router.post("/arch", async (req, res) => { const{meeting_name,meeting_agenda,cometee_type, meeting_date } = req.body;

  if (!meeting_name || !cometee_type || !meeting_date) {
    return res.status(422).json({ error: "Plz fill the form properly " });
  }
  console.log(req.body);
  //res.json({message: req.body})

  try {
    
    const newData = new arch_meet({ meeting_name,meeting_agenda,cometee_type, meeting_date });

    await newData.save();

    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ error: "Failed to register " });
    console.log(`${error} `);
  }
});

router.post("/feedback", async (req, res) => {
  const { Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9 } = req.body;

  if (!Q1 || !Q2 || !Q3 || !Q4 || !Q5 || !Q6 || !Q7 || !Q8 ) {
    return res.status(422).json({ error: "Plz fill the form properly " });
  }
  console.log(req.body);
  //res.json({message: req.body})

  try {
   
    const newData = new feedb({ Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9 });

    await newData.save();

    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ error: "Failed to registered " });
    console.log(`${error} `);
  }
});


router.post("/convocation", async (req, res) => {
  const { Candidatename,Degree,Department,Email,DOB,Mob_no,Payment_type} = req.body;

  if (!Candidatename || !Degree || !Department || !DOB || !Payment_type) {
    return res.status(422).json({ error: "Plz fill the form properly " });
  }
  console.log(req.body);
  //res.json({message: req.body})

  try {
    
    const newData = new convo ({ Candidatename,Degree,Department,Email,DOB,Mob_no,Payment_type});

    await newData.save();

    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ error: "Failed to register " });
    console.log(`${error} `);
  }
});

router.post("/classroom", async (req, res) => {
  const { course,data,slot,classroom } = req.body;

  if (!course || !data || !slot || !classroom) {
    return res.status(422).json({ error: "Plz fill the form properly " });
  }
  console.log(req.body);
  //res.json({message: req.body})

  try {
   
    const newData = new class_mgmt({ course,data,slot,classroom });

    await newData.save();

    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ error: "Failed to registered " });
    console.log(`${error} `);
  }
});

export default router;
