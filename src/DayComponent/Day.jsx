import React from 'react'
import Event from '../EventComponent/Event.jsx'

class Day extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    // console.log(this.props.events)
    //so loud i can't unmute lol 
    //but we want to make a loop that creates 11 <Event dsfad />
    const eventsArr = [];
    for (let i = 0; i < 11; i += 1) {
      eventsArr.push(<Event key={`event${i}`} event={this.props.events[i]}/>)
    }
    return (
      <div className="day">
        {eventsArr}
      </div>
    )
  }
}



export default Day;