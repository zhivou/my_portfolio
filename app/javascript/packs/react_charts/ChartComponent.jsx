import React, { Component } from 'react';
import { Line, Pie, Bar } from 'react-chartjs-2'

class ChartComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  };

  render(){
    return (
        <div className="container chart">
          <Line
              data={this.state.chartData}
              options={{
                title:{
                  display:this.props.displayTitle,
                  text:'Largest Cities In '+this.props.location,
                  fontSize:25
                },
                legend:{
                  display:this.props.displayLegend,
                  position:this.props.legendPosition
                }
              }}
          />
        </div>
    )
  }
}

export default ChartComponent