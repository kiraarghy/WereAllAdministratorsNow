import React from "react";
import styles from "./displayComponent.css.js";

import Achievement10 from "./200px-Class_K_fire_icon.png";
import Achievement20 from "./200px-Fire_type_A.png";
import Achievement40 from "./200px-Fire_type_B.png";

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
  achievementContainer = () => {
    if (this.props.noEmails >= 10 && this.props.noEmails <= 20) {
      return <img src={Achievement10} width={50} height={50} alt={this.props.achievementAlt} />;
    }
    if (this.props.noEmails >= 21 && this.props.noEmails <= 30) {
      return <img src={Achievement20} width={50} height={50} alt={this.props.achievementAlt} />;
    }
    if (this.props.noEmails >= 31) {
      return <img src={Achievement40} width={50} height={50} alt={this.props.achievementAlt} />;
    }
  };

  render() {
    return (
      <div style={styles.boxContainer_Container}>
        <div style={styles.boxContainer}>
          <div style={styles.box}>
            {this.props.name} sent: {this.props.noEmails} emails today.
          </div>
          <div style={styles.containerStyle}>
            {this.emailsPerHourContainter()}
            {this.rankContainer()}
          </div>
          <div>{this.achievementContainer()}</div>
        </div>
      </div>
    );
  }
}

export default DisplayComponent;
