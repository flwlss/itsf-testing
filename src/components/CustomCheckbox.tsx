import React from "react";
import styles from "../assets/styles/CustomCheckbox.module.css";

interface ICustomCheckbox {
  onChange: () => void;
  checked: boolean;
}

const CustomCheckbox = (props: ICustomCheckbox) => {
  return (
    <div className={styles.checkboxWrapper}>
      <label className={styles.checkbox}>
        <input
          checked={props.checked}
          onChange={props.onChange}
          type="checkbox"
        />
        <span className={styles.checkmark} />
      </label>
      <p>Remember me on next login</p>
    </div>
  );
};

export default CustomCheckbox;
