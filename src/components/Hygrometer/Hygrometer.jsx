import ReactSlider from 'react-slider';
import './Hygrometer.css';
import { useContext } from 'react';
import {ClimateContext} from '../../context/ClimateContext'

function Hygrometer() {

   const humidityObj = useContext(ClimateContext)

  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {"y"}%</div>
      <ReactSlider
        value={humidityObj.humidity}
        onAfterChange={(val) => {humidityObj.setHumidity(val)}}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Hygrometer;
