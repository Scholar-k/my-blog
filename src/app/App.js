import React, { Component } from 'react';
import { View as CommonWrapper } from '../components/CommonWrapper/'

import './reset.css'
import './style.css'

export default class App extends Component {
  render() {
    return (
      <div className="main">
        <CommonWrapper/>
      </div>
    )
  }
}
