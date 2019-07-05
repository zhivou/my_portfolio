import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2/es/index'
import { Container } from 'semantic-ui-react'

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
    legendPosition: 'right'
  };

  render(){
    return (
        <HorizontalBar
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
              scales: {
                xAxes: [{
                  display: true,
                  ticks: {
                    beginAtZero: true,
                    steps: 100,
                    stepValue: 1,
                    max: 100
                  }
                }]
              },
              centerText: {
                display: true,
                text: "280"
              }
            }}
        />
    )
  }
}

export default HorizontalChartSkills