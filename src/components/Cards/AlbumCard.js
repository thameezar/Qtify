/*import React from "react";
import { Chip } from "@mui/material";
import styles from "./AlbumCard.module.css";

function AlbumCard({ album }) {
  return (
    <div className={styles.card}>
      <img
        src={album.image}
        alt={album.title}
        className={styles.albumImage}
      />
      <div className={styles.cardContent}>
        <Chip label={`${album.follows} Follows`}  className={styles.chip} />
      </div>
      <h3 className={styles.albumTitle}>{album.title}</h3>
    </div>
    
  );
}

export default AlbumCard;

*/
import React from "react";
import { Chip } from "@mui/material";
import styles from "./AlbumCard.module.css";

function AlbumCard({ album }) {
  // Check if this is a song or album by checking if the "genre" property exists
  const isSong = album.hasOwnProperty("genre"); // Songs have a 'genre' property
  
  return (
    <div className={styles.card}>
      <img
        src={album.image}
        alt={album.title}
        className={styles.albumImage}
      />
      <div className={styles.cardContent}>
        {/* Conditionally display "Likes" for songs and "Follows" for albums */}
        <Chip
          label={`${isSong ? album.likes : album.follows} ${isSong ? "Likes" : "Follows"}`}
          className={styles.chip}
        />
      </div>
      <h3 className={styles.albumTitle}>{album.title}</h3>
    </div>
  );
}

export default AlbumCard;

