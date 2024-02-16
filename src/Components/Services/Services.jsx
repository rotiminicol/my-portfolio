import React, { useState } from 'react'
import "./services.css";


const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className='services section' id="services">
    <h2 className='section-title'>Services</h2>
    <span className='section-subtitle'>What i offer</span>

    <div className='services-container container grid'>
      <div className="services-content">
        <div>
          <i className='uil uil-web-grid services-icon'></i>
          <h3 className='services-title'>
           FrontEnd <br/> Developer </h3>
        </div>

        <span className='services-button' onClick={() => 
        toggleTab(1)}>
          View More 
        <i className="uil uil-arrow-right
        service-button-icon"></i></span>

        <div className={toggleState === 1 ? 'services-modal active-modal': "services-modal"}>
          <div className='services-modal-content'>
            <i onClick={() => toggleTab(0)} className="uil uil-times
            services-modal-close"></i>

            <h3 className='services-modal-title'>
              FrontEnd Developer</h3>
            <p className='services-modal-description'>Service
            with more than 2 years of experience.
            Providing quality work to clients and
            companies.</p>

            <ul className='services-modal-services grid'>

              <li className='services-modal-service'>
                <i className='uil uil-check-circle
                services-modal-icon'></i>
                <p className="services-modal-info">
                 I built jerseymaster shopping website with React
                </p>
              </li>

              <li className='services-modal-service'>
                <i className='uil uil-check-circle
                services-modal-icon'></i>
                <p className="services-modal-info">
                 i built full online-shopping website ecommerce website with react
                </p>
              </li>

              <li className='services-modal-service'>
                <i className='uil uil-check-circle
                services-modal-icon'></i>
                <p className="services-modal-info">
                i built cotorie homepage website with Html & css
                </p>
              </li>

              <li className='services-modal-service'>
                <i className='uil uil-check-circle
                services-modal-icon'></i>
                <p className="services-modal-info">
                i built calculator with Html & css javacript
                </p>
              </li>

              <li className='services-modal-service'>
                <i className='uil uil-check-circle
                services-modal-icon'></i>
                <p className="services-modal-info">
                built my portfolio with React
                </p>
              </li>
            </ul>



          </div>
        </div>
      </div>

      <div className="services-content">
        <div>
          <i className='uil uil-arrow services-icon'></i>
          <h3 className='services-title'>
            BackEnd <br/> Developer</h3>
        </div>

        <span className='services-button' onClick={() => 
        toggleTab(2)}>
          View More
         <i className="uil uil-arrow-right
        service-button-icon"></i></span>

        <div className={toggleState === 2 ? 'services-modal active-modal': "services-modal"}>
          <div className='services-modal-content'>
            <i onClick={() => toggleTab(0)} className="uil uil-times
            services-modal-close"></i>

            <h3 className='services-modal-title'>BackEnd Developer</h3>
            <p className='services-modal-description'>Service
            with 1 year of experience of learning at Semi-colon working on
           and working on some projects
            </p>

            <ul className='services-modal-services grid'>

              <li className='services-modal-service'>
                <i className='uil uil-check-circle
                services-modal-icon'></i>
                <p className="services-modal-info">
                i built credit card validation solution with java.
                </p>
              </li>

              <li className='services-modal-service'>
                <i className='uil uil-check-circle
                services-modal-icon'></i>
                <p className="services-modal-info">
                bankApp in java and python.
                </p>
              </li>

              <li className='services-modal-service'>
                <i className='uil uil-check-circle
                services-modal-icon'></i>
                <p className="services-modal-info">
                DairyApp in java and python.
                </p>
              </li>

              <li className='services-modal-service'>
                <i className='uil uil-check-circle
                services-modal-icon'></i>
                <p className="services-modal-info">
                Sql with microsoft Server.
                </p>
              </li>

              <li className='services-modal-service'>
                <i className='uil uil-check-circle
                services-modal-icon'></i>
                <p className="services-modal-info">
                sudoku game in pyhton
                </p>
              </li>

              

            </ul>



          </div>
        </div>
      </div>

      <div className="services-content">
        <div>
          <i className='uil uil-edit services-icon'></i>
          <h3 className='services-title'>
            IT <br/> Engineer</h3>
        </div>

        <span className='services-button' onClick={() => 
        toggleTab(3)}>
          View More 
        <i className="uil uil-arrow-right
        service-button-icon"></i></span>

        <div className={toggleState === 3 ? 'services-modal active-modal': "services-modal"}>
          <div className='services-modal-content'>
            <i onClick={() => toggleTab(0)} className="uil uil-times
            services-modal-close"></i>

            <h3 className='services-modal-title'>IT Engineer</h3>
            <p className='services-modal-description'>Service
            with more than 2 years of experience at castley and bfree.
            Providing quality work to clients and
            companies.</p>

            <ul className='services-modal-services grid'>

              <li className='services-modal-service'>
                <i className='uil uil-check-circle
                services-modal-icon'></i>
                <p className="services-modal-info">
                I fix lan cables.
                </p>
              </li>

              <li className='services-modal-service'>
                <i className='uil uil-check-circle
                services-modal-icon'></i>
                <p className="services-modal-info">
                I crimple lan cables.
                </p>
              </li>

              <li className='services-modal-service'>
                <i className='uil uil-check-circle
                services-modal-icon'></i>
                <p className="services-modal-info">
                I fix staff with network issues .
                </p>
              </li>

              <li className='service-modal-service'>
                <i className='uil uil-check-circle
                services-modal-icon'></i>
                <p className="services-modal-info">
                I help with the installion of pc password for all staffs.
                </p>
              </li>

              <li className='services-modal-service'>
                <i className='uil uil-check-circle
                services-modal-icon'></i>
                <p className="services-modal-info">
                I help with the installion of Anydesk for all staffs..
                </p>
              </li>

              

            </ul>



          </div>
        </div>
      </div>
    </div>

  </section>
  );
};

export default Services