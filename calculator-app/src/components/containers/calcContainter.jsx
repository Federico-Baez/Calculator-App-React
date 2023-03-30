import React, { useState } from 'react';
import CalcHeader from '../pure/calcHeader';
import CalcPad from '../pure/calcPad';
import CalcScreen from '../pure/calcScreen';

const CalcContainter = ({ handleThemeChange, theme }) => {
    const [screenText, setScreenText] = useState("");
    const [errorFlag, setErrorFlag] = useState(false);
    const [isAnswerFlag, setIsAnswerFlag] = useState(false);

    //functions
    const add = (num1, num2) => {
        if (typeof num1 === "number" && typeof num2 === "number") {
            const result = Math.round((num1 + num2) * 100) / 100;

            setScreenText(result);
        } else {
            setScreenText("Syntax ERROR");
            setErrorFlag(true);
        }

    }
    const substract = (num1, num2) => {
        if (typeof num1 === "number" && typeof num2 === "number") {
            return setScreenText(Math.round((num1 - num2) * 100) / 100);
        } else {
            setScreenText("Syntax ERROR");
            setErrorFlag(true);
        }
    }
    const multiply = (num1, num2) => {
        if (typeof num1 === "number" && typeof num2 === "number") {
            return setScreenText(Math.round((num1 * num2) * 100) / 100);
        } else {
            setScreenText("Syntax ERROR");
            setErrorFlag(true);
        }
    }
    const divide = (num1, num2) => {
        if (typeof num1 === "number" && typeof num2 === "number") {
            if (num2 != 0) {
                return setScreenText(Math.round((num1 / num2) * 100) / 100);
            } else {
                setScreenText("Math ERROR 1");
                setErrorFlag(true);
            }
        } else {
            setScreenText("Syntax ERROR");
            setErrorFlag(true);
        }
    }

    const equals = (screenText) => {
        if (screenText.includes("+")) {
            let numbers = screenText.split("+");
            const num1 = Number(numbers[0]);
            const num2 = Number(numbers[1]);
            add(num1, num2);
        } else if (screenText.includes("-")) {
            let numbers = screenText.split("-");
            const num1 = Number(numbers[0])
            const num2 = Number(numbers[1])
            substract(num1, num2);
        } else if (screenText.includes("x")) {
            let numbers = screenText.split("x");
            const num1 = Number(numbers[0])
            const num2 = Number(numbers[1])
            multiply(num1, num2);
        } else if (screenText.includes("/")) {
            let numbers = screenText.split("/");
            const num1 = Number(numbers[0])
            const num2 = Number(numbers[1])
            divide(num1, num2);
        }
    }

    const handleBtnClick = (char) => {
        //if used to keep the screenText lenght inside the screen, and controling no error flag has been activated
        if ((screenText.length) <= 15 && (errorFlag === false)) {
            //delele action
            if (char === "del") {
                setScreenText(screenText.slice(0, -1));
            }
            // reset action
            else if (char === "reset") {
                setScreenText("");
                setErrorFlag(false);

            }
            // equals action
            else if (char === "equal") {
                equals(screenText);
                setIsAnswerFlag(true);
            }
            //normal button action
            else {
                setScreenText(screenText + char);
            }

        }
        //reset action used when the lenght of screen text >=15
        else if (char === "reset") {
            setScreenText("");
            setErrorFlag(false);

        }
        else if (char === "del") {
        }
        //error message and flag used when the lenght of screen text >15
        else if (screenText.length > 15) {
            setScreenText("Math ERROR 2");
            setErrorFlag(true);

        } else {
            if (isAnswerFlag) {
                setScreenText("")
                setScreenText(char);
                setIsAnswerFlag(false)
            }
        }

    }

    return (
        <div className="calc-container">
            <CalcHeader handleThemeChange={handleThemeChange} themeValue={theme} />
            <CalcScreen screenText={screenText} />
            <CalcPad handleClick={handleBtnClick} />
        </div>
    );
}

export default CalcContainter;
