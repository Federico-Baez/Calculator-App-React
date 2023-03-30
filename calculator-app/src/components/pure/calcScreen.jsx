import React from 'react';
import PropTypes from 'prop-types';


const CalcScreen = ({ screenText }) => {
    return (
        <div className="calc-screen">
            <div className='screen-text'>
                {screenText}
            </div>

        </div>
    );
};


CalcScreen.propTypes = {

};


export default CalcScreen;
