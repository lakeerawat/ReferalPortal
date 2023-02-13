import { FcBusinessman } from "react-icons/fc";
import "./style.css";
const EmpListDesktop = (props) => {
    const val = props.props;
    return (
        <div className={`${val.id%2 === 0 ? "displayDesktop" : "displayDesktop2"}`}>
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
          <div className={`${val.status === "rejected" ? "hLine2" : "hLine"}`}></div>
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
          <div className={`${val.status === "rejected" ? "hLine2" : "hLine"}`}></div>

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
          <div className={`${val.status === "rejected" ? "hLine2" : "hLine"}`}></div>

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
            <div className={`${val.status === "rejected" ? "hLine2" : "hLineLastDiv"}`}></div>
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
      );
}
 
export default EmpListDesktop;