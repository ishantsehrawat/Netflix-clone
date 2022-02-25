import "./listitem.scss";
import {
  PlayArrow,
  ThumbDownOutlined,
  Add,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useState } from "react";

export default function Listitem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://youtu.be/4wCH1K-ckZw";

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://ntvb.tmsimg.com/assets/p19458781_v_h8_aa.jpg?w=1280&h=720"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium hic rem eveniet error possimus, neque ex doloribus.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
