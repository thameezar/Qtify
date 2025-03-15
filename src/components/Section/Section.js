import React, { useEffect, useState } from "react";
import axios from "axios";
import AlbumCard from "../Cards/AlbumCard"; // Ensure this path is correct for your project
import styles from "./Section.module.css";

function Section() {
  const [albums, setAlbums] = useState([]);

  const apiEndpoint = "https://qtify-backend-labs.crio.do/albums/top";

 /* useEffect(() => {
    axios
      .get("https://qtify-backend-labs.crio.do/albums/top")
      .then((response) => {
        setAlbums(response.data);
      })
      .catch((error) => {
        console.error("Error fetching albums data:", error);
      });
  }, []);

*/
  useEffect(() => {
    axios
      .get(apiEndpoint) // Ensure you're passing the correct API endpoint prop
      .then((response) => {
        setAlbums(response.data); // Assuming response.data contains the list of albums
      })
      .catch((error) => {
        console.error("Error fetching albums data:", error);
      });
  }, [apiEndpoint]);
  
 /* 
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
*/
return (
  <div className={styles.sectionContainer}>
    <div className={styles.sectionHeader}>
      <h2>Top Albums</h2>
      <button className={styles.collapseButton}>Collapse</button>
    </div>
    <div className={styles.cardContainer}>
  {albums.length > 0 ? (
    albums.map((album) => (
      <AlbumCard key={album.id} album={album} />
    ))
  ) : (
    <p>No albums found.</p> // Show a fallback message if no albums are returned
  )}
</div>
</div>
);
}

export default Section;


