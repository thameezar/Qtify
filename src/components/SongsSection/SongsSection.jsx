import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "../Carousel/Carousel"; // Carousel component to display songs
import styles from "./SongsSection.module.css"; // Import styles

function SongsSection() {
  const [songs, setSongs] = useState([]); // For storing songs data
  const [genres] = useState(["All", "Rock", "Pop", "Jazz", "Blues"]); // Hardcoded genres list
  const [selectedGenre, setSelectedGenre] = useState("All"); // Default genre is "All"

  useEffect(() => {
    // Fetch songs data
    axios
      .get("https://qtify-backend-labs.crio.do/songs")
      .then((response) => {
        setSongs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching songs:", error);
      });
  }, []);

  // Filter songs based on the selected genre
  const filteredSongs = selectedGenre === "All"
    ? songs
    : songs.filter((song) => song.genre === selectedGenre);

  return (
    <div className={styles.songsSection}>
      <h2>Songs</h2>

      {/* Genre Tabs (Without the box) */}
      <div className={styles.genreTabs}>
        {genres.map((genre) => (
          <span
            key={genre}
            className={`${styles.genreTab} ${selectedGenre === genre ? styles.selected : ""}`}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </span>
        ))}
      </div>

      {/* Render Carousel with filtered songs */}
      <div className={styles.carouselContainer}>
        <Carousel albums={filteredSongs} />
      </div>
    </div>
  );
}

export default SongsSection;
