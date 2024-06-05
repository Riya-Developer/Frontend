import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Context } from "../../main";
const PostJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [salaryFrom, setSalaryFrom] = useState("");
  const [salaryTo, setSalaryTo] = useState("");
  const [fixedSalary, setFixedSalary] = useState("");
  const [salaryType, setSalaryType] = useState("default");

  const { isAuthorized, user } = useContext(Context);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleJobPost = async (e) => {
    e.preventDefault();
    if (salaryType === "Fixed Salary") {
      setSalaryFrom("");
      setSalaryFrom("");
    } else if (salaryType === "Ranged Salary") {
      setFixedSalary("");
    } else {
      setSalaryFrom("");
      setSalaryTo("");
      setFixedSalary("");
    }
    await axios
      .post(
        "http://localhost:4000/api/v1/job/post",
        fixedSalary.length >= 4
          ? {
              title,
              description,
              category,
              country,
              city,
              location,
              fixedSalary,
            }
          : {
              title,
              description,
              category,
              country,
              city,
              location,
              salaryFrom,
              salaryTo,
            },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setIsSubmitted(true); 
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const navigateTo = useNavigate();
  if (!isAuthorized || (user && user.role !== "Employer")) {
    navigateTo("/");
  }

  return (
    <>
      <div className="job_post page">
        <div className="container">
          <h3>POST A NEW JOB</h3>
          <form onSubmit={handleJobPost}>
            <div className="wrapper">
              <input
                type="text"
                value={isSubmitted ? "" : title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Job Title"
              />
              <select
                value={isSubmitted ? "" :category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="Full-stack Development">Full-stack Development</option>
                <option value="iOS App Development">iOS App Development</option>
                <option value="Android App Development">
                  Android App Development
                </option>
                <option value="Graphics and Designing">Graphics and Designing</option>
                <option value="Data Analyst">
                  Data Analyst
                </option>
                <option value="Business and Management">Business and Management</option>
                <option value="Database Aministrator">
                  Database Aministrator
                </option>
                <option value="Product and Project Management">
                  Product and Project Management
                </option>
                <option value="Backend Development">
                  Backend Development
                </option>
                <option value="Frontend Development">Frontend Development</option>
                <option value="IT Coordinator">IT Coordinator</option>
              </select>
            </div>
            <div className="wrapper">
              <input
                type="text"
                value={isSubmitted ? "" :country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Country"
              />
              <input
                type="text"
                value={isSubmitted ? "" :city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"
              />
            </div>
            <input
              type="text"
              value={isSubmitted ? "" :location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
            />
            <div className="salary_wrapper">
              <select
                value={isSubmitted ? "" :salaryType}
                onChange={(e) => setSalaryType(e.target.value)}
              >
                <option value="default">Select Salary Type</option>
                <option value="Fixed Salary">Fixed Salary</option>
                <option value="Ranged Salary">Ranged Salary</option>
              </select>
              <div>
                {salaryType === "default" ? (
                  <p>Please provide Salary Type *</p>
                ) : salaryType === "Fixed Salary" ? (
                  <input
                    type="number"
                    placeholder="Enter Fixed Salary"
                    value={isSubmitted ? "" :fixedSalary}
                    onChange={(e) => setFixedSalary(e.target.value)}
                  />
                ) : (
                  <div className="ranged_salary">
                    <input
                      type="number"
                      placeholder="Salary From"
                      value={isSubmitted ? "" :salaryFrom}
                      onChange={(e) => setSalaryFrom(e.target.value)}
                    />
                    <input
                      type="number"
                      placeholder="Salary To"
                      value={isSubmitted ? "" :salaryTo}
                      onChange={(e) => setSalaryTo(e.target.value)}
                    />
                  </div>
                )}
              </div>
            </div>
            <textarea
              rows="10"
              value={isSubmitted ? "" :description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Job Description"
            />
            <button type="submit">Post Job</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostJob;
