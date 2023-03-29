import React from 'react';
import PropTypes from 'prop-types';


const CalcPad = () => {
    return (
        <div className="calc-keypad">
            <div className='button-container'>
                <div className='row'>
                    <button className='col-1 sm-btn number'>7</button>
                    <button className='col-2 sm-btn number'>8</button>
                    <button className='col-3 sm-btn number'>9</button>
                    <button className='col-4 sm-btn btn-spc'>DEL</button>
                </div>
                <div className='row'>
                    <button className='col-1 sm-btn number'>4</button>
                    <button className='col-2 sm-btn number'>5</button>
                    <button className='col-3 sm-btn number'>6</button>
                    <button className='col-4 sm-btn number'>+</button>
                </div>
                <div className='row'>
                    <button className='col-1 sm-btn number'>1</button>
                    <button className='col-2 sm-btn number'>2</button>
                    <button className='col-3 sm-btn number'>3</button>
                    <button className='col-4 sm-btn number'>-</button>
                </div>
                <div className='row'>
                    <button className='col-1 sm-btn number'>.</button>
                    <button className='col-2 sm-btn number'>0</button>
                    <button className='col-3 sm-btn number'>/</button>
                    <button className='col-4 sm-btn number'>x</button>
                </div>
                <div className='row'>
                    <button className='col-1 col-2 lg-btn btn-spc'>RESET</button>
                    <button className='col-3 col-4 lg-btn btn-spc-eq number'>=</button>
                </div>
            </div>
        </div>
    );
};


CalcPad.propTypes = {

};


export default CalcPad;
