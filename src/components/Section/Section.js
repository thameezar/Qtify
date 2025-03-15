/*import React, { useEffect, useState } from "react";
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

*/
import React, { useEffect, useState } from "react";
import axios from "axios";
import AlbumCard from "../Cards/AlbumCard"; // Ensure this path is correct for your project
import styles from "./Section.module.css";

function Section({ title, apiEndpoint }) {
  const [albums, setAlbums] = useState([]);
  
  useEffect(() => {
    axios
      .get(apiEndpoint) // Ensure the API call is correct
      .then((response) => {
        console.log(response.data); // Log response data to check its structure
        setAlbums(response.data); // Store the album data in the state
      })
      .catch((error) => {
        console.error("Error fetching albums data:", error);
      });
  }, [apiEndpoint]);

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <h2>{title}</h2>
        <button className={styles.collapseButton}>Collapse</button>
      </div>
      <div className={styles.cardContainer}>
        {albums.length > 0 ? (
          albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))
        ) : (
          <p>No albums found.</p>
        )}
      </div>
    </div>
  );
}

export default Section;

