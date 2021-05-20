import React from 'react';
import {Line} from 'react-chartjs-2';
import styles from './Chart.module.css';


const Chart = (props) =>{
    
    if(!props.infected){
        return 'Loading...';         
    }
    else{      
      const data = {
        labels: Object.keys(props.infected),
        datasets: [
          {
            label: "Infected",
            fill: true,
            borderColor:'#0000ff',
            backgroundColor:'rgb(0,0,255,0.1)',
            data: Object.values(props.infected)
          },
          {
            label: "Recovered",
            fill: true,
            borderColor:'green',
            backgroundColor:'rgb(0,255,0,0.1)',
            data: Object.values(props.recovered)
          },
          {
            label: "Deaths",
            fill: true,
            borderColor:'red',
            backgroundColor:'rgb(255,0,0,0.1)',
            data: Object.values(props.deaths)
          }
        ],
        type: 'Logarthmic'
      };
    
      

      return ( 
        <div className={styles.container}>
          <Line data={data}></Line>
        </div>
      );
    }
}

export default Chart;