import React from 'react';
import City from './city';

const CityList = (props) =>{
     //here we want to generate list of Cities using map
     const listOfCities = props.cities.map(function(city){
        return (
            <City key={city._id} image ={city.image} name ={city.name}/>
        );
     });
    
    return listOfCities;
}

export default CityList;