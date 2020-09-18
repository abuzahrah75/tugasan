import React from 'react';

import axios from 'axios';

export default class Covid19 extends React.Component {
  state = {
    countries: []
  }

  componentDidMount() {
    axios.get(`https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true`)
      .then(res => {
        const countries = res.data;
        this.setState({ countries });
      })
  }

  render() {
    return (
      <ul>
        { this.state.countries.map(country => <li>{country.country}</li>)}
      </ul>
    )
  }
}