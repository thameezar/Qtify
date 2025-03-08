/*import React from "react";
import styles from "./Button.module.css";

function Button({text}) {
  return (
    <button className={styles.Button}>
      {text}
      </button>
  );
}

export default Button;
*/

import React from "react";
import styles from "./Button.module.css";

function Button({ text, className }) {
  return (
    <button className={`${styles.Button} ${className}`}>
      {text}
    </button>
  );
}

export default Button;
