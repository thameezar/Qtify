/*
import React, { useState } from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
// Import the Autocomplete component from @mui/material
import { Autocomplete, TextField} from "@mui/material";
import { truncate } from "../../helpers/helpers";
import { useNavigate } from "react-router-dom";

function Search({ searchData, placeholder }) {
  const [value, setValue] = useState(null);  // Local state to manage value selection
  const navigate = useNavigate();

  const onSubmit = (e, value) => {
    e.preventDefault();
    if (value) {
      console.log(value);
      navigate(`/album/${value.slug}`);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <form
        className={styles.wrapper}
        onSubmit={(e) => {
          onSubmit(e, value);
        }}
      >
        {/* Use Autocomplete from MUI 
        <Autocomplete
          id="search-autocomplete"
          options={searchData || []}
          getOptionLabel={(option) => option.title}
          value={value}
          onChange={(event, newValue) => setValue(newValue)}  // Set selected value
          renderInput={(params) => (
            <TextField
              {...params}
              name="album"
              className={styles.search}
              placeholder={placeholder}
              required
            />
          )}
          renderOption={(props, option) => {
            // Process the option for display
            const artists = option.songs.reduce((acc, song) => {
              acc.push(...song.artists);
              return acc;
            }, []);
            return (
              <li {...props}>
                <div>
                  <p className={styles.albumTitle}>{option.title}</p>
                  <p className={styles.albumArtists}>{truncate(artists.join(", "), 40)}</p>
                </div>
              </li>
            );
          }}
          noOptionsText="No results found"
        />
        <div>
          <button className={styles.searchButton} type="submit">
            <SearchIcon />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;

*/

import React, { useState } from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import { Autocomplete, TextField } from "@mui/material";
import { truncate } from "../../helpers/helpers";
import { useNavigate } from "react-router-dom";

function Search({ searchData, placeholder }) {
  const [value, setValue] = useState(null);  // For storing the selected value
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (value) {
      console.log(value);
      navigate(`/album/${value.slug}`);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <form
        className={styles.wrapper}
        onSubmit={onSubmit}
      >
        <Autocomplete
          id="search-autocomplete"
          options={searchData || []}
          getOptionLabel={(option) => option.title}
          value={value}
          onChange={(event, newValue) => setValue(newValue)}  // Set selected value
          renderInput={(params) => (
            <TextField
              {...params}
              name="album"
              className={styles.search}
              placeholder={placeholder}
              required
            />
          )}
          renderOption={(props, option) => {
            const artists = option.songs.reduce((accumulator, currentValue) => {
              accumulator.push(...currentValue.artists);
              return accumulator;
            }, []);
            return (
              <li {...props} className={styles.listElement}>
                <div>
                  <p className={styles.albumTitle}>{option.title}</p>
                  <p className={styles.albumArtists}>
                    {truncate(artists.join(", "), 40)}
                  </p>
                </div>
              </li>
            );
          }}
        />
        <button className={styles.searchButton} type="submit">
          <SearchIcon />
        </button>
      </form>

      {value && (
        <div>
          {/* Optionally render a list of suggestions if needed */}
        </div>
      )}
    </div>
  );
}

export default Search;
