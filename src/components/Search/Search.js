import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import { Autocomplete, TextField } from "@mui/material";  // Import Autocomplete and TextField from @mui/material
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/system';


// Styled component for the listbox (suggested options)
const Listbox = styled("ul")({
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
});

function Search({ searchData, placeholder }) {
  const navigate = useNavigate();
  
  const handleSearchChange = (event, value) => {
    if (value) {
      navigate(`/album/${value.slug}`);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <form className={styles.wrapper} onSubmit={(e) => e.preventDefault()}>
        <Autocomplete
          freeSolo
          id="search-autocomplete"
          options={searchData || []}
          getOptionLabel={(option) => option.title}
          onChange={handleSearchChange} // Use Autocomplete's onChange to navigate
          renderInput={(params) => (
            <TextField {...params} className={styles.search} placeholder={placeholder} variant="outlined" />
          )}
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
