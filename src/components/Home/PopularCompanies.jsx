import React from "react";
import { FaMicrosoft, FaApple } from "react-icons/fa";
import { SiTesla, SiCognizant, SiHitachi, SiRelianceindustrieslimited } from "react-icons/si";
import { GrAmazon } from "react-icons/gr";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Amazon",
      location: "Denmark",
      openPositions: 10,
      icon: <GrAmazon  />,
    },
    {
      id: 2,
      title: "Cognizant",
      location: "Banglore",
      openPositions: 5,
      icon: <SiCognizant  />,
    },
    {
      id: 3,
      title: "Hitachi Energy",
      location: "Delhi, Mumbai, Pune",
      openPositions: 20,
      icon: <SiHitachi  />,
    },    
    {
      id: 4,
      title: "Reliance Industries",
      location: "Remote",
      openPositions: 20,
      icon: <SiRelianceindustrieslimited  />,
    },
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3>Featured companies actively hiring</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button>Open Positions {element.openPositions}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
