import ReactSlider from 'react-slider';
import './Thermometer.css';

import {ClimateContext} from '../../context/ClimateContext'
import {useClimate} from '../../context/ClimateContext'
import {useState,useContext} from 'react'


function Thermometer() {

  const temperatureObj = useContext(ClimateContext)

  

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {"x"}°F</div>
      <ReactSlider
        value={temperatureObj.temp}
        onAfterChange={(val) => {temperatureObj.setTemp(val)}}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;
