import './ClimateStats.css';
import { ClimateContext } from '../../context/ClimateContext';
import { useContext} from 'react'


function ClimateStats() {

  const temperatureObj = useContext(ClimateContext)

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {temperatureObj.temp}°F
      </div>
      <div className="humidity">
        Humidity {temperatureObj.humidity}%
      </div>
    </div>
  )
}

export default ClimateStats;
