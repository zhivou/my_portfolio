import React, { Component } from 'react';
import { Line, Pie, Bar } from 'react-chartjs-2/es/index'
import { Container } from 'semantic-ui-react'

class ChartComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  // This is A way to set defaultProps in react
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
            <Bar
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

export default ChartComponent