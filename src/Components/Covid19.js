import React from 'react';
import Testcomponent from './testcomponent';
import axios from 'axios';

export default class Covid19 extends React.Component {
  state = {
    countries: []
  }

  componentDidMount() {
    axios.get(`https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true`)
    // axios.get(`https://api.apify.com/v2/datasets/7Fdb90FMDLZir2ROo/items?format=json&clean=1`)
      .then(res => {
        const countries = res.data;
        this.setState({ countries });
      })
  }

  render() {
    return (
      <>
      <Testcomponent />
      <ul >
        { this.state.countries.map(country => <li key ={country.country}>{country.country}</li>)}
      </ul>
      </>
    )
  }
}