import React from "react";
import styles from "./displayComponent.css.js";

class DisplayComponent extends React.Component {
  emailsPerHourContainter = () => {
    if (
      this.props.emailsPerHour !== 0 &&
      this.props.emailsPerHour !== "Infinity" &&
      !isNaN(this.props.emailsPerHour)
    ) {
      return (
        <div>
          <hr style={styles.horizontalLine} />
          <div style={styles.box2}>
            They sent {this.props.emailsPerHour} emails per hour.
          </div>
        </div>
      );
    }
  };
  rankContainer = () => {
    if (this.props.rank !== "") {
      return <div style={styles.box2}>Their rank is: {this.props.rank}.</div>;
    }
  };

  render() {
    return (
      <div style={styles.boxContainer_Container}>
        <div style={styles.boxContainer}>
          <div style={styles.box}>
            {this.props.name} sent: {this.props.noEmails} emails today.
          </div>
          <div style={styles.gradient}>
            {this.emailsPerHourContainter()}
            {this.rankContainer()}
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayComponent;
