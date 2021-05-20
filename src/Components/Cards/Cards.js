import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import React from 'react';
import CountUp from 'react-countup';
import styles from './Cards.module.css';

const Cards = (props) => {
    if(!props.data.cases){
        return 'Loading.....';
    }
    //console.log(props.data)
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={`${styles.card} ${styles.infected}`}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Total Cases</Typography>
                        <Typography variant="h5"><CountUp start={0} end={props.data.cases} duration={1} separator="," /></Typography>
                        <Typography color="textSecondary">Cases Today</Typography>
                        <Typography variant="body1">+<CountUp start={0} end={props.data.todayCases} duration={1} separator="," /></Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={`${styles.card} ${styles.recovered}`}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Total Recovered</Typography>
                        <Typography variant="h5"><CountUp start={0} end={props.data.recovered} duration={1} separator="," /></Typography>
                        <Typography color="textSecondary">Recovered Today</Typography>
                        <Typography variant="body1">+<CountUp start={0} end={props.data.todayRecovered} duration={1} separator="," /></Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={`${styles.card} ${styles.deaths}`}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Total Deaths</Typography>
                        <Typography variant="h5"><CountUp start={0} end={props.data.deaths} duration={1} separator="," /></Typography>
                        <Typography color="textSecondary">Deaths Today</Typography>
                        <Typography variant="body1">+<CountUp start={0} end={props.data.todayDeaths} duration={1} separator="," /></Typography>
                    </CardContent>
                </Grid>
            </Grid>
            
        </div>
    
)}

export default Cards;