import React from 'react';

class Event extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
  
      }
    }
  
    render() {
      console.log(this.props)
      console.log(this.props.event)
      return (
        <div className="event">
          
          {/* <h1>{this.props.event["summary"]}</h1> */}
        </div>
      )
    }
  }

export default Event;