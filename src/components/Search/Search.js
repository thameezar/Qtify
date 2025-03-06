/*import React from "react";
import styles from "./Search.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
//import useAutocomplete from "@mui/base/useAutocomplete";
//import { Autocomplete} from '@mui/material';
import { styled } from "@mui/system";
import { truncate } from "../../helpers/helpers";
import { useNavigate } from "react-router-dom";
import { Autocomplete,Button, Tooltip } from '@mui/material';


const Listbox = styled("ul")(({ theme }) => ({
  width: "100%",
  margin: 0,
  padding: 0,
  position: "absolute",
  borderRadius: "0px 0px 10px 10px",
  border: "1px solid var(--color-primary)",
  top: 60,
  height: "max-content",
  maxHeight: "500px",
  zIndex: 10,
  overflowY: "scroll",
  left: 0,
  bottom: 0,
  right: 0,
  listStyle: "none",
  backgroundColor: "var(--color-black)",
  overflow: "auto",
  "& li.Mui-focused": {
    backgroundColor: "#4a8df6",
    color: "white",
    cursor: "pointer",
  },
  "& li:active": {
    backgroundColor: "#2977f5",
    color: "white",
  },
}));

function Search({ searchData, placeholder }) {
  const {
    getRootProps,
    getInputLabelProps,
    value,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = Autocomplete({
    id: "use-autocomplete-demo",
    options: searchData || [],
    getOptionLabel: (option) => option.title,
  });

  const navigate = useNavigate();
  const onSubmit = (e, value) => {
    e.preventDefault();
    console.log(value);
    navigate(`/album/${value.slug}`);
    //Process form data, call API, set state etc.
  };

  return (
    <div style={{ position: "relative" }}>
      <form
        className={styles.wrapper}
        onSubmit={(e) => {
          onSubmit(e, value);
        }}
      >
        <div {...getRootProps()}>
          <input
            name="album"
            className={styles.search}
            placeholder={placeholder}
            required
            {...getInputProps()}
          />
        </div>
        <div>
          <button className={styles.searchButton} type="submit">
            <SearchIcon />
          </button>
        </div>
      </form>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => {
            // console.log(option);
            const artists = option.songs.reduce((accumulator, currentValue) => {
              accumulator.push(...currentValue.artists);
              return accumulator;
            }, []);

            return (
              <li
                className={styles.listElement}
                {...getOptionProps({ option, index })}
              >
                <div>
                  <p className={styles.albumTitle}>{option.title}</p>

                  <p className={styles.albumArtists}>
                    {truncate(artists.join(", "), 40)}
                  </p>
                </div>
              </li>
            );
          })}
        </Listbox>
      ) : null}
    </div>
  );
}

export default Search;
*/


import React, { useState } from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
// Import the Autocomplete component from @mui/material
import { Autocomplete, TextField, Tooltip } from "@mui/material";
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
        {/* Use Autocomplete from MUI */}
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
