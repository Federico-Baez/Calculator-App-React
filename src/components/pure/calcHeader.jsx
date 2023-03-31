import React, { useEffect } from 'react';
import PropTypes from 'prop-types';


const CalcHeader = ({ handleThemeChange, themeValue }) => {
    useEffect(() => {
        console.log(themeValue);
    }, []);

    return (
        <div className='header-container'>
            <h1 className='title'>calc</h1>
            <div className="theme-selector">
                <div className='indicator-numbers'>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </div>
                <label htmlFor="themeRange" className="form-label">T H E M E</label>
                <input type="range" min="1" max="3" step="1" value={themeValue} onChange={handleThemeChange} id="themeRange" className='range-field' />
            </div>
        </div>
    );
};


CalcHeader.propTypes = {
    handleThemeChange: PropTypes.func.isRequired,
    themeValue: PropTypes.string.isRequired,
};


export default CalcHeader;
