import React from "react";

import "./displayComponent.css";

class DisplayComponent extends React.Component {
 emailsPerHourContainter = () => {
    if (this.props.emailsPerHour !== 0 && this.props.emailsPerHour !== 'Infinity' &&  !isNaN(this.props.emailsPerHour)) {
     return  <div>They sent {this.props.emailsPerHour} emails per hour.</div>;
    }
  };
  rankContainer = () => {
    if (this.props.rank !== "") {return( <div>Their rank is: {this.props.rank}.</div>)}
  }

  render() {
    return (
      <div>
        <div>
          {this.props.name} sent: {this.props.noEmails} emails today.
        </div>
        {this.emailsPerHourContainter()}
        {this.rankContainer()}
      </div>
    );
  }
}

export default DisplayComponent;
