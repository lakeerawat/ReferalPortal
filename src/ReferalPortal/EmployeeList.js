import { FcBusinessman } from "react-icons/fc";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import "./style.css";
import { useState } from "react";

const EmpList = (props) => {
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
          <div className="stageDiv1">
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
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default EmpList;
