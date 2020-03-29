import React from 'react'
import Day from '../DayComponent/Day.jsx'

class Week extends React.Component {
  constructor() {
    super()
    this.state = {
      day1: ' ',
      // startTime: ' ',
    }
  }

  componentDidMount() {
    const endpoint = 'http://slack-server.elasticbeanstalk.com/calendar/LA/35'
    fetch(endpoint).then(response => {
      return response.json()
    }).then(data => {
      // console.log(data['Mar 09 2020'])
      
      this.setState(() => {
        return {day1: data['Mar 09 2020']}
      })

    })
  }

  render() {
    return (
      <Day events={this.state.day1} />
    )
  }
}



export default Week;
