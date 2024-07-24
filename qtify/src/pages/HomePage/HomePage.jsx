import React from "react";
import HeroSection from "../../components/Hero Section/HeroSection";
import { useOutletContext } from "react-router-dom";
import Section from "../../components/Section/Section";
import styles from "./HomePage.module.css";
import { fetchFilters } from "../../api/api";

function HomePage() {
  const { data } = useOutletContext();
  const { topAlbums, newAlbums, songs } = data;

  return (
    <>
      <HeroSection />
      <div className={styles.wrapper}>
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
        <Section
          title="Songs"
          data={songs}
          type="songs"
          filterSource={fetchFilters}
        />
      </div>
    </>
  );
}

export default HomePage;
