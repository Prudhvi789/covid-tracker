import { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Components/Cards/Cards';
import Selector from './Components/Selector/Selector';
import Chart from './Components/Chart/Chart';
import styles  from './App.module.css';
import corona from './img.jpg';

function App() {

  const [data,setData] = useState({});
  const [country,setCountry] = useState("/India");
  const [dailyData,setDailyData] = useState({});

  useEffect(()=>{
    axios.get('https://corona.lmao.ninja/v2/countries'+country+'?yesterday=true&strict=true&query')
        .then(result => setData(result.data));
    axios.get("https://corona.lmao.ninja/v2/historical"+country+"?lastdays=30")
        .then((response) => setDailyData(response.data));     
    },[country]);

    var infected = {},recovered = {},deaths = {};
      if (Object.entries(dailyData).length) {
        infected = dailyData.timeline.cases;
        recovered = dailyData.timeline.recovered;
        deaths = dailyData.timeline.deaths;
      }
    
  return (
    <div className={styles.app}>
      <img src={corona} alt='' className={styles.img}/>
      <Cards data={data}/>
      <Selector helper={setCountry} country={country}/>
      <Chart infected={infected} recovered={recovered} deaths={deaths} /> 
    </div>
  );
}

export default App;

