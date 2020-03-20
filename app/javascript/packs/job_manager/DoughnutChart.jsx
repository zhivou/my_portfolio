import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2/es/index'

class SkillDoughnutChart extends Component {
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
      <Doughnut
        height={100}
        width={100}
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

export default SkillDoughnutChart