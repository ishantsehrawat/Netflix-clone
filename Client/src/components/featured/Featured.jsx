import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./featured.scss";

export default function Featured(type) {
  // console.log(type);
  const [content, setContent] = useState({});
  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMThiMWM4YmFkZGU5MzNkNmE1Yjg1NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjA1OTg2NiwiZXhwIjoxNjQ2NDkxODY2fQ.AYFVgxbSWMA9jU5u3FPAM_XigfduTJg8tE3NDkOTick",
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);

  // console.log(content);
  // console.log(type);
  return (
    <div className="featured">
      {type.type.type && (
        <div className="category">
          <span>{type?.type?.type === "movies" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            // onClick={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img width="100%" src={content.img} alt="" />
      <div className="info">
        <img src={content.imgtitle} alt="" />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
