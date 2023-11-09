import './LightSwitch.css';
import { ThemeContext, useTheme } from '../../context/ThemeContext';
import { useState } from 'react';

function LightSwitch() {
  const theme = useTheme(ThemeContext)
  const { setThemeName } = useTheme(ThemeContext)

  return (
   <div className={`light-switch ${theme.themeName}`}>
      <div className="on" onClick = {()=>setThemeName('day')}>DAY</div>
      <div className="off" onClick = {()=>setThemeName('night')}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;
