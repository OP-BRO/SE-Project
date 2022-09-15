import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function Admissons() {
  return (
    <div>

        <div className="container shadow bg-body rounded text-start pb-3 ps-0 pe-0" style={{"width":"90%"}}>
            <h1 className="mb-3 d-flex justify-content-center p-2 text-warning" style={{"backgroundColor":"#10477e"}}>--- Admissions  ---</h1>
            <div className="p-2 fs-6 text-start">
            Applications are invited for Academic Year 2022-23 admissions commencing from Aug-2022 in the following programmes:
            </div><br />
            <div className="ps-3 pe-3">
            <div className="container">
                <div className="accordion" id="accordionSection"> 
                    <div className="accordion-item mb-4 border rounded">
                        <h2 className="accordion-header">
                            <button type="button" className="accordion-button collapsed fs-3" data-bs-toggle="collapse" data-bs-target="#collapse11">M.Tech</button></h2>
                        <div className="accordion-collapse collapse" id="collapse11" data-bs-parent="#accordionSection">
                            <div className="accordion-body d-flex flex-column text-start"><br />
                                <h3 className="text-center">M.tech Admissions</h3>
                                <p className="fs-5 mt-4">IIT Tirupati offering M.Tech programme from the academic year 2022 in the following departments:</p>
                                <div className="ps-1 text-secondary fs-6">
                                    <div className="d-flex justify-content-start"><ArrowRightIcon/>Civil Engineering (Streams: (i) Environmental and Water Resources Engineering, (ii) Geotechnical Engineering, (iii) Structural Engineering, (iv) Transportation and Infrastructure Engineering)</div>
                                    <div className="d-flex justify-content-start"><ArrowRightIcon/>Computer Science & Engineering</div>
                                    <div className="d-flex justify-content-start"><ArrowRightIcon/>Electrical Engineering (Streams: (i) Signal Processing & Communications, (ii) Microelectronics & VLSI (iii) RF and Microwave Engineering)</div>
                                    <div className="d-flex justify-content-start"><ArrowRightIcon/>Mechanical Engineering (Stream: i) Design & Manufacturing)</div>
                                </div>
                                <p className="fs-6 mt-4 mb-0 text-danger">Opening date for on-line application-21-03-2022 (Monday)</p>
                                <p className="fs-6 text-danger mt-1">Closing date for on-line application-18-04-2022 (Monday)</p>
                                <p className="fs-6 mt-2 mb-0">To download Information Brouchure: <a href="/pdf/admissions/M.Tech 2022 Information Brochure.pdf" download>Click here</a></p>
                                <p className="fs-6">To Apply Online: <a href="https://admissions.iittp.ac.in/mtech/">Click here</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item mb-4 border rounded">
                        <h2 className="accordion-header">
                            <button type="button" className="accordion-button collapsed fs-3" data-bs-toggle="collapse" data-bs-target="#collapse22">M.S (Research)</button></h2>
                        <div className="accordion-collapse collapse" id="collapse22" data-bs-parent="#accordionSection">
                            <div className="accordion-body d-flex flex-column text-start fs-6"><br />
                                <h3 className="text-center">M.Sc Admissions</h3>
                                <p className="fs-5 mt-4">Applications are invited for admission to the M.S (Research) programme starting in July 2022 Semester, as per details given below:</p>

                                <h5 className="text-decoration-underline">Research Areas</h5>
                                <h5>Chemical Engineering</h5>
                                <p>Machine Learning in Process Engineering, Process Control and Optimization, Process Planning & Optimization, Molecular Simulations for Energy Storage, Nanoscience & Nanotechnology, Granular Flow, Colloids & Interfaces, Food Technology, Bioprocess Engineering, Biomass to Chemicals, Microfluidics & Process Intensification, Polymerization Reactions, General Chemical Engineering</p>
                                <hr />
                                <h5 className="mt-3">Civil & Environmental Engineering:</h5>
                                <p className="mb-0"><i className="text-danger">Regular Scheme</i> Geotechnical engineering, Multi-temporal SAR Interferometry, Geoid modelling, Concrete 3D printing, Composites in pavements, Artificial Intelligence applications in pavement asset management, Air quality modelling and management.</p>
                                <p className="mb-0"><i className="text-danger">Project (MoRTH) Scheme:</i> Asphalt-rubber pavement technology</p>
                                <p className="mb-0"><i className="text-danger">Project (IITT- University of Sharjah collaboration) Scheme:</i> Thermophysical properties of pervious concrete</p>
                                <p className="mb-0"><i className="text-danger">Project (ISRO) Scheme:</i> Forest Hydrology</p>
                                <hr />
                                <h5 className="mt-3">Computer Science & Engineering:</h5>
                                <p>Parallel Computing, Algorithms and Data Structures, Computer Architecture, AI Accelerator, Reinforcement Learning, Computational Complexity, AI for Software Engineering, Software Engineering for AI, Computing for Education, Human- Computer Interaction, Data Science Algorithms and Applications*, Computer Networks*, Internet of Things, ML for IoT* (‘*’only for External candidates)</p>
                                <hr />
                                <h5 className="mt-3">Electrical Engineering:</h5>
                                <p>Semiconductor Devices, Deep Learning for computer vision, Power Engineering and Smart Grids</p>
                                <hr />
                                <h5 className="mt-3">Mechanical Engineering:</h5>
                                <p className="mb-0"><i className="text-danger">Fluids and Thermal:</i> Fluid Mechanics, Droplet and spray dynamics.</p>
                                <p className="mb-0"><i className="text-danger">Solid Mechanics:</i> Experimental and Computational Mechanics, Nonlinear dynamics*, Vibration*, Contact Mechanics*, Automotive NVH*, Vehicle dynamics*, Vehicle-Pavement Interaction*, Acoustics*</p>
                                <p className="mb-0"><i className="text-danger">Mechatronics and Robotics:</i> Autonomous systems, Dynamics and Control, Mechatronics; Design, dynamics and control of robots, Nonlinear dynamics, Vibration</p>
                                <p className="mb-0"><i className="text-danger">Mechatronics and Robotics:</i> Autonomous systems, Dynamics and Control, Mechatronics; Design, dynamics and control of robots, Nonlinear dynamics, Vibration</p>
                                <p className="mb-0"><i className="text-danger">Manufacturing*:</i> Micromachining, Additive Manufacturing, Biomaterials and Cell Culture, 3D Bio-printing, Advanced Machining Processes, Manufacturing Materials Optimization, Design for Recovery, Reuse, Remanufacturing & Recycling, Advanced casting, Distortion analysis of welded structures, functionally graded materials development for aerospace applications.</p>
                                <p className="fs-6 mt-4 mb-0 text-danger">Opening date for on-line application-21-03-2022 (Monday)</p>
                                <p className="fs-6 text-danger mt-1">Closing date for on-line application-18-04-2022 (Monday)</p>

                                <p className="fs-6 mt-2 mb-0">To download Information Brouchure: <a href="/pdf/admissions/IITTP Ph.D and M.S Brochure - July 2022.pdf" download>Click here</a></p>
                                <p className="fs-6">To Apply Online: <a href="https://admissions.iittp.ac.in/msphd/">Click here</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item mb-4 border rounded">
                        <h2 className="accordion-header">
                            <button type="button" className="accordion-button collapsed fs-3" data-bs-toggle="collapse" data-bs-target="#collapse33">M.Sc</button></h2>
                        <div className="accordion-collapse collapse text-start" id="collapse33" data-bs-parent="#accordionSection">
                            <div className="accordion-body d-flex flex-column"><br />
                                <h5>IIT Tirupati offers M.Sc. degrees in</h5>
                                <div className="d-flex justify-content-start mt-3 fs-5"><ArrowRightIcon/>Chemistry</div>
                                <div className="d-flex justify-content-start fs-5"><ArrowRightIcon/>Mathematics and Statistics</div>
                                <div className="d-flex justify-content-start fs-5"><ArrowRightIcon/>Physics</div>
                                <p className="fs-6 mt-2">The admission to the course is through the Joint Admission Test for Masters(JAM). For more information about JAM, eligibility criteria and the total number of available seats at IIT Tirupati, please visit the page <a href="https://jam.iitr.ac.in/." className="text-decoration-none">https://jam.iitr.ac.in/.</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item mb-4 border rounded">
                        <h2 className="accordion-header">
                            <button type="button" className="accordion-button collapsed fs-3" data-bs-toggle="collapse" data-bs-target="#collapse44">Ph.D</button></h2>
                        <div className="accordion-collapse collapse" id="collapse44" data-bs-parent="#accordionSection">
                            <div className="accordion-body d-flex flex-column"><br />
                                <div className="accordion-body d-flex flex-column text-start fs-6">
                                    <h3 className="text-center">Ph.D Admissions</h3>
                                    <p className="fs-5 mt-4">Applications are invited for admission to the M.S (Research) programme starting in July 2022 Semester, as per details given below:</p>

                                    <h5 className="text-decoration-underline">Research Areas</h5>
                                    <h5>Chemical Engineering</h5>
                                    <p>Machine Learning in Process Engineering, Process Control and Optimization, Process Planning & Optimization, Molecular Simulations for Energy Storage, Nanoscience & Nanotechnology, Granular Flow, Colloids & Interfaces, Food Technology, Bioprocess Engineering, Biomass to Chemicals, Microfluidics & Process Intensification, Polymerization Reactions, General Chemical Engineering</p>
                                    <hr />
                                    <h5 className="mt-3">Civil & Environmental Engineering:</h5>
                                    <p className="mb-0"><i className="text-danger">Regular Scheme</i> Geotechnical engineering, Multi-temporal SAR Interferometry, Geoid modelling, Concrete 3D printing, Compositesin pavements, ArtificialIntelligence applications in pavement asset management, Air quality modelling and management.</p>
                                    <p className="mb-0"><i className="text-danger">Project (MoRTH) Scheme:</i>Asphalt-rubber pavement technology</p>
                                    <p className="mb-0"><i className="text-danger">Project (IITT- University of Sharjah collaboration) Scheme:</i> Thermophysical properties of pervious concrete</p>
                                    <p className="mb-0"><i className="text-danger">Project (ISRO) Scheme:</i> Forest Hydrology</p>
                                    <hr />
                                    <h5 className="mt-3">Computer Science & Engineering:</h5>
                                    <p>Computer Architecture, AI Accelerator, Reinforcement Learning, AI for Software Engineering, Software Engineering for AI, Computing for Education, Human- Computer Interaction, Parallel Computing*, Algorithms and Data Structures*, Data Science Algorithms and Applications*, Computer Networks*, Internet of Things*, ML for IoT*, Computational Complexity* (‘*’only for UGC-NET/INSPIRE or any other external fellowship qualified candidates with JRF in the relevant discipline(s) and External candidates)</p>
                                    <hr />
                                    <h5 className="mt-3">Electrical Engineering:</h5>
                                    <p>Semiconductor Devices, Power Electronics and Drives, Wireless Communications and Networks, RF& Microwave, Deep Learning for computer vision, Power Engineering and Smart Grids</p>
                                    <hr />
                                    <h5 className="mt-3">Mechanical Engineering:</h5>
                                    <p className="mb-0"><i className="text-danger">Fluids and Thermal:</i> Fluid Mechanics, Droplet and spray dynamics.</p>
                                    <p className="mb-0"><i className="text-danger">Solid Mechanics:</i> Experimental and Computational Mechanics, Nonlinear dynamics*, Vibration*, Contact Mechanics*, Automotive NVH*, Vehicle dynamics*, Vehicle-Pavement Interaction*, Acoustics*</p>
                                    <p className="mb-0"><i className="text-danger">Mechatronics and Robotics:</i> Autonomous systems, Dynamics and Control, Mechatronics; Design, dynamics and control of robots, Nonlinear dynamics, Vibration</p>
                                    <p className="mb-0"><i className="text-danger">Mechatronics and Robotics:</i> Autonomous systems, Dynamics and Control, Mechatronics; Design, dynamics and control of robots, Nonlinear dynamics, Vibration</p>
                                    <p className="mb-0"><i className="text-danger">Manufacturing*:</i> Micromachining, Additive Manufacturing, Biomaterials and Cell Culture, 3D Bio-printing, Advanced Machining Processes, Manufacturing Materials Optimization, Design for Recovery, Reuse, Remanufacturing & Recycling, Advanced casting, Distortion analysis of welded structures, functionally graded materials development for aerospace applications.</p>
                                    <hr />
                                    <h5 className="mt-3">Chemistry:</h5>
                                    <p className="mb-0"><i className="text-danger">Inorganic Chemistry:</i> Coordination Chemistry, Bioinorganic Chemistry, Supramolecular Chemistry, Materials Science, Chemical Biology*</p>
                                    <p className="mb-0"><i className="text-danger">Organic Chemistry:</i>C-H bond activation and photo/electro organic synthesis*, Carbohydrate Chemistry, Total synthesis of natural products, 3d-transition metal catalysed organic transformation.</p>
                                    <p className="mb-0"><i className="text-danger">Theoretical Chemistry*:</i> Spectroscopic modelling, Computational biophysics, Computational Materials Chemistry, Stochastic thermodynamics, Noise induced transport phenomena</p>
                                    <p className="mb-0">
                                    (‘*’only for UGC/CSIR-NET/INSPIRE or any other external fellowship qualified candidates with JRF in the relevant discipline(s) and External candidates)*[these topics are (a) for UGC-CSIR/NET-JRF/INSPIRE or any other fellowship qualified candidates with JRF OR (b) covered under external project grants.]</p>
                                    <hr />
                                    <h5 className="mt-3">Physics:</h5>
                                    <p>Quantum sensing and metrology (Experimental), Atomic clocks (Experimental), Quantum Optics (Experimental), Ultracold quantum chemistry (Experimental), Theoretical ultrafast physics, condensed matter physics (experiment+theory), Astroparticle Physics (Theoretical), High Energy Physics Phenomenology, Plasma modelling and diagnostics* (experiment and theory) (‘*’only for UGC/CSIR-NET/INSPIRE/JEST or any other external fellowship qualified candidates with JRF in the relevant discipline(s) and External candidates)</p>
                                    <hr />
                                    <h5 className="mt-3">Mathematics and Statistics:</h5>
                                    <p>Analysis on Fractals, Inverse Problems*, Spatio Temporal Model*, Environmental Statistics*, Computational Fluid Dynamics*, Numerical Analysis*, GPU Computing* (‘*’only for UGC/CSIR-NET/INSPIRE/NBHM or any other external fellowship qualified candidates with JRF in the relevant discipline(s) and External candidates))</p>
                                    <hr />
                                    <h5 className="mt-3">Humanities and Social Sciences:</h5>
                                    <p>English: Indian literature, Hindi Cinema, Gender Studies, Conflict Studies, Migration Studies in South Asia, Comparative Literary Studies*, Indian Theories of Language/Literature*, Indian Folk Culture and Religion*, South Asian Literature* Public Policy: Sustainability, Environmental Policy, Environmental Governance, Human-environmental interactions Organisational Behaviour/Human Resource Management: High performance work systems, Sustainable HRM, Leadership, Positive Organisational Behaviour Finance: Asset Pricing, Corporate Finance, Quantitative Finance Economics*: Climate Change, environmental economics, Natural Resource Management, Development economics, Political economy Philosophy*: Ethics, Political Philosophy, Modern Indian Philosophy (‘*’ only for UGC-JRF or any other external fellowship qualified candidates with JRF)</p>
                                    <p className="fs-6 mt-4 mb-0 text-danger">Opening date for on-line application-21-03-2022 (Monday)</p>
                                    <p className="fs-6 text-danger mt-1">Closing date for on-line application-18-04-2022 (Monday)</p>
                                    <p className="fs-6 mt-2 mb-0">To download Information Brouchure: <a href="/pdf/admissions/IITTP Ph.D and M.S Brochure - July 2022.pdf" download>Click here</a></p>
                                    <p className="fs-6">To Apply Online: <a href="https://admissions.iittp.ac.in/msphd/">Click here</a></p>
                                </div>
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
