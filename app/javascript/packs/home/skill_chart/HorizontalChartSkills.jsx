import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2/es/index'

class HorizontalChartSkills extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'bottom',
    chartName: 'Chart Name',
  };

  render(){
    return (
        <HorizontalBar
            height={90}
            data={ this.state.chartData }
            options={{
              title:{
                display: this.props.displayTitle,
                fontSize: 25
              },
              legend:{
                display: this.props.displayLegend,
                position: this.props.legendPosition
              },
              tooltips: {
                enabled: false
              },
              scales: {
                xAxes: [{
                  display: true,
                  ticks: {
                    beginAtZero: true,
                    max: 100
                  }
                }],
                yAxes: [{ticks: {mirror: true}}]
              }
            }}
        />
    )
  }
}

export default HorizontalChartSkills