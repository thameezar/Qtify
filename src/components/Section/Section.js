import React, { useEffect, useState } from "react";
import axios from "axios";
import AlbumCard from "../Cards/AlbumCard";
import Carousel from "../Carousel/Carousel"; // Import the Carousel component
import styles from "./Section.module.css";

function Section() {
  const [albums, setAlbums] = useState([]); // For Top Albums
  const [newSongs, setNewSongs] = useState([]); // For New Songs
  const [collapsed, setCollapsed] = useState(false); // State for Collapse functionality
  const [collapsedNewSongs, setCollapsedNewSongs] = useState(false); // State for Collapse functionality for New Songs

  useEffect(() => {
    // Fetch Top Albums
    axios
      .get("https://qtify-backend-labs.crio.do/albums/top")
      .then((response) => {
        setAlbums(response.data);
      })
      .catch((error) => {
        console.error("Error fetching top albums:", error);
      });

    // Fetch New Songs
    axios
      .get("https://qtify-backend-labs.crio.do/albums/new")
      .then((response) => {
        setNewSongs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching new songs:", error);
      });
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className={styles.sectionContainer}>
      {/* Top Albums Section */}
      <div className={styles.sectionHeader}>
        <h2>Top Albums</h2>
        <button
          className={styles.collapseButton}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? "Show All" : "Collapse"}
        </button>
      </div>

      {/* Conditionally render the Top Albums using either Grid or Carousel */}
      {collapsed ? (
        <Carousel albums={albums} />
      ) : (
        <div className={styles.cardContainer}>
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      )}

      {/* New Songs Section */}
      <div className={styles.sectionHeader}>
        <h2>New Albums</h2>
        <button
          className={styles.collapseButton}
          onClick={() => setCollapsedNewSongs(!collapsedNewSongs)}
        >
          Show all
        </button>
      </div>

      {/* New Albums rendering */}
      {collapsedNewSongs ? (
        <Carousel albums={newSongs} />
      ) : (
        <div className={styles.cardContainer}>
          {newSongs.map((song) => (
            <AlbumCard key={song.id} album={song} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Section;
