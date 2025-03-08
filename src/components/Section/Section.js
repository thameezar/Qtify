import React, { useEffect, useState } from "react";
import axios from "axios";
import AlbumCard from "../Cards/AlbumCard"; // Ensure this path is correct for your project
import styles from "./Section.module.css";

function Section() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get("https://qtify-backend-labs.crio.do/albums/top")
      .then((response) => {
        setAlbums(response.data);
      })
      .catch((error) => {
        console.error("Error fetching albums data:", error);
      });
  }, []);

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <h2>Top Albums</h2>
        <button className={styles.collapseButton}>Collapse</button>
      </div>
      <div className={styles.cardContainer}>
        {albums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
}

export default Section;


