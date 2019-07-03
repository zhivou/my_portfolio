import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2/es/index'
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
    chartName: 'Chart Name',
    fatSize: 90
  };

  render(){
    return (
        <Container>
          <div className="chart">
            <Doughnut
                data={
                  {
                    labels: ['Ruby'],
                    datasets: [{
                      label: 'My First dataset',
                      backgroundColor: [
                        'rgba(205,92,92)',
                        'rgba(25,54,65)'],
                      data: [90,10]
                    }]
                  }
                }
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
                  cutoutPercentage: this.props.fatSize
                }}
            />
          </div>
        </Container>
    )
  }
}

export default SkillDoughnutChart