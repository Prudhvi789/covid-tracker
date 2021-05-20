import { FormControl, InputLabel, Select } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './Selector.module.css'; 

const Selector = (props) => {

    const [countryData,setCountryData] = useState([]);

    useEffect(() => {
        axios.get('https://corona.lmao.ninja/v2/countries?yesterday&sort')
        .then(response => response.data.map((element)=>{
          return element.country;
        }))
        .then(newresponse => setCountryData(newresponse))
    },[]);
    
    console.log(props.country);

    return (
        <>
        <FormControl className={styles.formControl}>
          <InputLabel htmlFor="country">Country</InputLabel>
          <Select
            native
            defaultValue="India"
            onChange={(event)=>{props.helper('/'+event.target.value)}}
            inputProps={{
              name: 'country',
              id: 'country',
            }}
          >
            <option value="India" >India</option>
            {
                    countryData.map((element,index)=>{
                        return (<option key={index} value={element}>{element}</option>)
                    })
                }
          </Select>
        </FormControl>
        </>
    )
}

export default Selector;