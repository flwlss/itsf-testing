import React from "react";
import styles from "../assets/styles/Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderBackground}>
      <div className={styles.loader} />
    </div>
  );
};

export default Loader;
