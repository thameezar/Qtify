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
        <h3>{album.title}</h3>
        <Chip label={`${album.followCount} Follows`} color="primary" className={styles.chip} />
      </div>
    </div>
  );
}

export default AlbumCard;

