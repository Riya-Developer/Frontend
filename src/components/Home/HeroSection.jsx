import React from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";
import { IoMdSettings, IoIosRocket, IoMdAnalytics   } from "react-icons/io";
import { IoSchoolSharp, IoPersonCircleOutline  } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import { CiBadgeDollar } from "react-icons/ci";
import { MdDesignServices } from "react-icons/md";


const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "Remote",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "MNC",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "Enginnering",
      icon: <IoMdSettings  />,
    },
    {
      id: 4,
      title: "HR",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "Internship",
      icon: <IoSchoolSharp  />,
    }, 
    {
      id: 5,
      title: "Startup",
      icon: <IoIosRocket />,
    },
  ];
    const details2 = [
    {
      id: 1,
      title: "Analytics",
      icon: <IoMdAnalytics  />,
    },
    {
      id: 2,
      title: "Project Management",
      icon: <FaRegCircleCheck />,
    },
    {
      id: 3,
      title: "Freshers",
      icon: <IoPersonCircleOutline   />,
    },
    {
      id: 4,
      title: "Software & IT",
      icon: <GrTechnology  />,
    },
    {
      id: 4,
      title: "Fortune 500",
      icon: <CiBadgeDollar  />,
    }, 
    {
      id: 5,
      title: "Graphics & Design",
      icon: <MdDesignServices  />,
    }, 
  ];
  return (
    <>
      <div className="heroSection">
        <div className="container">
          <div className="title">
            <h1>Find your </h1>
            <h1>dream job now</h1>
            <p>
              7 lakh+ jobs for you to explore
            </p>
          </div>
          <div className="image">
            <img src="/heroS3.jpg" alt="hero" />
          </div>
        </div>
        <div className="details">
          {details.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="icon">{element.icon}</div>
                <div className="content">
                  <p>{element.title}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="details">
          {details2.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="icon">{element.icon}</div>
                <div className="content">
                  <p>{element.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
