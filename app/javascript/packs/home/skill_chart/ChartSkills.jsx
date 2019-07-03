import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2/es/index'
import { Container } from 'semantic-ui-react'

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
    chartName: 'Chart Name'
  };

  render(){
    return (
        <Container>
          <div className="chart">
            <Pie
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
                  }
                }}
            />
          </div>
        </Container>
    )
  }
}

export default SkillDoughnutChart