import React from "react";
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

