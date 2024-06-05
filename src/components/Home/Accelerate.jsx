import React from "react";
import { BsLightningCharge } from "react-icons/bs";
import { IoDocumentSharp } from "react-icons/io5";
import { FaRegPenToSquare } from "react-icons/fa6";

const Accelerate = () => {
  return (
    <>
      <div className="accelerate">
        <div className="container">
          <h3>Accelerate your job search with premium services</h3>
          <p>Services to help you get hired, faster: from preparing your CV, getting recruiter attention, finding the right jobs, and more!</p>
          <div className="banner">
            <div className="card">
              <BsLightningCharge />
              <p>Resume Writing </p>
              <p>
                  Showcase your skills & achievements with a professionally written resume
              </p>
            </div>
            <div className="card">
              <IoDocumentSharp />
              <p>Priority Applicants</p>
              <p>
                Be a Priority Applicant and Increase your chances of getting a call
              </p>
            </div>
            <div className="card">
              <FaRegPenToSquare />
              <p>Resume Display</p>
              <p>
                Get a Featured Profile & increase your visibility to recruiters up to 3 times
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accelerate;
