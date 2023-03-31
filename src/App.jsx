import { useState, useEffect } from 'react'
import './App.css'
import CalcContainter from './components/containers/calcContainter';

//styles
import './styles/calculator-Themes.scss';

function App() {
  const [theme, setTheme] = useState("1");


  useEffect(() => {
    //check for the theme on local storage
    const currentTheme = localStorage.getItem("prefers-color-scheme");
    //if found, set selected theme value in state
    if (currentTheme) {
      setTheme(currentTheme);
      getThemeClass();
    }
  }, []);

  function handleThemeChange(event) {
    const themeValue = (event.target.value);
    setTheme(themeValue);
    localStorage.setItem("prefers-color-scheme", themeValue);
  }


  function getThemeClass() {
    switch (theme) {
      case '1':
        return 'theme-1';
      case '2':
        return 'theme-2';
      case '3':
        return 'theme-3';
      default:
        return 'theme-1';
    }
  }

  return (
    <div className={`App ${getThemeClass()}`}>
      <CalcContainter handleThemeChange={handleThemeChange} theme={theme} />
    </div>
  )
}

export default App;





