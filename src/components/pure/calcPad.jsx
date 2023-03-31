import React from 'react';
import PropTypes from 'prop-types';


const CalcPad = ({ handleClick }) => {


    return (
        <div className="calc-keypad">
            <div className='button-container'>
                <div className='row'>
                    <button onClick={() => handleClick("7")} className='col-1 sm-btn number'>7</button>
                    <button onClick={() => handleClick("8")} className='col-2 sm-btn number'>8</button>
                    <button onClick={() => handleClick("9")} className='col-3 sm-btn number'>9</button>
                    <button onClick={() => handleClick("del")} className='col-4 sm-btn btn-spc'>DEL</button>
                </div>
                <div className='row'>
                    <button onClick={() => handleClick("4")} className='col-1 sm-btn number'>4</button>
                    <button onClick={() => handleClick("5")} className='col-2 sm-btn number'>5</button>
                    <button onClick={() => handleClick("6")} className='col-3 sm-btn number'>6</button>
                    <button onClick={() => handleClick("+")} className='col-4 sm-btn number'>+</button>
                </div>
                <div className='row'>
                    <button onClick={() => handleClick("1")} className='col-1 sm-btn number'>1</button>
                    <button onClick={() => handleClick("2")} className='col-2 sm-btn number'>2</button>
                    <button onClick={() => handleClick("3")} className='col-3 sm-btn number'>3</button>
                    <button onClick={() => handleClick("-")} className='col-4 sm-btn number'>-</button>
                </div>
                <div className='row'>
                    <button onClick={() => handleClick(".")} className='col-1 sm-btn number'>.</button>
                    <button onClick={() => handleClick("0")} className='col-2 sm-btn number'>0</button>
                    <button onClick={() => handleClick("/")} className='col-3 sm-btn number'>/</button>
                    <button onClick={() => handleClick("x")} className='col-4 sm-btn number'>x</button>
                </div>
                <div className='row'>
                    <button onClick={() => handleClick("reset")} className='col-1 col-2 lg-btn btn-spc'>RESET</button>
                    <button onClick={() => handleClick("equal")} className='col-3 col-4 lg-btn btn-spc-eq number'>=</button>
                </div>
            </div>
        </div>
    );
};


CalcPad.propTypes = {

};


export default CalcPad;
