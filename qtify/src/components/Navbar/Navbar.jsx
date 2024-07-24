import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import SearchBar from "../Search Bar/SearchBar";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <SearchBar placeholder={"Search a album of your choice"} />
      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;
