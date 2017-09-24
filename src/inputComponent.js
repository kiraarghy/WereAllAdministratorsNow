import React from "react";

import styles from "./inputComponent.css.js";

class InputComponent extends React.Component {

  render() {
    const {
      name,
      noEmails,
      noHours,
      handleEmailChange,
      handleHoursChange,
      handleNameChange
    } = this.props;
    return (
      <div style={styles.container}>
        <label>
          Name:
          <input
            onChange={handleNameChange}
            label="Put in your name here"
            type="text"
            value={name}
          />
        </label>
        <br />
        <label>
          Number of emails you sent today:
          <input
            onChange={handleEmailChange}
            label="Put in the number of emails you sent today"
            type="number"
            value={noEmails}
          />
        </label>
        <br />
        <label>
          Number of hours you spent working today:
          <input
            onChange={handleHoursChange}
            label="Put in the number of hours you spent working today"
            type="number"
            value={noHours}
          />
        </label>
      </div>
    );
  }
}
export default InputComponent;
