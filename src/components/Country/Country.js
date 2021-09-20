import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, flag, capital, population, region } = props.country
    //console.log(props.country)
    return (
        <div className='country bg-info'>
            <h3 className='text-danger'>{name}</h3>
            <img style={{ width: '200px' }} src={flag} alt="" />
            <p><strong>Region: {region}</strong></p>
            <h5>Capital: {capital}, Total Population: {population}</h5>
        </div>
    );
};

export default Country;