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
    legendPosition: 'right',
    chartName: 'Chart Name',
    fatSize: 90
  };

  render(){
    return (
        <HorizontalBar
            height={300}
            width={300}
            data={ this.state.chartData }
            options={{
              title:{
                display: this.props.displayTitle,
                text: this.props.chartName,
                fontSize: 25
              },
              legend:{
                display: this.props.displayLegend,
                position: this.props.legendPosition
              },
              centerText: {
                display: true,
                text: "280"
              },
              cutoutPercentage: this.props.fatSize
            }}
        />
    )
  }
}

export default HorizontalChartSkills