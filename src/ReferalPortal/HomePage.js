import "./style.css";
import React, { useState } from "react";
import EmpList from "./EmployeeList";
import EmpListDesktop from "./EmpListDesktop";

function HomePage() {
  const Candidates = [
    {
      id:1,
      name: "Lakee",
      profile: "React Developer",
      stage:[
        {stageName:"Referred",stageStatus:true, date:"20 july 2010"},
      {stageName:"Interviewed",stageStatus:true, date:"22 july 2010"},
      {stageName:"Hired",stageStatus:true, date:"25 july 2010"},
      {stageName:"proccess1",stageStatus:true, date:"25 july 2010"},
      {stageName:"processs2",stageStatus:true, date:"25 july 2010"},
      {stageName:"joined",stageStatus:true, date:"01 Aug 2010"},
    ],
      Referred: true,
      Interviewed: true,
      Hired: true,
      Joined: true,
      dayleft: "20",
      status: "joined",
      Reward: "$200",
      ReferredDate:'20 july 2010',
      InterviewedDate:'22 july 2010',
      HiredDate:'25 july 2010',
      JoinedDate:'1 August 2010',

    },
    {
      id:2,
      name: "Aman",
      profile: "Nodejs Developer",
      stage:[
        {stageName:"Referred",stageStatus:false, date:""},
    ],
      Referred: false,
      Interviewed: false,
      Hired: false,
      Joined: false,
      dayleft: "",
      status: "rejected",
      Reward: "$200",
      ReferredDate:'',
      InterviewedDate:'',
      HiredDate:'',
      JoinedDate:'',
    },
    {
      id:3,
      name: "Abhishek  Tiwari",
      profile: "Dotnet Developer",
      stage:[
        {stageName:"Referred",stageStatus:true, date:"20 july 2010"},
      {stageName:"Interviewed",stageStatus:true, date:"22 july 2010"},
      {stageName:"Hired",stageStatus:false, date:""},
      {stageName:"joined",stageStatus:false, date:""},
    ],
      Referred: true,
      Interviewed: true,
      Hired: false,
      Joined: false,
      dayleft: "",
      status: "interviewed",
      Reward: "$200",
      ReferredDate:'20 june 2010',
      InterviewedDate:'22 june 2010',
      HiredDate:'',
      JoinedDate:'',
    },
    {
      id:4,
      name: "Shubham Keshri",
      profile: "Angular Developer",
      stage:[
        {stageName:"Referred",stageStatus:true, date:"20 july 2010"},
      {stageName:"Interviewed",stageStatus:true, date:"22 july 2010"},
      {stageName:"Hired",stageStatus:true, date:"25 july 2010"},
      {stageName:"joined",stageStatus:true, date:"01 Aug 2010"},
    ],
      Referred: true,
      Interviewed: true,
      Hired: true,
      Joined: true,
      dayleft: "0",
      status: "reward",
      Reward: "$2000",
      ReferredDate:'2 july 2010',
      InterviewedDate:'5 july 2010',
      HiredDate:'10 july 2010',
      JoinedDate:'22 july 2010',
    },
    {
      
      id:5,
      name: "Surya Srivastava",
      profile: "MEARN Developer",
      stage:[
        {stageName:"Referred",stageStatus:true, date:"20 july 2010"},
      {stageName:"Interviewed",stageStatus:true, date:"22 july 2010"},
      {stageName:"Hired",stageStatus:true, date:"25 july 2010"},
      {stageName:"joined",stageStatus:false, date:""},
    ],
      Referred: true,
      Interviewed: true,
      Hired: true,
      Joined: false,
      dayleft: "",
      status: "hired",
      Reward: "$200",
      ReferredDate:'20 jan 2011',
      InterviewedDate:'22 jan 2011',
      HiredDate:'25 jan 2011',
      JoinedDate:'',
    },
    {
      id:6,
      name: "Ajay Kumar",
      profile: "React Native Developer",
      stage:[
        {stageName:"Referred",stageStatus:true, date:"20 july 2010"},
      {stageName:"Interviewed",stageStatus:true, date:"22 july 2010"},
      {stageName:"Hired",stageStatus:true, date:"25 july 2010"},
      {stageName:"joined",stageStatus:true, date:"01 Aug 2010"},
    ],
      Referred: true,
      Interviewed: true,
      Hired: true,
      Joined: true,
      dayleft: "13",
      status: "joined",
      Reward: "$200",
      ReferredDate:'12 feb 2012',
      InterviewedDate:'14 feb 2012',
      HiredDate:'19 feb 2012',
      JoinedDate:'1 march 2012',
    },
    {
      id:7,
      name: "Hirdesh Malviaya",
      profile: "Frontend Developer",
      stage:[
        {stageName:"Referred",stageStatus:true, date:"20 july 2010"},
      {stageName:"Interviewed",stageStatus:true, date:"22 july 2010"},
      {stageName:"Hired",stageStatus:false, date:""},
      {stageName:"joined",stageStatus:false, date:""},
    ],
      Referred: true,
      Interviewed: true,
      Hired: false,
      Joined: false,
      dayleft: "",
      status: "interviewed",
      Reward: "$200",
      ReferredDate:'2 dec 2010',
      InterviewedDate:'4 dec 2010',
      HiredDate:'',
      JoinedDate:'',
    },
    {
      id:8,
      name: "Harsh Kumar",
      profile: "Flutter Developer",
      stage:[
        {stageName:"Referred",stageStatus:true, date:"20 dec 2022"},
      {stageName:"Interviewed",stageStatus:true, date:"22 dec 2022"},
      {stageName:"Hired",stageStatus:true, date:"30 dec 2022"},
      {stageName:"joined",stageStatus:true, date:"10 jan 2023"},
    ],
      Referred: true,
      Interviewed: true,
      Hired: true,
      Joined: true,
      dayleft: "0",
      status: "reward",
      Reward: "$200",
      ReferredDate:'20 dec 2022',
      InterviewedDate:'22 dec 2022',
      HiredDate:'30 dec 2022',
      JoinedDate:'10 jan 2023',
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <div className="MainDiv">
        <div className="UpperDiv">
          <div className="insideUpperDiv">
            <h1>Referral Status</h1>
            <div className="SearchBar">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
              <p>Searching for: {searchTerm}</p>
            </div>
          </div>
        </div>
        <div className="LowerDiv">
          <div className="ListNav">
            <div className="ListNavDiv1">
              <span>Candidate</span>
            </div>
            <div className="ListNavDiv2">
              <span>Referred</span>
              <span>Interviewed</span>
              <span>Hired</span>
              <span>Joined</span>
              <span>Reward</span>
            </div>
          </div>
          <div className="displayMultipleList">
            {Candidates?.filter((val) => {
              if (searchTerm === "") {
                return val;
              } else {
                if (
                  val.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                } else{
                  return null;
                }
              }
              
              
            }).map((val, i) => {
              return (
                <div className="empListDiv" key={i}>
                  <div className="displayPhoneview">
                    <EmpList props={val} />
                  </div>
<EmpListDesktop props={val} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
