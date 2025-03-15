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
import AlbumCard from "../Cards/AlbumCard"; // Import AlbumCard
import Carousel from "../Carousel/Carousel"; // Import Carousel
import styles from "./Section.module.css";

function Section({ apiEndpoint }) {
  const [albums, setAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    // Fetch Top Albums
    axios.get(`${apiEndpoint}/top`)
      .then(response => {
        setAlbums(response.data);
      })
      .catch(error => console.error("Error fetching top albums:", error));

    // Fetch New Albums
    axios.get(`${apiEndpoint}/new`)
      .then(response => {
        setNewAlbums(response.data);
      })
      .catch(error => console.error("Error fetching new albums:", error));
  }, [apiEndpoint]);

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <h2>Top Albums</h2>
        <button
          className={styles.collapseButton}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? "Show All" : "Collapse"}
        </button>
      </div>

      {collapsed ? (
        <Carousel albums={albums} />
      ) : (
        <div className={styles.cardContainer}>
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      )}

      <h3>New Albums</h3>

      {collapsed ? (
        <Carousel albums={newAlbums} />
      ) : (
        <div className={styles.cardContainer}>
          {newAlbums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Section;

