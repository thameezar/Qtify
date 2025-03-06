import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.searchWrapper}>
     <Link to="/" className={styles.logo}>
      <Logo />
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
        className= {styles.searchBox}
        />   
      <Button className = {styles.feedbackButton}>Give Feedback</Button>
      </div>
    </nav>
  );
}

export default Navbar;
