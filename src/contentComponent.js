import React from "react";

import InputComponent from "./inputComponent";
import DisplayComponent from "./displayComponent";


class ContentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noEmails: 0,
      noHours: 0,
      emailsPerHour: 0,
      emailsPerMinute: 0,
      name: "User",
      rank: "",
      achievementAlt: "",
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleHoursChange = this.handleHoursChange.bind(this);
  }

  handleEmailChange(e) {
    e.preventDefault();
    this.setState({ noEmails: e.target.value });
    this.scoreCalculatorEmail(e);
    this.rankCalculator(e);
  }
  handleNameChange(e) {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }
  handleHoursChange = e => {
    e.preventDefault();
    this.setState({ noHours: e.target.value });
    this.scoreCalculatorHours(e);
  };

  scoreCalculatorEmail = e => {
    if (e.target.value != null) {
      var tempEmailsPerHour = e.target.value / this.state.noHours;
      this.setState({ emailsPerHour: tempEmailsPerHour.toFixed(2) });
    }
  };

  scoreCalculatorHours = e => {
    if (e.target.value != null) {
      var tempEmailsPerHour = this.state.noEmails / e.target.value;
      this.setState({ emailsPerHour: tempEmailsPerHour.toFixed(2) });

    }
  };

  rankCalculator = e => {
    if (e.target.value <= 0 || e.target.value === null) {
      this.setState({ rank: "" });
    }
    if (e.target.value >= 1 && e.target.value <= 2) {
      this.setState({ rank: "Administrative Amateur" });
    }
    if (e.target.value >= 3 && e.target.value <= 5) {
      this.setState({ rank: "Notification Novice" });
    }
    if (e.target.value >= 5 && e.target.value <= 9) {
      this.setState({ rank: "Gmail Greenhorne" });
    }
    if (e.target.value >= 10 && e.target.value <= 15) {
      this.setState({ rank: "Read Receipt Rogue" });
      this.setState({ achievementAlt: "Rank 10!" })      
    }
    if (e.target.value >= 16 && e.target.value <= 20) {
      this.setState({ rank: "Writing Warrior" });
    }
    if (e.target.value >= 21 && e.target.value <= 30) {
      this.setState({ rank: "Middle Managment Mage" });
      this.setState({ achievementAlt: "Rank 20!" })    
    }
    if (e.target.value >= 31 && e.target.value <= 40) {
      this.setState({ rank: "Administrative Adept" });
    }
    if (e.target.value >= 41 && e.target.value <= 50) {
      this.setState({ rank: "Departmental Demi-God" });
      this.setState({ achievementAlt: "Rank 40!" })    
    }
    if (e.target.value >= 51) {
      this.setState({ rank: "Gmail God" });
    }
  };

  render() {
    const {
      name,
      noEmails,
      noHours,
      emailsPerHour,
      rank,
      emailsPerHourHidden,
      achievementAlt
    } = this.state;
    return (
      <div>
        <InputComponent
          noEmails={noEmails}
          name={name}
          noHours={noHours}
          handleEmailChange={this.handleEmailChange}
          handleNameChange={this.handleNameChange}
          handleHoursChange={this.handleHoursChange}
        />
        <DisplayComponent
          name={name}
          noEmails={noEmails}
          emailsPerHour={emailsPerHour}
          emailsPerHourHidden={emailsPerHourHidden}
          rank={rank}
          achievementAlt={achievementAlt}
        />
      </div>
    );
  }
}

export default ContentComponent;
