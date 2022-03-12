import React from 'react';
import ReactDOM from 'react-dom';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

class TwitterTimeline extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="saurabhnemade"
        options={{height: 400}}
      />
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <TwitterTimeline name="React" />, document.getElementById('twitter-timeline'))
});
