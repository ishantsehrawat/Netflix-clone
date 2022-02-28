import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";

const Home = (type) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          // `lists${type ? "?type=" + type : ""}${
          //   genre ? "&genre=" + genre : ""
          // }`,
          "lists",
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMThiMWM4YmFkZGU5MzNkNmE1Yjg1NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjA1OTg2NiwiZXhwIjoxNjQ2NDkxODY2fQ.AYFVgxbSWMA9jU5u3FPAM_XigfduTJg8tE3NDkOTick",
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;
