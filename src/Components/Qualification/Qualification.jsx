import React, { useState } from 'react'
import "./qualification.css"


const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className='qualification section'>
        <h2 className='section-title'>Qualification</h2>
        <span className='section-subtitle'>My personal journey</span>

        <div className="qualification-container container">
            <div className="qualification-tabs">
                <div className={toggleState === 1 ? "qualification-button qualification-active button--flex" : "qualification-button button--flex"}
                onClick={() => toggleTab(1)}
                >
                    <i className='uil uil-graduation-cap 
                    qualification-icon'></i>
                    Education
                </div>

                <div className={toggleState === 2 ? "qualification-button qualification-active button--flex" : "qualification-button button--flex"}
                onClick={() => toggleTab(2)}
                >
                    <i className='uil uil-briefcase-alt 
                    qualification-icon'></i>
                    Experience
                </div>
            </div> 
            <div className="qualification-sections">
               <div 
                className={toggleState === 1 ?"qualification-content qualification-content-active" : "qualification-content"}>                 
                    <div className="qualification-data">
                        <div>
                            <h3 className="qualification-title">Software Engineering</h3>
                            <span className='qualification-subtitle'>
                                Semi-Colon Africa
                                </span>
                            <div className="qualification-calendar">
                                <i className="uil uil-calendar-alt">
                                </i>2023 - Present
                            </div>
                        </div>

                        <div>
                            <span className='qualification-rounder'></span>
                            <span className='qualification-line'></span>
                        </div>
                    </div>

                    <div className="qualification-data">
                        <div></div>

                        <div>
                            <span className='qualification-rounder'></span>
                            <span className='qualification-line'></span>
                        </div>

                        <div>
                            <h3 className="qualification-title">Web Designing</h3>
                            <span className='qualification-subtitle'>
                                SGL ICT Center
                                </span>
                            <div className="qualification-calendar">
                                <i className="uil uil-calendar-alt">
                                </i>2022 - 2023
                            </div>
                        </div>
                    </div>

                    <div className="qualification-data">
                        <div>
                            <h3 className="qualification-title">Bsc Computer Science</h3>
                            <span className='qualification-subtitle'>
                                Babccok University
                                </span>
                            <div className="qualification-calendar">
                                <i className="uil uil-calendar-alt">
                                </i>2018 - 2022
                            </div>
                        </div>

                        <div>
                            <span className='qualification-rounder'></span>
                            <span className='qualification-line'></span>
                        </div>
                    </div>

                    <div className="qualification-data">
                        <div></div>

                        <div>
                            <span className='qualification-rounder'></span>
                            <span className='qualification-line'></span>
                        </div>

                        <div>
                            <h3 className="qualification-title">Secondary School Education</h3>
                            <span className='qualification-subtitle'>
                                CMS GRAMMAR SCHOOL BARIGA
                                </span>
                            <div className="qualification-calendar">
                                <i className="uil uil-calendar-alt">
                                </i>2012 - 2018
                            </div>
                        </div>
                    </div>
                </div>

                <div  className={toggleState === 2  ?"qualification-content qualification-content-active" : "qualification-content"}>
                    
                    <div className="qualification-data">
                        <div>
                            <h3 className="qualification-title">Software Engineer</h3>
                            <span className='qualification-subtitle'>
                                Semi-Colon Africa
                                </span>
                            <div className="qualification-calendar">
                                <i className="uil uil-calendar-alt">
                                </i>Febuary 2023 - Present
                            </div>
                        </div>

                        <div>
                            <span className='qualification-rounder'></span>
                            <span className='qualification-line'></span>
                        </div>
                    </div>

                    <div className="qualification-data">
                        <div></div>

                        <div>
                            <span className='qualification-rounder'></span>
                            <span className='qualification-line'></span>
                        </div>

                        <div>
                            <h3 className="qualification-title">Frontend Developer Intern</h3>
                            <span className='qualification-subtitle'>
                                BFREE Africa
                                </span>
                            <div className="qualification-calendar">
                                <i className="uil uil-calendar-alt">
                                </i> January 2022 - July 2022
                            </div>
                        </div>
                    </div>

                    <div className="qualification-data">
                        <div>
                            <h3 className="qualification-title">Software Developer Intern</h3>
                            <span className='qualification-subtitle'>
                                Castley Group of Companies
                                </span>
                            <div className="qualification-calendar">
                                <i className="uil uil-calendar-alt">
                                </i>May 2021 - November 2021
                            </div>
                        </div>

                        <div>
                            <span className='qualification-rounder'></span>
                            <span className='qualification-line'></span>
                        </div>
                    </div>
                     
                </div>
            </div>
        </div>





    </section>
  )
}

export default Qualification