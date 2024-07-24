import { Outlet } from "react-router-dom";
import "./App.css";
import HeroSection from "./components/Hero Section/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from "./api/api";
import { useEffect, useState } from "react";

function App() {
  const [searchData, useSearchData] = useState();
  const [data, setData] = useState({});

  const generateData = (key, source) => {
    source().then((data) => {
      setData((prevData) => {
        return { ...prevData, [key]: data };
      });
    });
  };

  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("Songs", fetchSongs);
  }, []);

  const { topAlbums = [], newAlbums = [], songs = [] } = data;
  // console.log(data);

  return (
    <>
      <div>
        <Navbar />
        <Outlet
          context={{
            data: { topAlbums, newAlbums, songs },
          }}
        />
      </div>
    </>
  );
}

export default App;
