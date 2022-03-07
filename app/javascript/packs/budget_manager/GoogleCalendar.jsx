import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from "axios";
const localizer = momentLocalizer(moment);

export default class GoogleCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      rawEvents: []
    }
  }

  componentDidMount () {
    const CALENDAR_ID = gon.calendarId;
    const API_KEY = gon.calendarKey;
    let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

    axios.get(url)
      .then( res => {
        this.setState({rawEvents: res.data.items})
        this.sanitizeEvents(res.data.items);
      })
      .catch( err => {
        console.log(err)
      });
  }

  sanitizeEvents(events) {
    console.log("Sanitizing google events...")
    const eves = [];
    events.map((event) => {
      if (event.status === "confirmed") {
        if (event.start.date || event.start.dateTime) {
          console.log(event.start.date);
          eves.push({
            id: event.id,
            start: new Date(event.start.date || event.start.dateTime),
            end: new Date(event.end.date || event.end.dateTime),
            title: event.summary,
            htmlLink: event.htmlLink
          });
        }
      }
    });
    this.setState({events: eves})
  }

  render = () => {
    return(
      <div>
        <Calendar
          selectable
          localizer={localizer}
          start={new Date()}
          end="month"
          style={{ height: "500px" }}
          events={this.state.events}
          onSelectEvent={event => window.open(event.htmlLink, "_blank")}
        />
      </div>
    )
  }
}
