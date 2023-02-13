import { FcBusinessman } from "react-icons/fc";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import "./style.css";
import { useState } from "react";

const EmpList = (props) => {
  // const Candidates2 = [
  //   {
  //     id:1,
  //     name: "Lakee",
  //     profile: "React Developer",
  //     stage:[
  //       {stageName:"Referred",stageStatus:true, date:"20 july 2010"},
  //     {stageName:"Interviewed",stageStatus:true, date:"22 july 2010"},
  //     {stageName:"Hired",stageStatus:true, date:"25 july 2010"},
  //     {stageName:"joined",stageStatus:true, date:"01 Aug 2010"},
  //   ],
  //     dayleft: "20",
  //     status: "joined",
  //     Reward: "$200",
  //   },
  //   {
  //     id:2,
  //     name: "Aman",
  //     profile: "Nodejs Developer",
  //     stage:[
  //       {stageName:"Referred",stageStatus:false, date:""},
  //     {stageName:"Interviewed",stageStatus:false, date:""},
  //     {stageName:"Hired",stageStatus:false, date:""},
  //     {stageName:"joined",stageStatus:false, date:""},
  //   ],
  //     dayleft: "20",
  //     status: "rejected",
  //     Reward: "$200",
  //   },
  //   {
  //     id:3,
  //     name: "Abhishek  Tiwari",
  //     profile: "Dotnet Developer",
  //     stage:[
  //       {stageName:"Referred",stageStatus:true, date:"20 july 2010"},
  //     {stageName:"Interviewed",stageStatus:true, date:"22 july 2010"},
  //     {stageName:"Hired",stageStatus:false, date:""},
  //     {stageName:"joined",stageStatus:false, date:""},
  //   ],
  //     dayleft: "20",
  //     status: "Interviewed",
  //     Reward: "$200",
  //   },
  //   {
  //     id:4,
  //     name: "Shubham Keshri",
  //     profile: "Angular Developer",
  //     stage:[
  //       {stageName:"Referred",stageStatus:true, date:"20 july 2010"},
  //     {stageName:"Interviewed",stageStatus:true, date:"22 july 2010"},
  //     {stageName:"Hired",stageStatus:true, date:"25 july 2010"},
  //     {stageName:"joined",stageStatus:true, date:"01 Aug 2010"},
  //   ],
  //     dayleft: "0",
  //     status: "reward",
  //     Reward: "$2000",
  //   },
  //   {
      
  //     id:5,
  //     name: "Surya Srivastava",
  //     profile: "MEARN Developer",
  //     stage:[
  //       {stageName:"Referred",stageStatus:true, date:"20 july 2010"},
  //     {stageName:"Interviewed",stageStatus:true, date:"22 july 2010"},
  //     {stageName:"Hired",stageStatus:true, date:"25 july 2010"},
  //     {stageName:"joined",stageStatus:false, date:""},
  //   ],
  //     dayleft: "",
  //     status: "hired",
  //     Reward: "$200",
  //   },
  //   {
  //     id:6,
  //     name: "Ajay Kumar",
  //     profile: "React Native Developer",
  //     stage:[
  //       {stageName:"Referred",stageStatus:true, date:"20 july 2010"},
  //     {stageName:"Interviewed",stageStatus:true, date:"22 july 2010"},
  //     {stageName:"Hired",stageStatus:true, date:"25 july 2010"},
  //     {stageName:"joined",stageStatus:true, date:"01 Aug 2010"},
  //   ],
  //     dayleft: "13",
  //     status: "joined",
  //     Reward: "$200",
  //   },
  //   {
  //     id:7,
  //     name: "Hirdesh Malviaya",
  //     profile: "Frontend Developer",
  //     stage:[
  //       {stageName:"Referred",stageStatus:true, date:"20 july 2010"},
  //     {stageName:"Interviewed",stageStatus:true, date:"22 july 2010"},
  //     {stageName:"Hired",stageStatus:false, date:""},
  //     {stageName:"joined",stageStatus:false, date:""},
  //   ],
  //     dayleft: "",
  //     status: "interviewed",
  //     Reward: "$200",
  //   },
  //   {
  //     id:8,
  //     name: "Harsh Kumar",
  //     profile: "Flutter Developer",
  //     stage:[
  //       {stageName:"Referred",stageStatus:true, date:"20 dec 2022"},
  //     {stageName:"Interviewed",stageStatus:true, date:"22 dec 2022"},
  //     {stageName:"Hired",stageStatus:true, date:"30 dec 2022"},
  //     {stageName:"joined",stageStatus:true, date:"10 jan 2023"},
  //   ],
  //     dayleft: "0",
  //     status: "reward",
  //     Reward: "$200",
  //   },
  // ];
 const val = props.props;
  const [display, setDisplay] = useState(false);
  return (
    <div className="EmployeeList">
      <div className="empDiv1">
        {display ? (
          <AiOutlineDown
            size={25}
            onClick={() => {
              setDisplay(!display);
            }}
          />
        ) : (
          <AiOutlineLeft
            size={25}
            onClick={() => {
              setDisplay(!display);
            }}
          />
        )}

        <div className="ImageDiv">
          <FcBusinessman size={50} />
        </div>
        <div className="NameAndProfileDiv">
          <span className="nameSpan">{val.name}</span>

          <span className="profileNameSpan">{val.profile}</span>
        </div>
      </div>
      <div className={`${display ? "DetailDivShow" : "DetailDivHide"}`}>
        <div className="vLine2"></div>
        <div className="empDiv2">
          {val.stage.map((val2,j)=>{
            return (<div>
             <div className="stageDiv1" key={j}>
            {val2.status === val2.stageName ? (
              <div className="ImageDiv2">
                <FcBusinessman size={30} />
              </div>
            ) : (
              <div className={`${val2.stageStatus ? "dot" : "dot2"}`}>
                {val.stageStatus ? <span>✓</span> : null}
              </div>
            )}
            <div className="statusDiv">
            <p className="stagePara">{val2.stageName}</p>
            <p className="stageDate">{val2.date}</p>
            </div>
          </div>
          {val.stage.length-1 > j ? 
          <div className="vLine"></div> : null }
          </div>
            )
        })}
          {/* <div className="stageDiv1">
            {val.status === "referred" ? (
              <div className="ImageDiv2">
                <FcBusinessman size={30} />
              </div>
            ) : (
              <div className={`${val.Referred ? "dot" : "dot2"}`}>
                {val.Referred ? <span>✓</span> : null}
              </div>
            )}
            <div className="statusDiv">
            <p className="stagePara">Referred</p>
            <p className="stageDate">{val.ReferredDate}</p>
            </div>
          </div>
          <div className="vLine"></div>
          <div className="stageDiv1">
            {val.status === "interviewed" ? (
              <div className="ImageDiv2">
                <FcBusinessman size={30} />
              </div>
            ) : (
              <div className={`${val.Interviewed ? "dot" : "dot2"}`}>
                {val.Interviewed ? <span>✓</span> : null}
              </div>
            )}
            <div className="statusDiv">
            <p className="stagePara">Interviewed</p>
            <p className="stageDate">{val.InterviewedDate}</p>
          </div>
          </div>
          <div className="vLine"></div>

          <div className="stageDiv1">
            {val.status === "hired" ? (
              <div className="ImageDiv2">
                <FcBusinessman size={30} />
              </div>
            ) : (
              <div className={`${val.Hired ? "dot" : "dot2"}`}>
                {val.Hired ? <span>✓</span> : null}
              </div>
            )}
                        <div className="statusDiv">
            <p className="stagePara">Hired</p>
            <p className="stageDate">{val.HiredDate}</p>
          </div>
          </div>
          <div className="vLine"></div>
          <div className="stageDiv1">
            {val.status === "joined" ? (
              <div className="ImageDiv2">
                <FcBusinessman size={30} />
              </div>
            ) : (
              <div className={`${val.Joined ? "dot" : "dot2"}`}>
                {val.Joined ? <span>✓</span> : null}
              </div>
            )}
                        <div className="statusDiv">
            <p className="stagePara">Joined</p>
            <p className="stageDate">{val.JoinedDate}</p>
          </div>
          </div> */}
          {/* <div className="vLine"></div> */}
          {val.status === "joined" || "reward" ? (<div>
            <div className="vLine"></div>
          <div className={`${
              val.status === "joined" ? "Dollar" : "hideDollar"
            }`}>
            <span className="dollarSpan">$</span>
            <span className="dateSpan">{val.dayleft} days to go</span>
          </div>
          <div className={`${
              val.status === "reward" ? "hideDollar" : "VDashedLine"
            }`}></div>

          <div
            className={`${
              val.status === "reward" ? "stageReward" : val.status === "joined" ? "stageReward2" : "stageReward3"
            }`}
          >
            {val.Reward}
          </div> 
          </div>) :null
          }
        </div>
      </div>
    </div>
      
  );
};

export default EmpList;
