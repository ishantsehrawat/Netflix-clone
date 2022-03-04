import "./listitem.scss";
import {
  PlayArrow,
  ThumbDownOutlined,
  Add,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Listitem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMThiMWM4YmFkZGU5MzNkNmE1Yjg1NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjA1OTg2NiwiZXhwIjoxNjQ2NDkxODY2fQ.AYFVgxbSWMA9jU5u3FPAM_XigfduTJg8tE3NDkOTick",
          },
        });
        if (res.data !== null) {
          setMovie(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  console.log(movie.img);

  return (
    <Link to={{ pathname: "/watch", movie: movie }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.img} alt="" />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>2 hour and 50 minutes</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
