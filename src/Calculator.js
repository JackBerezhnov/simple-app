import React from 'react';
import './App.css';
import TemperatureInput from './components/TemperatureInput';


class Calculator extends React.Component {

  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}


export default Calculator;
