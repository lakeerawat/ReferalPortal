import "./style.css";
import { FcBusinessman } from "react-icons/fc";
import React, { useState } from "react";
import EmpList from "./EmployeeList";

function HomePage() {
  const Candidates = [
    {
      name: "Lakee",
      picture_url: "lakee.jpg",
      profile: "React Developer",
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
      name: "Aman",
      picture_url: "lakee.jpg",
      profile: "Nodejs Developer",
      Referred: false,
      Interviewed: false,
      Hired: false,
      Joined: false,
      dayleft: "",
      status: "",
      Reward: "$200",
      ReferredDate:'',
      InterviewedDate:'',
      HiredDate:'',
      JoinedDate:'',
    },
    {
      name: "Abhishek  Tiwari",
      picture_url: "lakee.jpg",
      profile: "Dotnet Developer",
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
      name: "Shubham Keshri",
      picture_url: "lakee.jpg",
      profile: "Angular Developer",
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
      name: "Surya Srivastava",
      picture_url: "lakee.jpg",
      profile: "MEARN Developer",
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
      name: "Ajay Kumar",
      picture_url: "lakee.jpg",
      profile: "React Native Developer",
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
      name: "Hirdesh Malviaya",
      picture_url: "lakee.jpg",
      profile: "Frontend Developer",
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
      name: "Harsh Kumar",
      picture_url: "lakee.jpg",
      profile: "Flutter Developer",
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
            </div>{" "}
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
            {Candidates.filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            }).map((val, i) => {
              return (
                <div className="empListDiv" key={i}>
                  <div className="displayPhoneview">
                    <EmpList props={val} />
                  </div>
                  <div className="displayDesktop">
                    <div className="empDiv1">
                      <div className="ImageDiv">
                        <FcBusinessman size={50} />
                      </div>
                      <div className="NameAndProfileDiv">
                        <span className="nameSpan">{val.name}</span>
                        <span className="profileNameSpan">{val.profile}</span>
                      </div>
                    </div>
                    <div className="empDiv2">
                      {val.status === "referred" ? (
                        <div className="spanDiv">
                          <div className="ImageDiv2">
                            <FcBusinessman size={30} />
                          </div>
                        </div>
                      ) : (
                        <div className="spanDiv">
                          <span className={`${val.Referred ? "dot" : "dot2"}`}>
                            {val.Referred ? <span>✓</span> : null}
                          </span>
                        </div>
                      )}
                      <div className="hLine"></div>
                      {val.status === "interviewed" ? (
                        <div className="spanDiv">
                          <div className="ImageDiv2">
                            <FcBusinessman size={30} />
                          </div>
                        </div>
                      ) : (
                        <div className="spanDiv">
                          <span
                            className={`${val.Interviewed ? "dot" : "dot2"}`}
                          >
                            {val.Interviewed ? <span>✓</span> : null}
                          </span>
                        </div>
                      )}
                      <div className="hLine"></div>

                      {val.status === "hired" ? (
                        <div className="spanDiv">
                          <div className="ImageDiv2">
                            <FcBusinessman size={30} />
                          </div>
                        </div>
                      ) : (
                        <div className="spanDiv">
                          <span className={`${val.Hired ? "dot" : "dot2"}`}>
                            {val.Hired ? <span>✓</span> : null}
                          </span>
                        </div>
                      )}
                      <div className="hLine"></div>

                      {val.status === "joined" || val.status === "reward" ? (
                        <div className="spanDiv">
                          <div className="ImageDiv2">
                            <FcBusinessman size={30} />
                          </div>
                        </div>
                      ) : (
                        <div className="spanDiv">
                          <span className={`${val.Joined ? "dot" : "dot2"}`}>
                            {val.Joined ? <span>✓</span> : null}
                          </span>
                        </div>
                      )}
                      {val.status === "reward" ? (
                        <div className="hLine"></div>
                      ) : val.Joined ? (
                        <div className="hLineMainDiv">
                        <div className="hLine2Div">
                          <div className="greenLine"></div> <span>$</span>
                          <div className="greyDotted"></div>
                            </div>
                            <div className="daysDiv">
                            20 days to go
                            </div>
                        </div>
                      ) : (
                        <div className="hDottedLine"></div>
                      )}

                      <div className="spanDiv">
                        <div
                          className={`${
                            val.status === "reward"
                              ? "stageReward"
                              : val.status === "joined" ?"stageReward3"
                              : "stageReward2"
                          }`}
                        >
                          {val.Reward}
                        </div>
                      </div>
                    </div>
                  </div>
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
