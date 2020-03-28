import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from "axios";
const localizer = momentLocalizer(moment);

export default class GoogleCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }

  componentDidMount () {
    const CALENDAR_ID = gon.calendarId;
    const API_KEY = gon.calendarKey;
    let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

    axios.get(url)
      .then( res => {
        const eves = [];
        res.data.items.map((event) => {
          eves.push({
            id: event.id,
            start: new Date(event.start.date || event.start.dateTime),
            end: new Date(event.end.date || event.end.dateTime),
            title: event.summary
          });
        });
        this.setState({events: eves})
      })
      .catch( err => {
        console.log(err)
      });
  }

  render = () =>
    <div>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        style={{ height: "500px" }}
        events={this.state.events}
      />
    </div>
}