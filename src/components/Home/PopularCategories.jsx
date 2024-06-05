import React from "react";
import { TbAppsFilled } from "react-icons/tb";
import { FaReact,FaChalkboardTeacher  } from "react-icons/fa";
import { RiStackFill } from "react-icons/ri";
import { GrApps } from "react-icons/gr";
import { SiAzuredevops } from "react-icons/si";
import { BiTestTube } from "react-icons/bi";
import { BsDatabaseFillGear } from "react-icons/bs";

const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Full Stack Developer",
      subTitle: "17.4K+ Jobs",
      icon: <RiStackFill  />,
    },
    {
      id: 2,
      title: "Mobile App Development",
      subTitle: "2.1K+ Jobs",
      icon: <GrApps />,
    },
    {
      id: 3,
      title: "Front End Developer",
      subTitle: "3.1K+ Jobs",
      icon: <FaReact />,
    },
    {
      id: 4,
      title: "DevOps Engineer",
      subTitle: "1.9K+ Jobs",
      icon: <SiAzuredevops />,
    },

    {
      id: 5,
      title: "Engineering Manager",
      subTitle: "1.1K+ Jobs",
      icon: <TbAppsFilled />,
    },
    {
      id: 6,
      title: "Teachnical Lead",
      subTitle: "9.3K+ Jobs",
      icon: <FaChalkboardTeacher />,
    },
    {
      id: 7,
      title: "Automation Test Enginner",
      subTitle: "9.1K+ Jobs",
      icon: <BiTestTube />,
    },
    {
      id: 8,
      title: "Data Scientist",
      subTitle: "903+ Jobs",
      icon: <BsDatabaseFillGear />,
    },

  ];
  return (
    <div className="categories">
      <h3>Discover jobs across popular roles</h3>
      <div className="banner">
        {categories.map((element) => {
          return (
            <div className="card" key={element.id}>
              <div className="icon">{element.icon}</div>
              <div className="text">
                <p>{element.title}</p>
                <p>{element.subTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularCategories;
