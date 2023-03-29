import React from 'react';
import CalcHeader from '../pure/calcHeader';
import CalcPad from '../pure/calcPad';
import CalcScreen from '../pure/calcScreen';

const CalcContainter = ({ handleThemeChange, theme }) => {
    return (
        <div className="calc-container">
            <CalcHeader handleThemeChange={handleThemeChange} themeValue={theme} />
            <CalcScreen />
            <CalcPad />
        </div>
    );
}

export default CalcContainter;
